import React, {Component} from "react";
import {TicTacToeField} from "../tic-tac-toe-field/tic-tac-toe-field";
import './tic-tac-toe-container.scss';
import {Score} from "../score/score";
import {ChooseGameParams} from "../choose-game-params/choose-game-params";
import {Shadow} from "../shadow/shadow";
import {Tab} from "../tab/Tab";

export class TicTacToeContainer extends Component {
    playersCountsParams = {
      1: {
        playerTabName: "You turn!",
        secondTabName: "Computer's turn!",
        secondScoreName: "computer"
      },
      2: {
        playerTabName: "Go Player 1",
        secondTabName: "Go Player 2",
        secondScoreName: "player 2"
      }
    };

    initialState = {
      playersCount: null,
      playersSigns: {
        1: null,
        2: null
      },
      playersScore: {
        1: 0,
        2: 0
      },
      currentPlayer: null
    };

    constructor(props) {
      super(props);
      this.state = {...this.initialState};
    }

    selectPlayersCount = playersCount => {
      this.setState({playersCount});
    };

    setPlayersSigns = player1Sign => {
      this.setState({
        playersSigns: {
          1: player1Sign,
          2: player1Sign === 'X' ? 'O' : 'X',
        }
      });
    };

    setCurrentPlayer = (currentPlayer, callback) => {
      this.setState({currentPlayer}, callback);
    };

    updateScore = () => {
      let score = this.state.playersScore[this.state.currentPlayer];
      this.setState({
        playersScore: {
          ...this.state.playersScore,
          [this.state.currentPlayer]: ++score
        }
      });
    };

    reset = () => {
      this.setState({...this.initialState});
    };

    render() {
      return (
        <div className="box-container">
          <div className="tabs">
            <Tab className="tab_p1" title={this.playersCountsParams[this.state.playersCount]?.playerTabName}/>
            <Tab className="tab_p2" title={this.playersCountsParams[this.state.playersCount]?.secondTabName}/>
          </div>
          <div className="ttt-box">
            <div className={"ttt-box__header " + (this.state.playersSigns['1'] ? 'ttt-box__header_visible' : '')}>
              <div className="ttt-box__results">
                <Score
                  score={this.state.playersScore[1]}
                  sign={this.state.playersSigns[1]}
                  playerName='player 1'/>
                <Score
                  score={this.state.playersScore[2]}
                  sign={this.state.playersSigns[2]}
                  playerName={this.playersCountsParams[this.state.playersCount]?.secondScoreName}/>
              </div>
              <button className="ttt-box__reset" onClick={this.reset}>Reset All</button>
            </div>
            <div className="ttt-field">
              {!this.state.playersSigns['1'] ?
                <ChooseGameParams
                  selectPlayersCount={this.selectPlayersCount}
                  playersCount={this.state.playersCount}
                  setPlayersSigns={this.setPlayersSigns}/> :
                <TicTacToeField
                  playersCount={this.state.playersCount}
                  playersSigns={this.state.playersSigns}
                  currentPlayer={this.state.currentPlayer}
                  setCurrentPlayer={this.setCurrentPlayer}
                  updateScore={this.updateScore}/>}
              {/* <Shadow/>*/}
            </div>
          </div>
        </div>
      )
    }
}