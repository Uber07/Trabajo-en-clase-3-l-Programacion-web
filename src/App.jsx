import Titulo from './components/Titulo.jsx'
import Buton from './components/Buton'
import Profile from './components/Profile'
import './App.css'
import MisDatos from './components/MisDatos.jsx'
import { useState } from "react";
import { PerfilProvider } from './context/PerfilContext.jsx'
import BotonRollPersonaje from './components/BotonRollPersonaje.jsx'

function App() {

  const logueado = true;

  const [count, setCount] = useState(0);

  function handleClick()
  {
    console.log("hiciste click");
    setCount(count + 1 );
  }


  return (
    <>
      <PerfilProvider>
        <div>
          <Titulo/>
          <Buton count={count} onClic={handleClick}/>
          <Buton count={count} onClic={handleClick}/>
          <Profile/>
          <br/>
          <BotonRollPersonaje/>
          <div>
            {logueado ? <MisDatos/> : content = <p>No estoy logueado</p>}
          </div>
        </div>
      </PerfilProvider>
    </>
  )
}

export default App
