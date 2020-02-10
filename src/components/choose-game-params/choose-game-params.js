import React, {Component} from "react";
import './choose-game-params.scss';

export class ChooseGameParams extends Component {
    playersCountParams = {
      1: {
        question: 'Would you like to be X or O?'
      },
      2: {
        question: 'Player 1 : Would you like X or O?'
      }
    };

    // chooseGameParams = {
    //   firstOption: 'One Player',
    //   secondOption: 'Two Players',
    //   buttonClass: ''
    // };

    // chooseXO = {
    //   firstOption: 'X',
    //   secondOption: 'O',
    //   buttonClass: 'choice-box__back_visible'
    // };

    chooseGameParams = (count, sign) => {
      this.props.playersCount ? this.props.setPlayersSigns(sign) : this.props.selectPlayersCount(count)
    };

    back = () => {
      this.props.selectPlayersCount(null)
    };

    render() {
      return (
        <div className="choice-box">
          {/*  <h1>How do you want to play?</h1>*/}
          {/*  <button className="player" id="one">One Player</button>*/}
          {/*  <button className="player" id="two">Two Players</button>*/}
          {/* </div>*/}
          {/* <div id="choice">*/}
          <p className="choice-box__header">
            {this.props.playersCount ? this.playersCountParams[this.props.playersCount].question : 'How do you want to play?'}
          </p>
          <div className="choice-box__variants">
            <button className="choice-box__variant" onClick={() => this.chooseGameParams(1, 'X')}>
              {this.props.playersCount ? 'X' : 'One Player'}
            </button>
            <button className="choice-box__variant" onClick={() => this.chooseGameParams(2, 'O')}>
              {this.props.playersCount ? 'O' : 'Two Players'}
            </button>
          </div>
          {/* <p className="choice-box__header">Would you like to be X or O?</p>*/}
          {/* <div className="choice-box__variants">*/}
          {/*  <button className="choice-box__variant">X</button>*/}
          {/*  <button className="choice-box__variant">O</button>*/}
          {/* </div>*/}
          {/* <br/>*/}
          <button
            className={"choice-box__back " + (this.props.playersCount ? 'choice-box__back_visible' : '')}
            onClick={this.back}>
            <i className="fa fa-arrow-left"></i>
            &nbsp;Back
          </button>
          {/* </div>*/}
          {/* <div id="playerOne">*/}
          {/*  <h1>Player 1 : Would you like X or O?</h1>*/}
          {/*  <button className="xo">X</button>*/}
          {/*  <button className="xo">O</button>*/}
          {/*  <br/>*/}
          {/*  <button className="back fa fa-arrow-left"></button>*/}
        </div>
      )
    }
}