import { baseUrl } from "@/public/baseUrl";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [services, setServices] = useState([]);
  const [suggestions, setSuggestions] = useState([{ label: "", id: "" }]);
  const [loading, setLoading] = useState(false);
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
    if (searchText.length > 1) {
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
        className="bg-white outline-none"
        onChange={(e: any, value: any) => {
          console.log(value);
          router.push(`/service/${value?.id}`);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Search service here..." />
        )}
      />
    </div>
  );
};

export default Search;
