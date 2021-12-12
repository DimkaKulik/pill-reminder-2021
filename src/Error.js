import React from 'react';

class Error extends React.Component {

    render() {

        return (<div className="errorwrapper">
                    <h1 className="error"><div className="sorry">Ошибка...</div>
                    Такой страницы не существует.</h1>
                </div>);
    }
}

export default Error;