import {useState} from 'react'
import './register_cliente_provedor.css' 


const RegistroClienteProvedor = () =>{
  const [campoNull, setcamponull] = useState(true)
  
  const validarEmail = (email) => {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gm
    if(regex.test(email)) return true
    return false
  }
  const handlerSubmit = (e) => {
    e.preventDefault()
    let nombre = document.getElementById('nombre').value
    let apellidos = document.getElementById('apellidos').value
    let email = document.getElementById('email').value
    if (nombre.length === 0 || apellidos.length === 0 || validarEmail(email) === false) {
      setcamponull(false)
    } else {
      setcamponull(true)
    }
  }
    return(
        <>
            <form action="#" method="post" className="formulario">
        <label htmlFor ="nombre">Nombre: </label>
        <input type="text" name="nombre" id="nombre"/>
        <label htmlFor ="apellidos">Apellidos: </label>
        <input type="text" name="apellidos" id="apellidos" />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email"/>
        <label htmlFor="cif">Cif</label>
        <input type="text" name="cif" id="cif"/>
        <fieldset>
          <legend>direccion</legend>
          <label htmlFor="direccion">Direccion: calle | avenidad...</label>
          <input type="text" name="direccion" id="direccion"/>
          <label htmlFor="numero">Numero: </label>
          <input type="number" name="numero" id="numero"/>
          <label htmlFor="portal">portal</label>
          <input type="text" name="portal" id="portal"/>
          <label htmlFor="opcional">Informacion adiccional piso | bloque...etc</label>
          <input type="text" name="opcional" id="opcional"/>
        </fieldset>
        <input type="submit" onClick={handlerSubmit} value="Registar" />
      </form>
      {campoNull ? null : <h1>completa los campos</h1>}
        </>
    )
}
export default RegistroClienteProvedor