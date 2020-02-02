import React, {Component} from "react";
import './choose-game-params.scss';

export class ChooseGameParams extends Component{
  render() {
    return (
      <div className="choice-box">
        {/*  <h1>How do you want to play?</h1>*/}
        {/*  <button className="player" id="one">One Player</button>*/}
        {/*  <button className="player" id="two">Two Players</button>*/}
        {/* </div>*/}
        {/* <div id="choice">*/}
        <p className="choice-box__header">Would you like to be X or O?</p>
        <div className="choice-box__variants">
          <button className="choice-box__variant">X</button>
          <button className="choice-box__variant">O</button>
        </div>
        {/* <br/>*/}
        <button className="choice-box__back fa fa-arrow-left">Back</button>
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