import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { actionGetData } from './redux/actions/actions';
import { useEffect } from 'react';
function App() {
  // el useSelector es el que coje del Stado del reducer que queramos llamar la data (este caso un array de  datos)
  const selector = useSelector(state => state.reducerData.data)
  console.log(selector)

const dispatch = useDispatch()
  
useEffect(() => {
  //El useDispatch es que lanza las acciones , se podria pasar argumentos  datos en caso que hicieran falta. ejemplo : 
  //   dispatch(actionGetData({id:1,name:"pepe"}))
  dispatch(actionGetData())
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
