import { auth } from "../firebase-config";
import { signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import '../styles/signin.css'
import { useState } from "react";
import Forgotpassword from "./Forgotpassword";


const Signin = () => {



    let navigate = useNavigate()
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [forgotpassword, setForgotpassword] = useState(false)


    let handlesignin = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert("Signed-in as " + user.email)
                navigate("/home")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
                const errorMessage = error.message;
                alert(errorMessage)
            });



    }
    let handlegooglesignin = () => {
        const gprovider = new GoogleAuthProvider();
        signInWithPopup(auth, gprovider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log(token)
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
                console.log(errorCode)
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
               
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);

                // ...
            });
        }




    return (
        <div className="sign-in-content">
            <div className="sign-in">
                <form action="" onSubmit={handlesignin}>
                    <input type="email" name="" id="" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} />

                    <div className="signin-password">
                        <input type="password" name="" id="" placeholder="Enter password" onChange={(e) => { setPassword(e.target.value) }} />
                        <p id="forgot-password" onClick={() => { setForgotpassword(true) }} > Forgot password?  </p>
                    </div>

                    <input type="submit" value="Sign-in" id="submit" />
                    <p id='signin-link'>Dont have an account? <Link to="/" >Sign-up</Link> </p>
                    <hr />
                    <div className="social-media-signin">
                        <div className="sign-in-with-google">
                            <button onClick={handlegooglesignin}>Signin with Google</button>
                            <button onClick={handlefacebooksignin} >Signin with Facebook</button>
                        </div>
                    </div>
                </form>
            </div>
            {forgotpassword && <Forgotpassword />}


        </div>

    );
}

export default Signin;