'use client'

import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export default function useGetQuery(key:String, url:String) {
  console.log(url)

  const fetchPostData = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
      return response.data.data;
    } catch (error:any) {
      throw new Error(error.response.data.message);
    }
  };

  const { data: getQueryData, isError:getRequestError, isLoading:getLoading } = useQuery([key], fetchPostData);

  return { getQueryData, getLoading, getRequestError };
}
