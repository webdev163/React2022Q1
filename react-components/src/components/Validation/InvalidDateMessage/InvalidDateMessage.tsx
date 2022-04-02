import React, { Component } from 'react';

export default class InvalidDateMessage extends Component {
  render() {
    return <p className="error">Необходимо указать дату в будущем</p>;
  }
}
