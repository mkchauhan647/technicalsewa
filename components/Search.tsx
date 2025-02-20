"use client"
import { baseUrl } from "@/public/baseUrl";
import React, { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField, useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";

const Search = ({ isTopNav,data }: { isTopNav?: boolean , data?:any}) => {
  const [searchText, setSearchText] = useState("");
  const [services, setServices] = useState([]);
  const [suggestions, setSuggestions] = useState([{ label: "", id: "" }]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    if (data) {
      // fetchServices();
      // console.log("data", data);
      setServices(data);
    } else {
    // console.log("fetching services",services);
      fetchServices();
    }
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${baseUrl}/techsewa/masterconfig/publicmasterconfig/getSliderListpop1`
      );
      const data = await response.json();
      // console.log("data", data);
      setServices(data.brands);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching services:", error);
      setLoading(false);
    }
  };

  // Update suggestions based on user input
  useEffect(() => {
    const filteredSuggestions = [...services]
      .filter((service: any) =>
        service?.product_name.toLowerCase().includes(searchText.toLowerCase())
      )
      .map((service: any) => ({
        label: service.product_name,
        id: service.url_product_name,
      }));
    if (searchText.length > 1) {
      setSuggestions(filteredSuggestions);
    }
  }, [searchText, services]);

  return (
    <div className="flex gap-4 w-full">
      <Autocomplete
        disablePortal
        options={suggestions}
        loading={loading}
        // You can customize the loading indicator here
        loadingText="Loading..."
        noOptionsText="No results found"
        sx={{
          width: "100%",
        }}
        // ChipProps={{ sx: { display: "none" } }}
        onInputChange={(event, newValue) => setSearchText(newValue)}
        className="bg-white outline-none"
        onChange={(e: any, value: any) => {
          if (value?.id) {
            router.push(`/service/${value?.id}`);
          }
        }}
        size={isMobile || isTopNav ? "small" : "medium"}
        renderInput={(params) => (
          <TextField {...params} label="Search service here..." />
        )}
      />
    </div>
  );
};

export default Search;
