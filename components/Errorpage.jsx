import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import { useEffect, useState } from "react";
import '../styles/errorpage.css'
const Errorpage = () => {
    let navigate = useNavigate()
    let [signin, setSignin] = useState(false)
    let [errorpage, setErrorpage] = useState(false)

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setErrorpage(true)

                // ...
            } else {
                // User is signed out
                // alert("please signin")
                // ...
                setSignin(true)

            }
        });
    }, [])
    return (
        <div className="error-page">

            {signin &&
                <div className="signin-content-errorpage">
                    <h4>You have not signed in;Please sign in</h4>
                    <Link to="/signin">Click here to Sign in</Link>

                </div>

            }
            {errorpage &&
                <div className="signin-content-errorpage">
                    <h4>Entered path does not exists</h4>
                    <Link onClick={() => { navigate(-1) }}>click here to go back</Link>

                </div>

            }


        </div>
    );
}

export default Errorpage;
