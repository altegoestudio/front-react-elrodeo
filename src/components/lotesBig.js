import React from 'react';
import lotesBig from '../json/lotes.json';
import {Link} from 'react-router-dom';

class LotesBig extends React.Component{
  state = {
    status: this.props.status,
    orden: this.props.orden,
    img: null,
    caracteristicas: [
      {label: "propietario" , value: this.props.propietario},
      {label: "peso" , value: this.props.peso},
      {label: "carimbo" ,value: this.props.carimbo},
      {label: "oferta", value: this.props.oferta},
      {label: "ofertante", value: this.props.ofertante},
    ],
    animales: this.props.animales,
    start: null,
    end: null,
    statusDOM: "s"
  }
  getStatus(){
    var status = document.getElementById("status" + this.props.mi);
    if(this.state.status){
      status.classList.remove("lotesBig_card_status-terminado");
      status.classList.add("lotesBig_card_status-activo");
      status.innerHTML = "<p>Activo</p>";
    }else{
      status.classList.remove("lotesBig_card_status-activo");
      status.classList.add("lotesBig_card_status-terminado");
      status.innerHTML = "<p>Terminado</p>";
    }
  }
  getPrincipales(){


    var principal = document.getElementById('principal'  + this.props.mi);

    var list = [];

    this.state.caracteristicas.map( (a) => {
      var template = `
        <div class="lotesBig_card_infoPrincipal_bloques">
          <p class="lotesBig_card_infoPrincipal_bloques_titulo">
            ${a.label}
          </p>
          <p class="lotesBig_card_infoPrincipal_bloques_descripcion">
            ${a.value}
          </p>
        </div>
      `
      list.push(template);

    })
    list = list.join("")
    principal.innerHTML = list;
  }
  getPropiedades(){
    var secundaria = document.getElementById('secundaria'  + this.props.mi);

    var list = [];




    for (var i = 0; i < this.state.animales.length; i++) {
      var caja = [];
      //console.log(i);
      for (var j = 0; j < this.state.animales[i].propiedades.length; j++) {


          var template1 = `
          <div class="lotesBig_card_infoSecundaria_caja_bloque">
            <p class="lotesBig_card_infoSecundaria_caja_bloque_titulo">
              ${this.state.animales[i].propiedades[j].name}
            </p>
            <p class="lotesBig_card_infoSecundaria_caja_bloque_descripcion">
              ${this.state.animales[i].propiedades[j].value}
            </p>
          </div>
          `
          var template2 = `
          <div class="lotesBig_card_infoSecundaria_caja_bloque">
            <p class="lotesBig_card_infoSecundaria_caja_bloque_descripcion">
              ${this.state.animales[i].propiedades[j].value}
            </p>
          </div>
          `
          if(!i == 0){

            caja.push(template2);
          }else{

            caja.push(template1);
          }

      }
      caja = caja.join(' ');
      var cajafull = '<div class="lotesBig_card_infoSecundaria_caja">' + caja + '</div>';
      list.push(cajafull);
    }
    list = list.join(' ');
    secundaria.innerHTML = list;


  }
  componentDidMount(){

    this.getStatus();
    this.getPrincipales();
    this.getPropiedades();

  }
  render(){
    return(
      <div>
        <div className='lotesBig'>
          <div className='lotesBig_card'>
            <div className="lotesBig_card_status" id={"status" + this.props.mi}>
              <p>Desconocido</p>
            </div>
            <div className="lotesBig_card_order">
              {this.state.orden}
            </div>
            <div className="lotesBig_card_img">
              <img src="../../img/vacas.png" alt=""/>
            </div>
            <div className="lotesBig_card_infoPrincipal" id={"principal"  + this.props.mi}>

            </div>
            <div className="lotesBig_card_infoSecundaria" id={"secundaria"  + this.props.mi}>








            </div>
            <div className="lotesBig_card_botonera">
              <Link to={"/remate/" + this.props.path + "/lote/"+ this.props.mi} key={this.props.mi} style={{ textDecoration: 'none' }}>
                <div className="btn btn-ppl">
                  VER MÁS
                </div>
              </Link>
              <div className="btn btn_cta">
                OFERTAR
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LotesBig;
