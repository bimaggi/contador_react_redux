// Nesse proj é necessário install react , redux e react-redux
// Depois de estrutururar o App, Cabecalho e Contador, criar no src Pasta  reducers
// Dentro dela, um arq chamado contadorReducer.js, que será o coração do gerenciamento de estado. Criar funçao 
// e retornar os estados usando o switch. 
// importar o contadorReducer from 'redux',  no App
// importar o createStore e criar uma variavel const store, que vai receber o createStore e atribuir a ela o contadorReducer
// agora precisamos deixar o store disponivel para todos os components e o responsavel por isso é o Provider
// No App vamos importar o Provider
// Criar a tag <Provider> que vai ter as demais tags dentro (filhos) e passar o store como argumento
// Dessa forma os componentes já passam a ter acesso ao store, pois o provider permite isso.
// Para que os components tenham acesso ao createStore, precisamos importar nos components o useSelector from react-redux
// criar uma const contador , que vai receber o useSelector , que vai receber uma função, com o state no param e vai return o state.
// para que as ações sejam disparadas, importar o  useDispatch from react-redux 
// criar uma const dispatch, que vai recer o useDispatch()
// inserir nos botoes, no return das funções onClick, o {dispatch =>({type: increment ou decrement de acordo com o botão})}

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
