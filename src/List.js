import React from 'react';

class List extends React.Component {
    getList() {
        return [{'date':'Jan 12, 2021', 'time':'20:00'},
                {'date':'Feb 13, 2021', 'time':'10:00'},
                {'date':'Dec 118, 2021', 'time':'11:00'},
                {'date':'Nov 19, 2021', 'time':'18:00'},
                {'date':'Jan 13, 2021', 'time':'19:00'},
                {'date':'May 2, 2021', 'time':'9:00'}]
    }

    render() {
        const listItems = this.getList().map((item) => <li><span>{'' + item['date'] + ', ' + item['time']}</span><span className="delete">DELETE</span></li>);

        return (<div className="list">
            <ul>
                {listItems}
                
                <div className="addnewrecord">
                    <li className="add">NEW RECORD</li>
                </div>
            </ul>
        </div>);
    }
}

export default List;