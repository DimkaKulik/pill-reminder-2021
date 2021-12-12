import React from 'react';

class Auth extends React.Component {

    render() {

        return (<div className="landing-container">
            {this.getList()['date']}
        </div>);
    }
}

export default Auth;