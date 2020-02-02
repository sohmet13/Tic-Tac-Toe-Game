import React, {Component} from "react";
import {TicTacToeField} from "../tic-tac-toe-field/tic-tac-toe-field";
import './tic-tac-toe-container.scss';

export class TicTacToeContainer extends Component{
  render() {
    return (
      <div className="ttt-box">
        <div className="ttt-box__header">
          <div className="ttt-box__results">
            <div className="score">
              <span className="score__txt">0</span>
              <span className="score__txt">player 1</span>
            </div>
            <div className="score">
              <span className="score__txt">0</span>
              <span className="score__txt">computer</span>
            </div>
            {/* <div className="s" id="third">*/}
            {/*  <p id="P2S">0</p>*/}
            {/*  <p>player 2</p>*/}
            {/* </div>*/}
          </div>
          <button className="ttt-box__reset">Reset All</button>
        </div>
        <TicTacToeField/>
      </div>
    )
  }
}