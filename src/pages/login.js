import React, { useState, useEffect } from "react";
import {useParams, useNavigate, useLocation, Navigate} from 'react-router-dom';

function useHandleNavigate(to){
  let navigate = useNavigate();
  navigate(to)
}


class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      logged: false,
      userName: "",
      userMail: "",
      password: "",
      token: "",
      mailCheck: false,
      passCheck: false
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.canello = this.props;


  }
  async onSubmit(e){
    var cajaTextoBtn = document.getElementById('mensajeBtn');
    e.preventDefault();

    if(this.state.mailCheck && this.state.passCheck){
      console.log("Se puede logear");
      try {
        let res = await fetch("https://api.elrodeo.com.py/api/Auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "accept": "text/plain"
          },
          body: JSON.stringify({
            userMail: this.state.userMail,
            password: this.state.password
          }),
        })
        .then((response)=> response.json())
        .then((data)=> {

          if(data.status === 'Ok'){

            this.setState(this.state={
              ...this.state,
              token: data.data.token,
              userName: data.data.userData.userName,
              logged: true
            });

            this.canello.handleUser(this.state.userName, this.state.logged, this.state.token);


          }else{
            console.log("error de logeo");
            console.log(data);
            if(data.data.errorInfo === "User Not Found"){
              cajaTextoBtn.innerText = "Usuario no encontrado"
            }

            if (data.data.errorInfo === "Password is incorrect") {
              cajaTextoBtn.innerText = "Contraseña Incorrecta"
            }

            // Mostrar mensaje en UI de usuario o contrase incorrecta
            // si el campo de mail no tiene arroba
            // si la contrasela no cumple
            //si le falta campos
            // crear logout
            // componentDidUNmount remates
            // imgenes de remates cuadtadas con demasias
          }

        })
      } catch (err) {
        console.log(err);
      }
    }else{
      console.log("no se puede logear");
      cajaTextoBtn.innerText = "Complete correctamente los campos de arriba"
    }


  }
  handlerMail = (e) =>{
    var cajaTextoBtn = document.getElementById('mensajeBtn');
    cajaTextoBtn.innerText = " ";
    this.setState( {userMail: e.target.value} );
    var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(e.target.value);


    var cajaTextoMail = document.getElementById('mensajeMail')
    if(regEx){
      cajaTextoMail.innerText = " ";
      this.setState({mailCheck: true});
    }else{
      cajaTextoMail.innerText = "Ingrese un mail válido";
      this.setState({mailCheck: false});
    }
  }
  handlerPass = (e) =>{
    var cajaTextoBtn = document.getElementById('mensajeBtn');
    cajaTextoBtn.innerText = " ";
    this.setState( {password: e.target.value} );
    var regEx = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(e.target.value);


    var cajaTextoPass = document.getElementById('mensajePassword')
    if(regEx){
      cajaTextoPass.innerText = " ";
      this.setState({passCheck: true});
    }else{
      cajaTextoPass.innerText = "más de 8 letras, más de 1 dígito, más de 1 mayúscula.";
      this.setState({passCheck: false});
    }
  }
  render(){

    return(
      <div className="form-m">
      { this.state.logged ? (<Navigate to="/"/>) : null }
      <div className="form">
        <img src="./img/cow-log.png" className="form_img"/>
        <form onSubmit={this.onSubmit}>
          <h3>Bienvenido!</h3>
          <div className="form_box">

            <div className="form_box_item">
              <label>Mail</label>
              <input
                type="text"
                id='mail'
                name='mail'
                onChange={this.handlerMail}
                className="active"
              /><br/>
              <small id="mensajeMail"></small>
            </div>

            <div className="form_box_item">
              <label>pass</label>
              <input
                type="password"
                id='pass'
                name='pass'
                autoComplete="on"
                onChange={this.handlerPass}
              /><br/>
              <small id="mensajePassword"></small>
            </div>

          <button  type="button" onClick={this.onSubmit} className="btn btn_cta">Iniciar</button><br/>
          <small id="mensajeBtn"></small>
          <p>Necesita migrar su cuenta anterior? haga click aqui</p>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default Login;
