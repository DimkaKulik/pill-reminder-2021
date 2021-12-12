import React from 'react';
import { Link } from 'react-router-dom';

function Landing(props) {
    const isAuthorized = props.isAuthorized;
    const reauthorize = props.reauthorize;

    const authorizedComponent = (
        <div className="landing-container">
            <div className="landing-overlay">
                <div className="wrapper">
                    <h1 align="center">Приложение для напоминания о приёме</h1>
                    <p><h1  align="center">лекарственных средств</h1></p>
                    <div className="buttons">
                        <Link to="/list"><button className="second-button">К списку лекарств</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );

    const nonAuthorizedComponent = (
        <div className="landing-container">
            <div className="landing-overlay">
                <div className="wrapper">
                    <h1 align="center">Приложение для напоминания о приёме</h1>
                    <p><h1  align="center">лекарственных средств</h1></p>
                    <div className="buttons">
                        <Link to="/signin"><button className="first-button">Войти</button></Link>
                        <Link to="/signup"><button className="second-button">Создать аккаунт</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );

    if (isAuthorized) {
        return authorizedComponent;
    } else {
        return nonAuthorizedComponent;
    }

}

export default Landing;