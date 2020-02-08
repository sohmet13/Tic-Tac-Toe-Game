import React, { Component } from 'react';
import './Tab.scss';

export class Tab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'tab ' + this.props.className}>{this.props.title}</div>
    )
  }
}