import React, { Component } from 'react';

export default class InvalidMessage extends Component {
  render() {
    return <p className="error">Поле содержит недопустимые символы или цифры</p>;
  }
}
