import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';
function App() {
//0 es el valor inicial del nro de clics , luego con setNumClics actualizamos el nro de clics
const [numClics, setNumClics] = useState(0);

//definimos una función flecha
  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}
        />
        <Boton 
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}/>
        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
