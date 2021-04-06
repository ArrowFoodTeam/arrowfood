import { useState} from 'react'

const Registro = () => {

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
  
  return (
    <>
      <form action="#" method="post">
        <label htmlFor ="nombre">Nombre: </label>
        <input type="text" name="nombre" id="nombre"/>
        <label htmlFor ="apellidos">Apellidos: </label>
        <input type="text" name="apellidos" id="apellidos" />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email"/>
        <input type="submit" onClick={handlerSubmit} value="Registar" />
      </form>
      {campoNull ? null : <h1>completa los campos</h1>}
    </>
  )
}
export default Registro