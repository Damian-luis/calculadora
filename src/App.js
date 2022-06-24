import './App.css';
import react from 'react';
import { useState } from 'react'
function App() {


  const [estado,setEstado]=useState("");

  function handlerState(e){
    var a=estado
    a=estado+e.target.value
    parseInt(a)
      setEstado(a);
  }
  function handlerResult(e){
    
  }
  function handlerReset(){
    setEstado()
  }
  return (
    <div className="App">
      <div className="body">
        <div className="calculadora">
          <div className="pantalla">
            {estado?<h4>{estado}</h4>:<h4>_</h4>}
          </div>




          <div className="botones">
            <div className="numeros">
                <button onClick={handlerState} value="1" className="number"><span>1</span></button>
                <button onClick={handlerState} value="2" className="number"><span>2</span></button>
                <button onClick={handlerState} value="3" className="number"><span>3</span></button>
                <button onClick={handlerState} value="4" className="number"><span>4</span></button>
                <button onClick={handlerState} value="5" className="number"><span>5</span></button>
                <button onClick={handlerState} value="6" className="number"><span>6</span></button>
                <button onClick={handlerState} value="7" className="number"><span>7</span></button>
                <button onClick={handlerState} value="8" className="number"><span>8</span></button>
                <button onClick={handlerState} value="9" className="number"><span>9</span></button>
                <button onClick={handlerReset} value="reset" className="number orange"><span>C</span></button>
                <button onClick={handlerState} value="0" className="number"><span>0</span></button>
                <button onClick={handlerResult} value="solve" className="number orange"><span>=</span></button>
            </div>
            <div className="simbolos">
              <button onClick={handlerState} value="+" className="simbol"><span>+</span></button>
              <button onClick={handlerState} value="-" className="simbol"><span>-</span></button>
              <button onClick={handlerState} value="*" className="simbol"><span>*</span></button>
              <button onClick={handlerState} value="/" className="simbol"><span>/</span></button>
              </div>  
          </div>



          </div>
        </div>
      </div>
    
  );
}

export default App;
