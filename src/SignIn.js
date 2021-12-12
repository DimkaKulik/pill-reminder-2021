import React from 'react';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {

    render() {
        return (<div className="signinwrapper">
            <div className="signinform">
                <input type="email" placeholder="Email"/>
                
                <input type="password" placeholder="Password"/>

                <input type="submit" />
            </div>
                
        </div>);
    }
}

export default SignIn;