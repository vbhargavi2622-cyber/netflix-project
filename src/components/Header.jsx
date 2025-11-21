import { signOut } from "firebase/auth";
import netflixLogo from "../images/netflix-logo.png";
import userIcon from "../images/userIcon.png"
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const handleSignOut = () =>{
        signOut(auth).then(()=>{
            navigate("/");
        }).catch(()=>{
            navigate("/error");
        })
    }
    return(
        <div className="header-section">
            <div className="header-left">
                <div className="logo-block">
                    <img src={netflixLogo} alt="netflix-logo" className="logo"/>
                </div>
               { user && <div className="menu-block">
                    <ul>
                        <li>Home</li>
                        <li>Shows</li>
                        <li>Movies</li>
                    </ul>
                </div> }
            </div>
            { user && <div className="header-right">
                <img src={user?.photoURL ?? userIcon } alt="userIcon" className="userIcon" />
                <button className="signout-btn" onClick={handleSignOut}>Sign Out</button>
            </div> }
        </div>
    )
}

export default Header;