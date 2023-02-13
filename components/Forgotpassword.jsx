import { auth } from "../firebase-config";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import './forgotpassword.css'

const Forgotpassword = () => {

  let [email, setEmail] = useState()

  let handleforgotpassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Verification Email sent')
        window.location.reload()
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });

  }

  return (
    <div className="forgot-password">
      <h1>Forgot password ?</h1>
      <div className="forgot-password-content">
        <input type="email" placeholder="Enter registered email here" id="inputmail" onChange={(e) => { setEmail(e.target.value) }} />
        <input type="submit" id="fp" onClick={handleforgotpassword} />
      </div>

    </div>
  );
}

export default Forgotpassword;