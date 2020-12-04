import React from 'react';
import { useHistory } from "react-router";



const Home = () => {

    //HOOKS

    const history = useHistory();

    //FUNCIONES
    
    const llevameRegistro = ( )=> {
        
        //añado un setTimeout con medio segundo para que la navegación en
        //local sea más realista con este pequeño delay.
        setTimeout(() => {
            history.push("/register")
        }, 500);
    }

    return (
        <div>
            Soy el componente Home. Pulsa en el boton para ir a registro.
            <button onClick={()=> {llevameRegistro()}}>Registro</button>
        </div>
    )
}

export default Home;