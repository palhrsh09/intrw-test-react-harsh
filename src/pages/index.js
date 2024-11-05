// Use API - [GET] https://dummyapi.online/api/movies

import axios from "axios";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

export default function Home() {
  const [data,setData] = useState()
  const [clickedIds , setclickedIds] =useState([])



   useEffect(() => {
     const fetchData  = async () => {
      const response = await axios.get("https://dummyapi.online/api/movies")
        setData(response?.data)
     }

     fetchData()
   },[])


   const handleClick = (id) => {

    clickedIds.push(id)
      }

  //  console.log(data,"data")


  return (
    <div className="w-full max-w-screen-sm mx-auto block py-12 space-y-3">
      <div className="border border-gray-500 rounded-md p-4 w-full space-y-4">

        {data &&    data.map((moviesData) => (

          <MovieCard data={moviesData} handleClick={handleClick}/>
       
        ))
        
         
        }

        
    
      </div>
    </div>
  );
}
