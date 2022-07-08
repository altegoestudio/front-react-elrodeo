import React from "react";
import { useState } from "react";


class Migrar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      logged: false,
      userName: "",
      userMail: "",
      password: "",
      token: "",
      mailCheck: true,
      passCheck: true
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    logged: false,
    userName: "",
    userMail: "",
    password: "",
    token: "",
    mailCheck: true,
    passCheck: true
  }
  async onSubmit(e){
    e.preventDefault();

    if(true){
      console.log("enviando...");
    try {
        let res = await fetch("https://api.elrodeo.com.py/api/OldUser/migrate-user", {
          method: "POST",
          mode: 'no-cors',
          cache: 'default',
          headers: {
            "Content-Type": "application/json",
            "accept": "text/plain"
          },
          body: JSON.stringify({
            userMail: this.state.userMail,
            passwordPlain: this.state.password
          }),
        })
        .then((response)=> response.json())
        .then((data)=> {

          if(data.status === 'Ok'){






          }else{
            console.log("error de logeo");
            console.log(data);
            if(data.data.errorInfo === "User Not Found"){
            }

            if (data.data.errorInfo === "Password is incorrect") {
            }

          }

        })
    } catch (err) {
        console.log(err);
     }
    }else{
      console.log("no se puede logear");
    }


  }
  render(){
    return(
      <div className="form-m">
      <div className="form">
        <img src="./img/cow-reg.png" className="form_img"/>
        <form>
          <h3>Migrar</h3>
            <div className="form_box">

              <div className="form_box_item">
                <label>Contraseña antigua</label>
                <input
                  type="text"
                  id='name'
                  name='name'
                  onChange={(e) => {this.setState({password: e.target.value})}}
                />
                <small id="mensajeMail"></small>
              </div>

              <div className="form_box_item">
                <label>Nuevo Mail</label>
                <input
                  type="text"
                  id='user'
                  name='user'
                  onChange={(e) => {this.setState({userMail: e.target.value})}}
                />
                <small id="mensajeMail"></small>
              </div>

            </div>

          <button type="button" onClick={this.onSubmit} className="btn btn_cta">Migrar</button>
          <small id="mensajeBtn"></small>
        </form>
        </div>
      </div>
    );
  }
}

export default Migrar;
