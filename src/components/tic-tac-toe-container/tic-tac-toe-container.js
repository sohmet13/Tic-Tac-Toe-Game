import React, {Component} from "react";

export class TicTacToeContainer extends Component{
  render() {
    return (
      <div id="box">
        <div id="head">
          <div id="players">
            <div id="first">
              <p id="P1S">0</p>
              <p>player 1</p>
            </div>
            <div className="s" id="second">
              <p id="CS">0</p>
              <p id="C">computer</p>
            </div>
            <div className="s" id="third">
              <p id="P2S">0</p>
              <p>player 2</p>
            </div>
          </div>
          <button className="reset">Reset All</button>
        </div>
      </div>
    )
  }
}