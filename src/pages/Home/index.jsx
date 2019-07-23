import React from 'react'
import Summary from './components/Summary'
import Statistic from './components/Statistic'


export default class Home extends React.Component{
  constructor() {
    super ()
    this.state = {
    }
  }
  render() {
    return (
      <div id="dashboard">
        <Summary />
        <Statistic />
      </div>
    );
  }
}