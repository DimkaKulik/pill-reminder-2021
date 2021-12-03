import React from 'react';

class Header extends React.Component {
    render() {
        return (<div className="header-container"> 
            <div className="logo"><h1>PR</h1></div>
            <div className="alogo"><h1>Pill Reminder</h1></div>
        </div>);
    }
}

export default Header;