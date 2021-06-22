
import './App.css';
import React from 'react';
import Contador from './components/Contador';
import Cabecalho from './components/Cabecalho';
import contadorReducer from './reducers/contadorReducer';
import { createStore } from 'redux'; 
import { Provider } from 'react-redux';

function App() {
  const store = createStore(contadorReducer)
  
  return (
    <div className="App">
      <Provider store={store}>  
        <Cabecalho/>
        <Contador/>
      </Provider>

    </div>
  );
}

export default App;
