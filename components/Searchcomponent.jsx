import { Component, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Popularmovies  from "./Popularmovies";



const Searchcomponent = () => {

     let[search,setSearch] = useState(null)
     let{searchkey}=useParams()

     useEffect(()=>{

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
      
            setSearch(data.results)
        })

     },[])


    return ( 

     <div className="searchcomponent">
        <Navbar/>
        {search && <Popularmovies data={ search.filter((se)=>{
       return se.original_title.toUpperCase().includes(searchkey.toUpperCase())
             

        }) }/> }
     </div>
     );
}
 
export default Searchcomponent;