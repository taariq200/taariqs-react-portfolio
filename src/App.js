import logo from './logo.svg';

import './App.css';

import { useState } from "react";

const Hi = (props) => {
  const {num} = props;
  return (
    <div>Hi. {num}</div>
  )
}
function App() {

const [number, setNumber] = useState(0);

const add = () => {
  setNumber(number + 1)
}
const reset = () => {
  setNumber(0)
}

  return (
    <div className="App">
      <Hi num = {number}/>
      <div>Number = {number}</div>
      <button onClick = {add}>Add</button>
      <button onClick = {reset}>Reset</button>
    </div>
  );
}

export default App;
