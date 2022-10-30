import Me from '../../img/20220721_143949.jpg'
import {useState} from "react";
import {Link, NavLink, Outlet} from "react-router-dom";

const Header = ({setDark}) => {
    const setDarkTheme = () => {
        localStorage.setItem("theme", "dark");
        setDark(true);
    };
    const setLightTheme = () => {
        localStorage.setItem("theme", "light");
        setDark(false);
    };
    const [isAuthorized, setAuthorize] = useState(false);
    return (
        <>
        <header className="navbar navbar-expand-md navbar-dark d-print-none">
            <div className="container-xl">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbar-menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                    <Link to="/">
                        ITForum
                    </Link>
                </h1>
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
                        <ul className="navbar-nav">
                            <NavLink to="/list" className={({isActive, isPending}) => isActive? "nav-item mx-1 active":"nav-item mx-1"}>
                                <li className="nav-link">
                                    <span className="nav-link-title">
                                      Home
                                    </span>
                                </li>
                            </NavLink>
                            <NavLink to="/tags" className={({isActive, isPending}) => isActive? "nav-item mx-1 active":"nav-item mx-1"}>
                                <li className="nav-link" to="/tagList">
                <span className="nav-link-title">
                  Tags
                </span>
                                </li>
                            </NavLink>
                            <NavLink to="/users" className={({isActive, isPending}) => isActive? "nav-item mx-1 active":"nav-item mx-1"}>
                                <li className="nav-link" to="/users">
                <span className="nav-link-title">
                  Users
                </span>
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
                <div className="navbar-nav flex-row order-md-last">
                    <div className="d-none d-md-flex mx-2">
                        <div onClick={setDarkTheme} className="nav-link px-0 cursor-pointer hideThemeDark">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                 viewBox="0 0 24 24"
                                 stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                 stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
                            </svg>
                        </div>
                        <div onClick={setLightTheme} className="nav-link px-0 cursor-pointer hideThemeLight">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                 viewBox="0 0 24 24"
                                 stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                 stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="12" r="4"></circle>
                                <path
                                    d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        {isAuthorized && <a href="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown"
                                            aria-label="Open user menu">
                            <span className="avatar avatar-sm"
                                  style={{backgroundImage: `url(${Me})`}}></span>

                        </a>}
                        {!isAuthorized && <Link to="/SignIn" className="btn bg-dark">Sign In</Link>}
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <a href="#" className="dropdown-item">Set status</a>
                            <a href="#" className="dropdown-item">Profile &amp; account</a>
                            <a href="#" className="dropdown-item">Feedback</a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">Settings</a>
                            <a href="#" className="dropdown-item">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <Outlet/>
    </>
    );
}

export default Header;