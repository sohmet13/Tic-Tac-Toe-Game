import React, {Component} from "react";
import {TicTacToeField} from "../tic-tac-toe-field/tic-tac-toe-field";
import './tic-tac-toe-container.scss';
import {Score} from "../score/score";
import {ChooseGameParams} from "../choose-game-params/choose-game-params";

export class TicTacToeContainer extends Component{
  render() {
    return (
      <div className="ttt-box">
        <div className="ttt-box__header">
          <div className="ttt-box__results">
            <Score score="0" playerName={'player 1'}/>
            <Score score="0" playerName={'computer'}/>
          </div>
          <button className="ttt-box__reset">Reset All</button>
        </div>
        <div className="ttt-field">
          {/*<ChooseGameParams/>*/}
             <TicTacToeField/>
        </div>
      </div>
    )
  }
}