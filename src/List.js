import React from 'react';
import Error from './Error.js'

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

function List(props) {
    const isAuthorized = props.isAuthorized;
    const reauthorize = props.reauthorize;

    function getList() {
        const url = 'https://pill-reminder2.herokuapp.com/reminder/' + sessionStorage.getItem('userId')
        console.log(url)
        sendRequest('GET', url)
            .then(data => console.log(data))
    }

    const listItems = getList()//.map((item) => <li><span>{'' + item['date'] + ', ' + item['time']}</span><span className="delete">DELETE</span></li>);

    if (isAuthorized) {
        return (
            <div className="list">
                <ul>
                    {listItems}
                
                    <div className="addnewrecord">
                        <li className="add">NEW RECORD</li>
                    </div>
                </ul>
            </div>
        );
    } else {
        return <Error />
    }


}

export default List;