import React from 'react';
import { Link, Redirect } from 'react-router-dom';


function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body))
    })
}

function SignIn(props) {
    const state = React.useState(0)
    const loggedin = state[0]
    const setLoggedin = state[1]

    const isAuthorized = props.isAuthorized;
    const reauthorize = props.reauthorize;


    function submit() {
        const url = 'https://pill-reminder2.herokuapp.com/auth/login';
        const method = 'POST'
        const requestEntity = {
            'name': document.getElementById('username').value,
            'password': document.getElementById('password').value
        }
    
        sendRequest(method, url, requestEntity)
            .then(data => {
                sessionStorage.setItem('token', data['token'])
                sessionStorage.setItem('userId', data['userId'])
                console.log('user id: ', data['userId'])
                reauthorize();
            })
            .catch(data => {
                setLoggedin(2)
                sessionStorage.removeItem('token')
                sessionStorage.removeItem('userId')
            });
    }

    const authorizedComponent = (
        <div className="errorwrapper">
            <h1 className="error"><div className="sorry">Добро пожаловать!</div>
            Вы успешно вошли в свой аккаунт.</h1>
            <Link to="/list"><button className="second-button">К списку лекарств</button></Link>
        </div>  
    );

    const nonAuthorizedComponent = (
        <div className="signinwrapper">
            <div className="signinform">
                <input type="username" id="username" placeholder="Username"/>
                <input type="password" id="password" placeholder="Password"/>

                <input className="submit" type="submit" onClick={submit}/>
            </div>
        </div>
    );
    
    if (isAuthorized) {
        return authorizedComponent;
    } else {
        if (loggedin == 2) {
            return (
                <div>
                    <h1 align='center' className="errormessage">Пожалуйста, попробуйте снова</h1>
                    {nonAuthorizedComponent}
                </div>
            );
        } else {
            return nonAuthorizedComponent;
        }

    }
}

export default SignIn;