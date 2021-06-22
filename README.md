# Contador_React_redux
Projeto sugerido no curso Desenvolvimento Web Progbr

Criamos o diretório com o comando 
### npx create-react-app conatdor_redux_react

É Necessário instalar também o redux e react-redux
### npm install redux react-redux

Foi criada uma pasta reducer para guardar a função que vai gerenciar todo o estado dos componentes.

Para que a função gerenciadora de estado esteja acessivel 
### import { createStore } from 'redux';  

Criamos então uma variável que vai receber o createStore e atribuímos à ela a função que gerencia os estados

Por fim precisamos disponibilizar e tornar acessivel essa váriavel para todos os componentes
### import { Provider } from 'react-redux'

Envolvemos o retorno do aquivo principal com as tags<Provider></Provider> e atribuimos à ela uma propriedade que receba a variavel que contém o creteStore.

Dentro dos componentes será necessário
### import {useSelector, useDispatch}from'react-redux';

Criamos uma variável que vai receber o useSelector e este vai receber uma função que vai retornar o state.
Para que as ações sejam disparadas, importar o  useDispatch from react-redux 
Criamos também uma variável que vai receber o useDispatch()

Nos botões que terão os eventos, criamos funções que retornam {variavel que recebeu useDispatch =>({type: increment ou decrement de acordo com o botão})}


O projeto roda no browser com o comando
### `npm start`

