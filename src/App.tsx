import React, {useContext, useState, useEffect} from 'react'
import {  MobxStore } from './stores/mobxStore';
import { observer } from 'mobx-react-lite';
import {  stores } from './stores';

interface AppProps {
  storeTest?: MobxStore,
  test?: string
}

const useFetch = (url:string) => {
  const [data, setData] = useState<Response>();
  useEffect(()=>{
    const fetchData = async () => {
      let res  = await fetch(url)
      let response = await res.json()
      setData(response[0])
    }
    fetchData()
  },[])
  return data
}


const App = observer((props: AppProps) => {
  const store = useContext(stores.storeTest)
  const URL = 'http://dummy.restapiexample.com/api/v1/employees';
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
            {console.log(result)}
          <button onClick={clickHandler}>Change Greeting</button>
        </header>
      </div>
  )
})

export default App