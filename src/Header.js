import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (<div className="header-container"> 
            <div className="logo"><h1>PR</h1></div>
            <div className="alogo"><h1><Link to="/">Pill Reminder</Link></h1></div>
        </div>);
    }
}

export default Header;