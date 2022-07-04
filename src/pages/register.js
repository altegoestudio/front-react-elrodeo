import React, { useState, useEffect } from "react";

class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      passCheck: false,
      userName: "",
      mail: "",
      password: ""
    }
    this.onSubmit = this.onSubmit.bind(this);
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
    e.preventDefault();

    try {
      let res = await fetch("https://localhost:7270/api/Auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accept": "text/plain"
        },
        body: JSON.stringify({
          userName: this.state.userName,
          mail: this.state.mail,
          password: this.state.password,
        }),
      })
      .then((response)=> response.json())
      .then((data)=> {

        console.log(data);

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
  }

  render(){
    return(
      <div className="form-m">
      <div className="form">
        <img src="./img/cow-reg.png" className="form_img"/>
        <form onSubmit={this.onSubmit}>
          <h3>Registrate</h3>
            <div className="form_box">

              <div className="form_box_item">
                <label>Nombre</label>
                <input
                  type="text"
                  id='name'
                  name='name'
                  onChange={(e) => {this.setState({userName: e.target.value})}}
                />
              </div>

              <div className="form_box_item">
                <label>Mail</label>
                <input
                  type="text"
                  id='user'
                  name='user'
                  onChange={(e) => {this.setState({mail: e.target.value})}}
                />
              </div>


              <div className="form_box_item">
                <label>pass</label>
                <input
                  type="password"
                  id='pass'
                  name='pass'
                  autoComplete="on"
                  onChange={this.handlerPass}
                />
                <small id="mensajePassword"></small>
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
