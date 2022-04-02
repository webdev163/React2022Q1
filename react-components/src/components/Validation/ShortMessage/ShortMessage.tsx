import React, { Component } from 'react';

export default class ShortMessage extends Component {
  render() {
    return <p className="error">Это поле не может быть менее 3 символов</p>;
  }
}
