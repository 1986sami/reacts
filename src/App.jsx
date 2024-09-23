import { useState } from 'react'
import './App.css'

function App() {
 
  const {usuario,setUsuario}  =useState('')
  const {clave,setClave}  =useState('')

  function cambiarusuario(evento){
    setUsuario(evento.target.value)
  }
  function cambiarclave(evento){
    setClave(evento.target.value)
  }
  function Ingresar(){
   
   if(usuario=="admin"&& clave=="admin"){
    alert("se ha iniciado sesion")
   }else{
    alert("sesion no iniciada......")
   }
  }
  return (
    <>
     <h3>INICIO DE SESION</h3>
     <input type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarusuario}/>
     <br />
     <br />
     <input type="password" name="clave" id="clave"  value={clave} onChange={cambiarclave} />
     <br />
     <br />
     <button onClick={Ingresar}> Ingresar</button>
     </>
  )
}

export default App
