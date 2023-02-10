
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css'
import { auth } from '../firebase-config';
import {  signOut } from "firebase/auth";

const Navbar = () => {
  let [searchkey, setSearchkey] = useState("")
  let [username, setUsername] = useState('')
  let navigate=useNavigate()

  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // ...
      console.log(user.email)
      setUsername(user.email)
    } else {
      // No user is signed in.
    }

  }, [])

  let handlesignout=()=>{
    signOut(auth).then(() => {
      alert('Sign out successful')
      navigate('/signin')
    }).catch((error) => {
      alert(error)
    });
    
  }

  return (
    <nav>

      <div className="nav-content">
        <Link to="/home"> <h4>Home</h4></Link>
        <Link to="/toprated"> <h4>Top rated</h4></Link>
        <div className="searchbar">
          <input type="search" placeholder="Search here" onChange={(e) => { setSearchkey(e.target.value) }} />
          <Link to={`/search/${searchkey}`}>
            <button>Search</button>
          </Link>
        </div>
        <button className='udetails'>Sign in as : <h5 id='uname'>{username} </h5> </button>
        <button onClick={handlesignout}>Logout</button>

      </div>
      <hr />
    </nav>

  );
}

export default Navbar;
