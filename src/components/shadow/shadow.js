import React, {Component} from "react";
import './shadow.scss';

export class Shadow extends Component {
  render() {
    return (
      <div className="shadow">
        <span className="shadow__text">Oh, oh, bad</span>
      </div>
    )
  }
}