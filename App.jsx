
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import IndividualPopularMovies from './components/IndividualPopularMovies';
import Searchcomponent from './components/Searchcomponent';
import Signin from './components/Signin';
import Signup from './components/Signup';

import Toprated from './components/Toprated';
import React, { useEffect, useState } from "react";
import Errorpage from "./components/Errorpage";


function App() {

let [usersignin,setUsersignin]=useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUsersignin(true)
        // ...
      } else {
        // User is signed out
        // alert("please signin")
        // ...
      }
    });
  }, [])

  return (


    <Router>

      <div className="App">

        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />

        { usersignin ?
          <React.Fragment>
          <Route path="/home" element={<Home />} />
          <Route path="/individualmovies/:id" element={<IndividualPopularMovies />} />
          <Route path='/toprated' element={<Toprated />} />
          <Route path='/search/:searchkey' element={<Searchcomponent />} />
          </React.Fragment> : <Route path="/tmbdmovieapp" element={<Signup/>} />

          }
          <Route path="*" element={<Errorpage/>} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
