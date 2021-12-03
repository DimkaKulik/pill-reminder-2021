import React from 'react';

class Landing extends React.Component {
    render() {
        return (<div className="landing-container">
            <div className="landing-overlay">
                <div className="wrapper">
                    <h1 align="center">Приложение для напоминания о приёме</h1>
                    <p><h1  align="center">лекарственных средств</h1></p>
                    <div className="buttons">
                        <button className="first-button">Войти</button>
                        <button className="second-button">Создать аккаунт</button>
                    </div>
                </div>

            </div>
        </div>);
    }
}

export default Landing;