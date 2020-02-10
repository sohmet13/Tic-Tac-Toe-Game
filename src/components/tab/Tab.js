import React, { Component } from 'react';
import './Tab.scss';

export class Tab extends Component {
  render() {
    return (
      <div className={'tab ' + this.props.className}>{this.props.title}</div>
    )
  }
}