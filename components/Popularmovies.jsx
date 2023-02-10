
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/popularmovies.css'

const Popularmovies = ({data,title}) => {
     
    let[numberofelements,setNumberofelements] =useState(4)
    let slice=data.slice(0,numberofelements)
    let handleloadmore=()=>{
        setNumberofelements(numberofelements+numberofelements)
    }

    return ( 
        <>
        <h1 id='pop-title'>{title}</h1>
     <div className="popularmovies">
        
        {
            
            slice.map((d)=>{
        return(
            <Link to={`/individualmovies/${d.id}`}>
            <div className="details">
                
                <img src={` https://image.tmdb.org/t/p/original/${d.backdrop_path}`} alt="" width="250px" height="170px" />
                <p id='title'>{d.original_title}</p>
                <p id='playnow'>Play now</p>
            </div>
            </Link>
        )
        
            })
        }
        
     </div>
     <button id='loadmore' onClick={handleloadmore}>Load More</button>
     </> 
     );
}
 
export default Popularmovies;