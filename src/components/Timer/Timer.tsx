import React, { PureComponent } from "react";
import { ITimerProps } from "./TimerModule";

class Timer extends PureComponent<ITimerProps> {
  render() {
    return (
      this.props.timer && (
        <div className="section">
          <div className="container">
            <progress
              className="progress is-large is-primary"
              value="60"
              max={this.props.timer.duration}
            >
              {this.props.timer.duration}
            </progress>
          </div>
        </div>
      )
    );
  }
}

export default Timer;
