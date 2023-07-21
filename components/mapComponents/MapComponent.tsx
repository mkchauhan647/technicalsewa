import React, { useRef, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

const MapComponent = () => {
  const [directionResponse, setDirectionResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  // inputSearch information from user
  const originRef = useRef<any>();
  const destinatinonRef = useRef<any>();



  const center = { lat: 27.7172, lng: 85.324 }; // center location

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyC2iS_ad-zpImBQFaY3XeZVdzxNLU4nz8s",
    libraries: ["places"],
  });

  // show direction when user clicks direction button
  const calculateRoute = async () => {
    if (originRef.current.value === "" || destinatinonRef.current.value === "")
      return;

    const directionService: any = new google.maps.DirectionsService();
    const results = await directionService.route({
      origin: originRef.current.value,
      destination: destinatinonRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });
   
    setDirectionResponse(results);
    setDistance(results?.routes[0].legs[0].distance.text);
    setDuration(results?.routes[0].legs[0].distance.text);
  };

  // clear route infromation when user clicks clear button
    const clearRoute = () =>{
      setDirectionResponse(null)
      setDistance('')
      setDuration('')
      originRef.current.value = ""
      destinatinonRef.current.value = ""
    }

  if (!isLoaded) {
    return <h1>loading......</h1>;
  }

  return (
    <div className="flex max-w-[1280px] m-auto  justify-center items-center  ">
      <div className="map-container w-full my-4 p-4 shadow-md rounded-md bg-[#f5f5f5] ">
        <div className="flex flex-col gap-4">
          <h1 className="text-[#203EB2] font-bold">Location Info</h1>
          <h3>Enter Address</h3>
        </div>
        <div className="flex my-4 items-center max-md:flex-col gap-4">
          <Autocomplete>
            <input
              ref={originRef}
              className="bg-white outline-[1px] outline-[#2591B2]  p-2 "
              type="text"
              placeholder="origin"
            />
          </Autocomplete>
          <Autocomplete>
            <input
              ref={destinatinonRef}
              className="bg-white outline-[1px] outline-[#2591B2]  p-2"
              type="text"
              placeholder="destination"
            />
          </Autocomplete>
          <button
            onClick={calculateRoute}
            className="bg-[#2591B2] rounded-[3px] cursor-pointer text-white px-[13px] py-[8.5px] "
          >
            Direction
          </button>
          <button
            onClick={clearRoute}
            className="bg-red-600 rounded-[3px] cursor-pointer text-white px-[13px] py-[8.5px] "
          >
            Clear
          </button>
        </div>
        <div className="w-[full] h-[50vh]  p-4 ">
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
          >
            <Marker position={center} />
            {directionResponse && (
              <DirectionsRenderer directions={directionResponse} />
            )}
          </GoogleMap>
        </div>
        <div className="mt-2" >
          <p className="font-bold">Address:</p>
          <p>Latitude : {center.lat} Longitude : {center.lng}</p>
        </div>
        <div className="flex gap-5 justify-center " >
          <button className=" bg-[#2591B2] rounded-[3px] cursor-pointer text-white px-[13px] py-[8.5px]" >Back</button>
          <button className=" bg-[#2591B2] rounded-[3px] cursor-pointer text-white px-[13px] py-[8.5px]" >Proceed</button>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
