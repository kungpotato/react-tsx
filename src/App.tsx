import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import {  MobxStore } from './stores/mobxStore';

interface AppProps {
  mobxStore?: MobxStore,
  test?: string
}

@inject('mobxStore')
@observer
class App extends Component<AppProps> {

  private clickHandler = () =>{
    const {setName} = this.props.mobxStore!;
    setName("Bob");
  }

  render() {
    const {greeting} = this.props.mobxStore!;
    return (
      <div className="App">
        <header className="App-header">
            {greeting}
          <button onClick={this.clickHandler}>Change Greeting</button>
        </header>
        
      </div>
    )
  }
}

export default App