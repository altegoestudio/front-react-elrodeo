import React, { useState, useEffect } from "react";
import {useParams, useNavigate, useLocation, Navigate} from 'react-router-dom';

function useHandleNavigate(to){
  let navigate = useNavigate();
  navigate(to)
}

class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      logged: false,
      mailCheck: true,
      passCheck: false,
      name: "",
      lastName: "",
      businessName: "",
      ruc: "",
      stablishment: "",
      stablishmentDirection: "",
      stablishmentDepartment: "",
      stablishmentTelephone: "",
      stablishmentCode: "",
      telephone: "",
      cellphone: "",
      direction: "",
      department: "",
      email: "",
      password: "",
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  handlerMail = (e) =>{
    var cajaTextoBtn = document.getElementById('mensajeBtn');
    cajaTextoBtn.innerText = " ";
    this.setState( {email: e.target.value} );
    var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(e.target.value);


    var cajaTextoMail = document.getElementById('mensajeEmail')
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
  async onSubmit(e){
    var cajaTextoBtn = document.getElementById('mensajeBtn');
    e.preventDefault();

    if(this.state.mailCheck && this.state.passCheck){
      try {
        let res = await fetch("https://api.elrodeo.com.py/api/Auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "accept": "text/plain"
          },
          body: JSON.stringify({
            name: this.state.name,
            lastName: this.state.lastName,
            businessName: this.state.businessName,
            ruc: this.state.ruc,
            stablishment: this.state.stablishment,
            stablishmentDirection: this.state.stablishmentDirection,
            stablishmentDepartment: this.state.stablishmentDepartment,
            stablishmentTelephone: this.state.stablishmentTelephone,
            stablishmentCode: this.state.stablishmentCode,
            telephone: this.state.telephone,
            cellphone: this.state.cellphone,
            direction: this.state.direction,
            department: this.state.department,
            email: this.state.email,
            status:'ACTIVO',
            password: this.state.password,
          }),
        })
        .then((response)=> response.json())
        .then((data)=> {

          console.log(data);
          if(data.status === 'Ok'){
            this.setState({logged: true})
          }else{

          }

        })
        let resJson = await res.json();
        if (res.status === 200) {
          alert("Usuario registrado con exito")
        } else {
          alert("error")
        }
      } catch (err) {
        console.log(err);
      }
    }else{
      console.log("no se puede logear");
      cajaTextoBtn.innerText = "Complete correctamente los campos de arriba"
    }
  }

  render(){
    return(
      <div className="form-m">
      { this.state.logged ? (<Navigate to="/login"/>) : null }
      <div className="form">
        <img src="./img/cow-log.png" className="form_img"/>
        <form onSubmit={this.onSubmit}>
        <br/>
        <br/>
          <h3>Registrate</h3>
            <div className="form_box">
              <div className="form_flex">
                <div>
                    <div className="form_box_item">
                      <label>Nombre</label><br/>
                      <input
                        type="text"
                        className="input_wide"
                        id='name'
                        name='name'
                        onChange={(e) => {this.setState({name: e.target.value})}}
                      />
                    </div>

                    <div className="form_box_item">
                      <label>Apellido</label><br/>
                      <input
                        type="text"
                        className="input_wide"
                        id='lastName'
                        name='lastName'
                        onChange={(e) => {this.setState({lastName: e.target.value})}}
                      />
                    </div>
                    <div className="form_box_item">
                      <label>Email</label><br/>
                      <input
                        type="email"
                        className="input_wide"
                        id='email'
                        name='email'
                        autoComplete="on"
                        className="input_wide"
                        onChange={this.handlerMail}
                      />
                      <small id="mensajeEmail"></small>
                    </div>
                    <div className="form_box_item">
                      <label>password</label><br/>
                      <input
                        type="password"
                        className="input_wide"
                        id='pass'
                        name='pass'
                        autoComplete="on"
                        onChange={this.handlerPass}
                      />
                      <small id="mensajePassword"></small>
                    </div>
                </div>
                    <div>
                    <div className="form_box_item">
                      <label>RUC</label><br/>
                      <input
                        type="text"
                        className="input_wide"
                        id='ruc'
                        name='ruc'
                        autoComplete="on"
                        onChange={(e) => {this.setState({ruc: e.target.value})}}
                      />
                    </div>
                    <div className="form_box_item">
                      <label>Celular</label><br/>
                      <input
                        type="password"
                        className="input_wide"
                        id='cellphone'
                        name='cellphone'
                        autoComplete="on"
                        onChange={(e) => {this.setState({cellphone: e.target.value})}}
                      />
                    </div>
                    <div className="form_box_item">
                      <label>Departamento</label><br/>
                      <input
                        type="password"
                        className="input_wide"
                        id='department'
                        name='department'
                        autoComplete="on"
                        onChange={(e) => {this.setState({department: e.target.value})}}
                      />
                    </div>
                    <div className="form_box_item">
                      <label>Establecimiento</label><br/>
                      <input
                        type="text"
                        className="input_wide"
                        id='stablishment'
                        name='stablishment'
                        autoComplete="on"
                        onChange={(e) => {this.setState({stablishment: e.target.value})}}
                      />
                    </div>

                    <div className="form_box_item">
                      <label>Est. Codigo</label><br/>
                      <input
                        type="text"
                        className="input_wide"
                        id='stablishmentCode'
                        name='stablishmentCode'
                        autoComplete="on"
                        onChange={(e) => {this.setState({stablishmentCode: e.target.value})}}
                      />
                    </div>
                </div>
              </div>


            </div>

          <button type="button" onClick={this.onSubmit} className="btn btn_cta">Registrate</button>
          <small id="mensajeBtn"></small>
        </form>
        </div>
      </div>
    );
  }
}

export default Register;
