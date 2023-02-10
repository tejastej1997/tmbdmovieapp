import { useEffect, useState } from "react";
import Navbar from "./Navbar";

import Popularmovies from "./Popularmovies";

const Toprated = () => 
{

    let[toprated,setToprated]=useState(null)

    useEffect(()=>{

     setTimeout(() => {

        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
        .then((response)=>{
            if(response.ok==true)
            {
               return response.json()
            }
            else
            {
                throw Error("Invalid input")
            }
        })
        .then((data)=>{
          setToprated(data.results)
        })
        
     }, 2000);

    },[])


    return ( 
       
       <div className="top-rated">
        <Navbar/>
        {toprated && <Popularmovies data={toprated} title={'Top Rated'}/>}
       </div>
        

        
    );
}
 
export default Toprated;