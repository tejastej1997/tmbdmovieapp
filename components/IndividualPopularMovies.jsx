import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/individualpopuarmovies.css'
import Navbar from "./Navbar";


const IndividualPopularMovies = () => {
    let {id}=useParams();
   let[indidetail,setIndidetail]=useState(null)
    useEffect(()=>{
        setTimeout(() => {

            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then((response)=>{
               return response.json()
            })
            .then((result)=>{
                setIndidetail(result)
            })
            
        }, 2000);
    },[])

 

    return ( 
        <div className="individual-popular-movies">
          
          <Navbar/>
            {indidetail && 
            <div className="indi-pop-content">

                   <div className="section1">

                    <div className="img-section">
                    <img src={` https://image.tmdb.org/t/p/original/${indidetail.backdrop_path}`} alt="" width="350px" height="300px" />
                    </div>

                    <div className="content-section">
                       
                    <p id='indi-title'>{indidetail.original_title}</p>
                         <p>Rating: {indidetail.vote_average} 🌟  </p>
                         <p>Release date : {indidetail.release_date}</p>

                         <p id="gen">
                            {
                                indidetail.genres.map((g)=>{
                                    return(
                                        <>
                                        <p> {g.name} { g.length == indidetail.genres.length ? ":": "/" }</p>
                                        </>
                                    )

                                })
                            }
                         </p>
                      
                         <p id="runtime">Runtime : {indidetail.runtime} min</p>
                           <a href={indidetail.homepage} target="_blank"> <button>Watch now</button></a> 
                             <button>Watch later</button>
                    </div>
                   </div>
                   <div className="overview">
                    <h4 id="over">Overview:</h4>
                        <p>{indidetail.overview}</p>
                    </div>

           

            </div> 
            
          
       
            
            
            }
           
          

        </div>
     );
}
 
export default IndividualPopularMovies;