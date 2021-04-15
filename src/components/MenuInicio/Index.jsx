import './Index.css'
import {Link, useLocation}from 'wouter'
import { useEffect} from 'react';

const MenuInicio = () =>{

const [location, setLocation] = useLocation();

    function registrar(e){
        let linkValue=e.target.textContent;
        if(linkValue==='Home'){
            linkValue='';
        }
            setLocation(`/${linkValue}`)
    }

    useEffect(()=> {
        <Link to = {location} />
    })

    return (<>
       <ul className="Nav">
           <li onClick={registrar}>Home</li>
            <li onClick={registrar}>Registro</li>
            <li onClick={registrar}>Sobre Nosotros</li>
            <li onClick={registrar}>Contactos</li>  
        </ul> 
    </>);
}

export default MenuInicio;