
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

import { useState } from "react";
import '../styles/signup.css'





const Signup = () => {

    let navigate = useNavigate()
    let gpassword = document.getElementById('gpassword');
    let cpassword = document.getElementById('cpassword')
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let handlesignup = (e) => {
        e.preventDefault()
        if (gpassword.value == cpassword.value) {

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user.email)
                    alert(user)
                    navigate('/home')

                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode)
                    const errorMessage = error.message;
                    alert(errorMessage)
                    // ..
                });

        }
        else {
            alert("Password does not match")
        }
    }
    let handlegooglesignin = () => {
        const gprovider = new GoogleAuthProvider();
        signInWithPopup(auth, gprovider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user.email)
                alert('Sign in successful as ' + user.email)
                navigate('/home')
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }


    let handlefacebooksignin = () => {
        
        const fprovider = new FacebookAuthProvider();
        signInWithPopup(auth, fprovider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                console.log(accessToken)
                alert('Sign in Successful' + user)
                navigate('/home')

                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                // The email of the user's account used.
                const email = error.customData.email;
                alert(email)
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);

                // ...
            });

    }


    return (
        <div className="signup">
            <div className="signup-content">
                <form action="" onSubmit={handlesignup}>
                    <input type="email" placeholder="Enter Your Email" required onChange={(e) => { setEmail(e.target.value) }} />
                    <input type="password" placeholder="Password must be 6 characters" required id="gpassword" onChange={(e) => { setPassword(e.target.value) }} />
                    <input type="text" placeholder="Confirm password" required id="cpassword" />
                    <input type="submit" value="Sign-up" id="sign-up" />
                    <p>Already have an account? <Link to="/signin" >Sign-in</Link> </p>
                </form>
                <div className="or">
                    <hr />
                    <p>OR</p>
                    <hr />
                </div>
                <div className="social-media-signin">
                    <div className="sign-in-with-google">
                        <button onClick={handlegooglesignin} >Signin with Google</button>
                        <button onClick={handlefacebooksignin} >Signin with Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;