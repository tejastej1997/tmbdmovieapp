import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";


import Popularmovies from "./Popularmovies";


import Upcoming from "./Upcoming";


const Home = () => {


    let [popularMovies,setpopularMovies]=useState([])

   useEffect(()=>{

    setTimeout(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
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
        .then((moviedata)=>{
            setpopularMovies(moviedata.results);

        })
        .catch((err)=>{
           alert(err.message)
        })
        
    }, 2000);



   },[])


    return ( 
        <div className="homepage">
          
          <Navbar/>
            {popularMovies && <Popularmovies data={popularMovies} title={'Popular Movies'} />}

            <Upcoming/>
        </div>
     );
}
 
export default Home;
