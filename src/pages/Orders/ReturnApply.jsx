import React from 'react';
export default class Page extends React.Component{
  constructor() {
    super ()
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <h1>
        home
      </h1>
    );
  }
}