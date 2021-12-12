import React from 'react';
import { Link } from 'react-router-dom';

class Error extends React.Component {

    render() {

        return (
            <div className="errorwrapper">
                <h1 className="error"><div className="sorry">Ошибка...</div>
                Для вас такой страницы не существует.</h1>
                <Link to="/"><button className="second-button">На главную</button></Link>
            </div>
        );
    }
}

export default Error;