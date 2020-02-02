import React, {Component} from "react";

export class TicTacToeField extends Component{
  render() {
    return (
      <div id="screen">
        <div id="greeting">
          <h1>How do you want to play?</h1>
          <button className="player" id="one">One Player</button>
          <button className="player" id="two">Two Players</button>
        </div>
        <div id="choice">
          <h1>Would you like to be X or O?</h1>
          <button className="xo1">X</button>
          <button className="xo1">O</button>
          <br/>
          <button className="back fa fa-arrow-left"></button>
        </div>
        <div id="playerOne">
          <h1>Player 1 : Would you like X or O?</h1>
          <button className="xo">X</button>
          <button className="xo">O</button>
          <br/>
          <button className="back fa fa-arrow-left"></button>
        </div>
        <table>
          <tr>
            <td id="cell1"></td>
            <td className="left" id="cell2"></td>
            <td className="left" id="cell3"></td>
          </tr>
          <tr>
            <td className="top" id="cell4"></td>
            <td className="left top" id="cell5"></td>
            <td className="left top" id="cell6"></td>
          </tr>
          <tr>
            <td className="top" id="cell7"></td>
            <td className="left top" id="cell8"></td>
            <td className="left top" id="cell9"></td>
          </tr>
        </table>
        <div className="after">Oh, oh, bad</div>
      </div>
    )
  }
}