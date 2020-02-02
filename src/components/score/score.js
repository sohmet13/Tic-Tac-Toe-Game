import React, {Component} from "react";
import './score.scss';

export class Score extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="score">
        <span className="score__txt">{this.props.score}</span>
        <span className="score__txt">{this.props.playerName}</span>
      </div>
    )
  }
}
