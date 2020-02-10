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

  get isComputerStep() {
    return this.props.playersCount === 1 && this.props.currentPlayer === 2
  }

  get anotherPlayer() {
    return this.props.currentPlayer === 1 ? 2: 1
  }

  get randomCellNum() {
    return Math.round(Math.random() * (9 - 1) + 1);
  }

  constructor(props) {
    super(props);
    this.state = {...this.initialState};
  }

  componentDidMount() {
    this.selectFirstPlayer();
  }

  setComputerSignToCell() {
    if (this.isComputerStep) {
      const cell = this.getComputerCell();
      this.setSignToCell(cell);
    }
  }

  selectFirstPlayer = () => {
    let randNum = Math.round(Math.random() * (2 - 1) + 1);
    this.props.setCurrentPlayer(randNum, this.setComputerSignToCell.bind(this));
  };

  getComputerCell = () => {
    return this.getThirdCellNum(2) || this.getThirdCellNum(1) || this.getEmptyCellNum();
  };

  getThirdCellNum = player => {
    for (let i = 0; i < this.winCombinations.length; i++) {
      const winArr = this.winCombinations[i].filter(num => this.state.cells[num] === this.props.playersSigns[player]);
      if (winArr.length === 2) {
        const num = this.winCombinations[i].find(num => this.state.cells[num] !== this.props.playersSigns[player]);
        if (!this.state.cells[num]) {
          return num;
        }
      }
    }
    return null;
  };

  getEmptyCellNum = () => {
    const randomCellNum = this.randomCellNum;
    if (!this.state.cells[randomCellNum]) {
      return randomCellNum;
    } else {
      return this.getEmptyCellNum();
    }
  };

  setSignToCell = num => {
    if (!this.state.cells[num]) {
      this.setState({
        cells: {
          ...this.state.cells,
          [num]: this.props.playersSigns[this.props.currentPlayer]
        }
      }, this.checkGameState);
    }
  };

  checkGameState = () => {
    this.winCombinations.forEach(this.checkPlayerVictory.bind(this));
    this.checkDraw();
    this.props.setCurrentPlayer(this.anotherPlayer, this.setComputerSignToCell.bind(this));
  };

  checkPlayerVictory = comb => {
    const winArr = comb.filter(num => this.state.cells[num] === this.props.playersSigns[this.props.currentPlayer]);
    if (winArr.length === comb.length) {
      this.props.updateScore();
      this.reset();
    }
  };

  checkDraw = () => {
    const values = Object.values(this.state.cells);
    if (values.filter(c => c).length === values.length) {
      this.reset();
    }
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