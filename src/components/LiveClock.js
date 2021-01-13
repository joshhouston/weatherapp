import React from 'react';
import Clock from 'react-live-clock';

export default class LiveClock extends React.Component {
    render() {
        return (
            <div className="clock">
                <Clock format={'h:mma'} timezone={'US/Central'} />
            </div>
        )
    }
}