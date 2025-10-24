import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleSignInForm = ()=>{
        setIsSignIn(!isSignIn);
    }
    return(
        <div className="Login-section">
            <Header/>
            <div className="login-form">
                <form>
                    <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                    {!isSignIn ? <input type="text" placeholder="Full Name" /> :""}
                    <input type="text" placeholder="Email or Mobile Number" />
                    <input type="password" placeholder="Password" />
                    <button type="button" className="submit">{!isSignIn ? "Sign Up" : "Sign In" }</button>
                    <span>{isSignIn ? "New to Netflix?" : "Already existing User Please." }</span>
                    <button type="button" onClick={toggleSignInForm}>{isSignIn ? "Sign up now." : "Sign In Now" }</button>
                </form>
            </div>
        </div>
    )
}

export default Login;