import React from 'react';
import '../hojas-de-estilo/Boton.css';
//la siguiente es la sintaxis de desestructuración
//event listener en el onClick (cuando ocurra un clic)
//´se pasa como prop el event listener (manejar clic)
function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button
    className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
    onClick={manejarClic}>
      {texto} 
    </button>
  )
}

export default Boton;