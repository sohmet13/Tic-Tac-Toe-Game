import React, {Component} from "react";
import './score.scss';

export class Score extends Component {
  render() {
    return (
      <div className="score">
        <span className="score__txt">{this.props.score}</span>
        <span className="score__txt">{this.props.playerName} ({this.props.sign})</span>
      </div>
    )
  }
}
