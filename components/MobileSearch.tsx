import { baseUrl } from "@/public/baseUrl";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";

const MobileSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [services, setServices] = useState([]);
  const [suggestions, setSuggestions] = useState([{ label: "", id: "" }]);
  const [loading, setLoading] = useState(false);
  //   const [url, setUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${baseUrl}/techsewa/masterconfig/publicmasterconfig/getSliderListpop1`
      );
      const data = await response.json();
      setServices(data.brands);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching services:", error);
      setLoading(false);
    }
  };

  // Update suggestions based on user input
  useEffect(() => {
    const filteredSuggestions = services
      .filter((service: any) =>
        service?.product_name.toLowerCase().includes(searchText.toLowerCase())
      )
      .map((service: any) => ({
        label: service.product_name,
        id: service.url_product_name,
      }));
    setSuggestions(filteredSuggestions);
    if (searchText.length > 2) {
      setSuggestions(filteredSuggestions);
    }
  }, [searchText, services]);

  return (
    <div className="flex gap-4 w-full ">
      <Autocomplete
        disablePortal
        options={suggestions}
        loading={loading}
        // You can customize the loading indicator here
        loadingText="Loading..."
        noOptionsText="No results found"
        sx={{ width: "100%" }}
        onInputChange={(event, newValue) => setSearchText(newValue)}
        className="bg-white outline-none "
        size="small"
        onChange={(e: any, value: any) => {
          console.log(value);
          router.push(`/service/${value?.id}`);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            // variant="outlined"
            label="Search service here..."
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
      {/* <div
        className="flex justify-center items-center bg-[#2591B2] h-full py-[10px] px-[12px] rounded-[6px] cursor-pointer "
        // onClick={handleSearch}
      >
        <BsSearch
          size={25}
          className="text-white"
          onClick={() => {
            router.push(`/service/${url}`);
          }}
        />
      </div> */}
    </div>
  );
};

export default MobileSearch;
