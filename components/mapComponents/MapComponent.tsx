"use client";
import useAuthStore from "@/store/useAuthStore";
import {
  Autocomplete,
  DirectionsRenderer,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface IProps {
  onProceed: (location: { lat: number; lng: number }) => void;
}

const MapComponent = ({ onProceed }: IProps) => {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();
  const [directionResponse, setDirectionResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  // inputSearch information from user
  const originRef = useRef<any>();
  const destinatinonRef = useRef<any>();
  const nearestlocation = useRef<any>();

  const [center, setCenter] = useState({ lat: 27.6701866, lng: 85.3197062 });

  const autocompleteRef = useRef<any>();

  // Function to handle Autocomplete place selection and setting value of lat and long of center.
  const handlePlaceSelect = () => {
    if (autocompleteRef.current !== null) {
      const place = autocompleteRef.current.getPlace();
      if (place && place.geometry) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setCenter({ lat, lng });
        // console.log(`Latitude: ${lat}, Longitude: ${lng}`);
      }
    }
  };

  // setting google map api...
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyC2iS_ad-zpImBQFaY3XeZVdzxNLU4nz8s",
    libraries: ["places"],
  });

  // show direction when user clicks direction button
  // const calculateRoute = async () => {
  //   if (originRef.current.value === "" || destinatinonRef.current.value === "")
  //     return;

  //   const directionService: any = new google.maps.DirectionsService();
  //   const results = await directionService.route({
  //     origin: originRef.current.value,
  //     destination: destinatinonRef.current.value,
  //     travelMode: google.maps.TravelMode.DRIVING,
  //   });

  //   setDirectionResponse(results);
  //   setDistance(results?.routes[0].legs[0].distance.text);
  //   setDuration(results?.routes[0].legs[0].distance.text);
  // };

  // clear route infromation when user clicks clear button
  // const clearRoute = () =>{
  //   setDirectionResponse(null)
  //   setDistance('')
  //   setDuration('')
  //   originRef.current.value = ""
  //   destinatinonRef.current.value = ""
  // }

  useEffect(() => {
    // ASK FOR USER LOCATION
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  if (!isLoaded) {
    return <h1>loading......</h1>;
  }

  const handlePlaceService = () => {
    //if (!isAuthenticated) router.push("/signin");
    // order service
    onProceed(center);
  };

  return (
    <div className="flex max-w-[1280px] m-auto  justify-center items-center  ">
      <div className="map-container w-full mt-[16px] mb-[39px] p-[9px] shadow-md rounded-md bg-[#f5f5f5] ">
        <div className="flex flex-col gap-[3px]">
          <h1 className="text-[#203EB2] font-bold">Location Info</h1>
        </div>
        <div className="pt-2 lg:flex lg:space-x-3 lg:items-center">
          <div className="">
            <h3 className="font-medium">Enter Address</h3>
          </div>
          <div className="flex flex-grow gap-4 items-center my-[8px] md:my-4 max-md:flex-col">
            <Autocomplete
              className="w-full"
              onLoad={(autocomplete) => {
                autocompleteRef.current = autocomplete;
                autocomplete.setFields(["geometry"]);
              }}
              onPlaceChanged={handlePlaceSelect}
            >
              <input
                className="w-full bg-white outline-[1px] outline-[#2591B2]  p-2 "
                type="text"
                placeholder="Search Nearest Location"
              />
            </Autocomplete>
            {/* <button
            onClick={calculateRoute}
            className="bg-primary rounded-[3px] cursor-pointer text-white px-[13px] py-[8.5px] "
          >
            Direction
          </button> */}
          </div>
        </div>

        <div className="w-[full] h-[50vh] flex-wrap p-4 flex justify-between ">
          <div className="w-full md:basis-[58%] h-[46%] md:h-full">
            <GoogleMap
              center={center}
              zoom={14}
              mapContainerStyle={{ width: "100%", height: "100%" }}
            >
              <Marker position={center} />
              {directionResponse && (
                <DirectionsRenderer directions={directionResponse} />
              )}
            </GoogleMap>
          </div>

          <div className="w-full md:basis-[37%]">
            <div className="mt-2">
              <p className="font-bold">Address:</p>
              <p>
                Latitude : {center.lat} Longitude : {center.lng}
              </p>
            </div>
            <div className="flex gap-5 mt-[20px]">
              <button
                className=" bg-primary rounded-[3px] cursor-pointer text-white px-[13px] py-[8.5px]"
                onClick={() => router.back()}
              >
                Back
              </button>
              <button
                className=" bg-primary rounded-[3px] cursor-pointer text-white px-[13px] py-[8.5px]"
                onClick={handlePlaceService}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
