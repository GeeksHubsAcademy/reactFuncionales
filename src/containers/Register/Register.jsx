import React, {useState} from 'react';
// import { useHistory } from "react-router";

// import axios from 'axios';


const Register = () => {

    //HOOKS 

    const [user, setUser] = useState({
        nombre: "",
        apellidos: "",
        email: ""
    });

    const [mensaje, setMensaje] = useState("");

    //const history = useHistory();
    
    ///////////////////////////////////////////////////

    //FUNCIONES 

    /*Funcion manejaEstado (equivalente a si la hubiesemos llamado eventHandler en
    inglés.
    
    Se encargará de coordinar los eventos de cada input mientras se escribe en ellos,
    añadiendo los valores correspondientes al hook user*/

    const manejaEstado = ev => {
        
        setUser({...user, [ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value});

    };

    const enviaRegistro = () => {

        //Aqui procederíamos ante todo con el control de errores y Regex
        
        if(user.nombre === "" || user.apellidos === "" || user.email === ""){
            setMensaje("Has olvidado rellenar alguno de los campos");
            return; 
        }

        //preparación de datos del body

        let userBody = {
            nombre : user.nombre,
            apellidos : user.apellidos,
            direccion : "calle falsa",
            email : user.email,
            telefono: "",
            edad: 21,
            password: "Admin1234!"
        };
        
        console.log("El body que enviariamos al back consistiria en...", userBody);

        //llamada axios a la base de datos

        // axios.post('aquiDepositamosLaDireccionDelEndpoint',userBody)
        // .then(res=>{
        //     //console.log(res);
        //     //setCliente(res.data);
        //     //guardamos en localstorage
        //     console.log(res.data);

            
        //     setMensaje(`Querido  ${res.data.nombre}, bienvenido a nuestra plataforma`);
           
        //     setTimeout(() => {
        //         history.push("/")
        //     }, 500);
        // })
        // .catch(error=>setMensaje(error.response.data.message));

    }
    
    return(
        <div>
        <pre>{JSON.stringify(user, null,2)}</pre>
            <p>Nombre</p>
            <input type="text" maxLength="30" placeholder="" name="nombre" onChange={manejaEstado}></input>
            <p>Apellidos</p>
            <input type="text" maxLength="30" placeholder="" name="apellidos" onChange={manejaEstado}></input>
            <p>Email</p>
            <input type="email" maxLength="30" placeholder="" name="email" onChange={manejaEstado}></input>
            <button onClick={() => {enviaRegistro()}}>Enviar</button>
            <div>{mensaje}</div>
        </div>
    );
}

export default Register;