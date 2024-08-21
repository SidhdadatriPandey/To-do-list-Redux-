import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import AddTodos from './Components/AddTodos';
import Todos from './Components/Todos';
import { store } from './App/Store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AddTodos/>
        <Todos/>  
      </Provider>
    </div>
  );
}

export default App;
