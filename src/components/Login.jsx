import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const toggleSignInForm = ()=>{
        setIsSignIn(!isSignIn);
    }
    const submitForm = ()=>{
        const formValidation = validate(email.current.value, password.current.value);
        // If validation returns an object, pick or format a message
        if (!formValidation.isEmailValid) {
            setErrorMessage("Invalid email address");
            return;
        }
        if (!formValidation.isPasswordValid) {
            setErrorMessage("Password must be at least 6 characters");
            return;
        }
        if(!formValidation) return;

        if(!isSignIn){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName:name.current.value, photoURL:"https://media.naukri.com/media/jphotov1/l244%253ALukcMTC%252B2AsYHrywGUUCbJE1xn4ibMk6g1s35jaDX3xDxDEwde3%252BNTvf1no%253D",
                }).then(()=>{
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({
                        uid : uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    }))
                    navigate("/browse");
                }).catch(()=>{
                    navigate("/error");
                });
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(`${error.code} - ${error.message}`);
            });
        }else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
               navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(`${error.code} - ${error.message}`);
            });

        }
    }
    return(
        <div className="Login-section">
            <Header/>
            <div className="login-form">
                <form>
                    <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                    {!isSignIn ? <input type="text" ref={name} placeholder="Full Name" /> :""}
                    <input type="text" ref={email} placeholder="Email or Mobile Number" />
                    <input type="password" ref={password} placeholder="Password" />
                    <p className="errMsg">{errorMessage}</p>
                    <button type="button" className="submit" onClick={submitForm}>{!isSignIn ? "Sign Up" : "Sign In" }</button>
                    <span>{isSignIn ? "New to Netflix?" : "Already existing User Please." }</span>
                    <button type="button" onClick={toggleSignInForm}>{isSignIn ? "Sign up now." : "Sign In Now" }</button>
                </form>
            </div>
        </div>
    )
}

export default Login;