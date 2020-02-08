import React, {Component} from "react";
import './tic-tac-toe-field.scss';

export class TicTacToeField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: {
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
      },
    }
  }

  render() {
    return (
      <div className="play-field">
        <table className="play-field__table">
          <tr className="play-field__line">
            <td className="play-field__cell play-field__cell_b-r">{this.state.cells["1"]}</td>
            <td className="play-field__cell play-field__cell_b-r">{this.state.cells["2"]}</td>
            <td className="play-field__cell">{this.state.cells["3"]}</td>
          </tr>
          <tr className="play-field__line">
            <td className="play-field__cell play-field__cell_b-r">{this.state.cells["4"]}</td>
            <td className="play-field__cell play-field__cell_b-r">{this.state.cells["5"]}</td>
            <td className="play-field__cell">{this.state.cells["6"]}</td>
          </tr>
          <tr>
            <td className="play-field__cell play-field__cell_b-r">{this.state.cells["7"]}</td>
            <td className="play-field__cell play-field__cell_b-r">{this.state.cells["8"]}</td>
            <td className="play-field__cell">{this.state.cells["9"]}</td>
          </tr>
        </table>
      </div>
    )
  }
}