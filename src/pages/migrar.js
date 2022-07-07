import React from "react";

class Migrar extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  onSubmit(){
    console.log("on submit");
  }
  render(){
    return(
      <div className="form-m">
      <div className="form">
        <img src="./img/cow-reg.png" className="form_img"/>
        <form onSubmit={this.onSubmit}>
          <h3>Migrar</h3>
            <div className="form_box">

              <div className="form_box_item">
                <label>Contraseña antigua</label>
                <input
                  type="text"
                  id='name'
                  name='name'
                  onChange={(e) => {this.setState({userName: e.target.value})}}
                />
                <small id="mensajeMail"></small>
              </div>

              <div className="form_box_item">
                <label>Nuevo Mail</label>
                <input
                  type="text"
                  id='user'
                  name='user'
                  onChange={(e) => {this.setState({mail: e.target.value})}}
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
