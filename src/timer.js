import React, { Component } from 'react';
import './timer.css';

class TimerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0,
            intervalId: null,
        };
    }

    startTimer = () => {
        if (this.state.intervalId) return; // Prevent multiple intervals

        const intervalId = setInterval(() => {
            this.setState((prevState) => ({
                timer: prevState.timer + 1,
            }));
        }, 1000);

        this.setState({ intervalId });
    };

    stopTimer = () => {
        clearInterval(this.state.intervalId);
        this.setState({ intervalId: null });
    };

    render() {
        return (
            <div className='container'>
                <h1 className='heading'>Timer: {this.state.timer}</h1>
                <button onClick={this.startTimer}>Start Timer</button>
                <button onClick={this.stopTimer}>Stop Timer</button>
            </div>
        );
    }
}

export default TimerComponent;
