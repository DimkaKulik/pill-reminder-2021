import React from 'react';
import { Link, Redirect } from 'react-router-dom';


function Header(props) {
    const isAuthorized = props.isAuthorized;
    const reauthorize = props.reauthorize;

    function logout() {
        reauthorize()
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userId')
    }

    const authorizedComponent  = (
        <div className="headerwrapper">
            <div className="header-container">
                <div className="logo"><h1>PR</h1></div>
                <div className="alogo"><h1><Link to="/">Pill Reminder</Link></h1></div>
            </div>
            <button onClick={logout} className="logout">Выйти</button>
        </div>
    );

    const nonAuthorizedComponent = (
        <div className="headerwrapper">
            <div className="header-container"> 
                <div className="logo"><h1>PR</h1></div>
                <div className="alogo"><h1><Link to="/">Pill Reminder</Link></h1></div>
            </div>
        </div>
    );


    if (isAuthorized) {
        return authorizedComponent;
    } else {
        return nonAuthorizedComponent;
    }
}


export default Header;