import React, { Component } from "react";
import "../css/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import md5 from 'md5';
import Cookies from "universal-cookie";
import imagenLogin from "../assets/imagenLogin_Mesa de trabajo 1.png"
import imagenLogo from "../assets/Aplicacion-exclusiva-fondo-claro-color.png"

const url = "http://localhost:3001/usuarios";
const cookies = new Cookies();

class Login extends Component {
  state = {
    form: {
      username: "",
      password: "",
    },
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  iniciarSesion = async () => {
    await axios.get(url, {
      params: {
        username: this.state.form.username,
        password: md5(this.state.form.password)
      },
    })
    .then(response=>{
        return response.data;
    })
    .then(response=>{
        if(response.length>0){
            var respuesta=response[0];
            cookies.set('id',respuesta.id,{path:"/"})
            cookies.set('apellido',respuesta.apellido,{path:"/"})
            cookies.set('nombre',respuesta.nombre,{path:"/"})
            cookies.set('username',respuesta.username,{path:"/"})
            alert(`Bienvenido ${respuesta.nombre}`)
            window.location.href="./seleccion";
        }else{
            alert("El usuario o contraseña son incorrectos")
        }
    })
    .catch(error=>{
        console.log(error)
    })
    ;
  };

  render() {
    return (
      <div className="containerPrincipal">
        <div className="containerImagen">
        <img className="imagen" src={imagenLogin} />
        </div>
        <div className="containerSecundario">
        <img className="imagenLogo" src={imagenLogo} />
          <div className="form-group">
            <label>Usuario: </label>
            
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            
            <label>Contraseña: </label>
            
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />

            <a href="https://campus.uaovirtual.edu.co/login/forgot_password.php" className="ref">¿Olvidó su nombre de usuario o contraseña?</a>
            
            <button
              className="btn btn-primary"
              onClick={() => this.iniciarSesion()}
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
