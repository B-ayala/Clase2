
import './App.css';
import Contador from './componentes/Contador';

//import Mensaje from './componentes/Mensaje';
import {Mensaje} from './componentes/Mensaje.js';
function App() {
  return (
    <div className="App">
      <div className="container mt-3"> 
        <div className='jumbotron'>
          <h1>mi proyecto react</h1>
          <hr/>
          
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          <hr/>

          <div className="row ">
            <div className="col-4"><Mensaje msj="Mensaje nro 1" fondo='green'  /></div>
            <div className="col-4"> <Mensaje msj="Mensaje nro 2" fondo='orangered' /></div>
            <div className="col-4"><Mensaje msj="Mensaje nro 2" fondo='blue' /></div>

          </div>
          <hr />

          <Contador id="1" valor="123" fondo="brown"/>  
          <Contador id="2"valor="321" fondo="black"/>   
              
        </div>
      </div>
    </div>
  );
}

export default App;
