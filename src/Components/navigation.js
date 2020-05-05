import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

import './navigation.css';

function Navigation() {
    let { menu } = useParams();
    return (
        <div className="ar-navigation-mainlayout">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">
                    <div className="logo float-left " ><Link to="/">ARUN P LUKOSE</Link>
                            </div></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link to="/">SHOWREEL</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link to="/filmography">FILMOGRAPHY</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    );
}

export default Navigation;



