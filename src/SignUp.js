import React from 'react';
import reactDom from 'react-dom';

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

function SignUp (props) {
    const state = React.useState(0)
    const registered = state[0]
    const setRegistered = state[1]
    

    const isAuthorized = props.isAuthorized;
    const reauthorize = props.reauthorize;

    function submit() {
        const url = 'https://pill-reminder2.herokuapp.com/auth/register';
        const method = 'POST'
        const requestEntity = {
            'email': document.getElementById('email').value,
            'name': document.getElementById('username').value,
            'password': document.getElementById('password').value,
            'phoneNumber': document.getElementById('phoneNumber').value
        }
    
        sendRequest(method, url, requestEntity)
            .then(data => {setRegistered(1)})
            .catch(data => {setRegistered(2)})
    }

    const form = (
        <div className="signinwrapper">
            <div className="signinform">
                <input type="email" id="email" placeholder="Почта"/>
                <input type="text" id="username" placeholder="Никнейм"/>
                <input type="password" id="password" placeholder="Пароль"/>
                <input type="text" id="phoneNumber" placeholder="Номер телефона" />
                <input className="submit" onClick={submit} type="submit" />
            </div>            
        </div>
    );
    
    if (registered == 0 && !isAuthorized) {
        return (
            <div className="signinwrapper">
                <div className="signinform">
                    <input type="email" id="email" placeholder="Почта"/>
                    <input type="text" id="username" placeholder="Никнейм"/>
                    <input type="password" id="password" placeholder="Пароль"/>
                    <input type="text" id="phoneNumber" placeholder="Номер телефона" />
                    <input className="submit" onClick={submit} type="submit" />
                </div>            
            </div>
        );
    } else if (registered == 1 || isAuthorized) {
        return (
            <div className="errorwrapper">
                <h1 className="error">Вы зарегистрированный пользователь!</h1>
            </div>
        );
    } else {
        return (
            <div>
                <h1 align='center' className="errormessage">Пожалуйста, попробуйте снова</h1>
                {form}
            </div>
        );
    }
    

}

export default SignUp;