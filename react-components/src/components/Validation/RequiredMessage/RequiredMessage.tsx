import React, { Component } from 'react';

export default class RequiredMessage extends Component {
  render() {
    return <p className="error">Это поле не может быть пустым</p>;
  }
}
