import React, {Component} from "react";

export class TicTacToeField extends Component{
  render() {
    return (
      <div id="screen">

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