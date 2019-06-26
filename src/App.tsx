import React, {useContext} from 'react'
import {  MobxStore } from './stores/mobxStore';
import { observer } from 'mobx-react-lite';
import {  stores } from './stores';

interface AppProps {
  storeTest?: MobxStore,
  test?: string
}

const App = observer((props: AppProps) => {
  const store = useContext(stores.storeTest)

  const clickHandler = () =>{
    const {setName} = store!;
    setName("Bob");
  }

  const {greeting} = store!;

  return (
      <div className="App">
        <header className="App-header">
            {greeting}
          <button onClick={clickHandler}>Change Greeting</button>
        </header>
      </div>
  )
})

export default App