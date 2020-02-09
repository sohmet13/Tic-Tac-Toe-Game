import React, {Component} from "react";
import './tic-tac-toe-field.scss';

export class TicTacToeField extends Component {
  winCombinations = [
    ["1",'2',"3"],
    ["4",'5',"6"],
    ["7",'8',"9"],
    ["1",'4',"7"],
    ["2",'5',"8"],
    ["3",'6',"9"],
    ["1",'5',"9"],
    ["3",'5',"7"]
  ];

  initialState = {
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
  };

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  componentDidMount() {
    this.selectFirstPlayer();
  }

  getAnotherPlayer = currPlayer => {
    return currPlayer === 1 ? 2: 1;
  };

  selectFirstPlayer = () => {
    let randNum = Math.round(Math.random() * (2 - 1) + 1);
    this.props.setCurrentPlayer(randNum);
  };

  setSignToCell = num => {
    if (!this.state.cells[num]) {
      this.setState({
        cells: {
          ...this.state.cells,
          [num]: this.props.playersSigns[this.props.currentPlayer]
        }
      }, this.checkPlayerVictory);
    }
  };

  checkPlayerVictory = () => {
    this.winCombinations.forEach(comb => {
      const winArr = comb.filter(num => this.state.cells[num] === this.props.playersSigns[this.props.currentPlayer]);
      // const winArr = [this.state.cells[]]
      if (winArr.length === comb.length) {
        this.props.updateScore();
        this.reset();
      }
    });
    this.props.setCurrentPlayer(this.getAnotherPlayer(this.props.currentPlayer));
  };

  reset = () => {
    this.setState({...this.initialState});
  };

  render() {
    return (
      <div className="play-field">
        <table className="play-field__table">
          <tbody>
            <tr className="play-field__line">
              <td className="play-field__cell play-field__cell_b-r" onClick={() => this.setSignToCell(1)}>{this.state.cells["1"]}</td>
              <td className="play-field__cell play-field__cell_b-r" onClick={() => this.setSignToCell(2)}>{this.state.cells["2"]}</td>
              <td className="play-field__cell" onClick={() => this.setSignToCell(3)}>{this.state.cells["3"]}</td>
            </tr>
            <tr className="play-field__line">
              <td className="play-field__cell play-field__cell_b-r" onClick={() => this.setSignToCell(4)}>{this.state.cells["4"]}</td>
              <td className="play-field__cell play-field__cell_b-r" onClick={() => this.setSignToCell(5)}>{this.state.cells["5"]}</td>
              <td className="play-field__cell" onClick={() => this.setSignToCell(6)}>{this.state.cells["6"]}</td>
            </tr>
            <tr>
              <td className="play-field__cell play-field__cell_b-r" onClick={() => this.setSignToCell(7)}>{this.state.cells["7"]}</td>
              <td className="play-field__cell play-field__cell_b-r" onClick={() => this.setSignToCell(8)}>{this.state.cells["8"]}</td>
              <td className="play-field__cell" onClick={() => this.setSignToCell(9)}>{this.state.cells["9"]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}