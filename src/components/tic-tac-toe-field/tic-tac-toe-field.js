import React, {Component} from "react";
import './tic-tac-toe-field.scss';

export class TicTacToeField extends Component{
  render() {
    return (
      <div className="play-field">
        <table className="play-field__table">
          <tr className="play-field__line">
            <td className="play-field__cell play-field__cell_b-r" id="cell1"></td>
            <td className="play-field__cell play-field__cell_b-r" id="cell2"></td>
            <td className="play-field__cell" id="cell3"></td>
          </tr>
          <tr className="play-field__line">
            <td className="play-field__cell play-field__cell_b-r" id="cell4"></td>
            <td className="play-field__cell play-field__cell_b-r" id="cell5"></td>
            <td className="play-field__cell" id="cell6"></td>
          </tr>
          <tr>
            <td className="play-field__cell play-field__cell_b-r" id="cell7"></td>
            <td className="play-field__cell play-field__cell_b-r" id="cell8"></td>
            <td className="play-field__cell" id="cell9"></td>
          </tr>
        </table>
      </div>
    )
  }
}