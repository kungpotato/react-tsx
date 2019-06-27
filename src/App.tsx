import React, {useContext, useState, useEffect} from 'react'
import {  MobxStore } from './stores/mobxStore';
import { observer } from 'mobx-react-lite';
import {  stores } from './stores';

interface AppProps {
  storeTest?: MobxStore,
  test?: string
}

const useFetch = (url:string) => {
  const [data, setData] = useState<Array<any>>([]);
  useEffect(()=>{
    const fetchData = async () => {
      let res  = await fetch(url)
      let response = await res.json()
      setData(response)
    }
    fetchData()
  },[url])
  return data
}


const App = observer((props: AppProps) => {
  const store = useContext(stores.storeTest)
  const URL = 'https://jsonplaceholder.typicode.com/users';
  const result = useFetch(URL);

  const clickHandler = () =>{
    const {setName} = store!;
    setName("Bob");
  }

  const {greeting, count} = store!;

  return (
      <div className="App">
        <header className="App-header">
            <div>{greeting}</div>
            <div>{count}</div>
            <ol>
              {result.map(v => <li key={v.id}>{v.name}</li>)}
            </ol>
          <button onClick={clickHandler}>Change Greeting</button>
        </header>
      </div>
  )
})

export default App