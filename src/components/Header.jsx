import netflixLogo from "../images/netflix-logo.png";
const Header = () => {
    return(
        <div className="header-section">
            <div className="logo-block">
                <img src={netflixLogo} alt="netflix-logo" className="logo"/>
            </div>
        </div>
    )
}

export default Header;