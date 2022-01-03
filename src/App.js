import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo';
import TodosList from './component/TodosList';
import { useState } from 'react';


function App() {
  const [inputData, setInputData] = useState();
  return (
    <div className="App">
 <Todo inputData = {inputData} setInputData = {setInputData}/>
 <TodosList inputData = {inputData}/>

    </div>
  );
}

export default App;
