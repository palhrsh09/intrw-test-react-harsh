import { useState } from "react"

export const MovieCard = (data, handleClick) => {
  
   const movies = data?.data
    console.log(data)



    return (
        <div key={movies?.id} className="">
        <p className="text-lg font-bold">{movies?.movie}</p>
        {/* <img src={data?.image} alt="" /> */}
        <div className="flex items-center gap-3">
             <div>
                <input type="radio" onClick={handleClick(movies?.id)} />
                </div> 
            
            <div>
            <p className="text-sm">Rating &mdash;</p>
            <p className="text-6xl font-black">{movies?.rating}</p>
            </div>
       
        </div> 

      
    </div>
    )
}