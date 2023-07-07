
import axios from 'axios';
import React from 'react'


const Nav = () => {

  const fetchPostData = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
      console.log(response.data.data);
    } catch (error:any) {
      throw new Error(error.response.data.message);
    }
  };
  return (
    <div >Nav</div>
  )
}

export default Nav