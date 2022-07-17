
import './App.css';
import { useState } from 'react';

function App() {
const [temperature, setTemperature] = useState(0)

const increament= ()=>{
  if(temperature===30)return
  setTemperature(temperature+1)
}
const decreament= ()=>{
  if(temperature===0)return
  setTemperature(temperature-1)
}


  return (
    <div className="container">
    <div className="temperature-display" >
       <h3 id="temperature">{temperature}°C</h3>
    </div>

    <button onClick={decreament} className="minus"  type="text">-</button>

    <button onClick ={increament} className="plus"  type="text">+</button>
</div>
  );
}

export default App;
