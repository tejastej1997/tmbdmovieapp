import { useEffect } from "react";
import { useState } from "react";
import Popularmovies from "./Popularmovies";


const Upcoming = () => {
    let[upcoming,setUpcoming]=useState(null)
    useEffect(()=>{
        setTimeout(() => {
               
            fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
            .then((response)=>{
             return response.json()
            }).then((result)=>{
                setUpcoming(result.results)
            }).catch((err)=>{
                alert(err.message)
            })
        }, 2000);
    })
    return ( 
        <div className="upcoming">
            {upcoming && <Popularmovies data={upcoming} title={'Up Coming Movies'} />}
        </div>
     );
}
 
export default Upcoming;