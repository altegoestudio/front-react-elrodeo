import React from 'react';
import lotesBig from '../json/lotes.json';
import {Link} from 'react-router-dom';

var bodyData = {
  loteId: 2
}

class LotesBig extends React.Component{
  state = {
    loteId: 5,
    id: this.props.mi,
    price: this.props.base,
    minOfferIncrement: this.minOfferIncrement,
    status: this.props.status,
    orden: this.props.orden,
    name: this.props.name,
    remateId: this.props.remated,
    img: null,
    caracteristicas: [
      {label: "propietario" , value: this.props.name},
      {label: "Ultima Oferta" , value: this.props.base}
    ],
    animales: "this.props.animales",
    start: null,
    end: null,
    statusDOM: "s"
  }
  getStatus(){
    var status = document.getElementById("status" + this.props.mi);
    if(!this.state.status){
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



/*
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
*/

  }
  fetchData = async () =>{

    var dataArr = []
    try{
      const daw = await fetch("https://api.elrodeo.com.py/api/Ofertas/get-highest-bid-from-lote",{
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          "accept": "text/plain"
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(bodyData),
        data: {
          "remateId": "1"
        }
      })
      .then((response)=> response.json())
      .then((data)=> {
        dataArr = data;
        console.log(dataArr);
        this.setState({price: dataArr.data.offer})
        console.log(this.state.price);


      })
    }
    catch(error){
      console.log(error);
    }

    setTimeout(()=>{this.setState({price: dataArr.data.offer});console.log(this.state.price)},30)
  }
  componentDidMount(){

    this.getStatus();
    this.getPrincipales();
    this.getPropiedades();
    //this.fetchData();
    console.log(this.state.price);
  }
  render(){

    console.log(this.state.id);
    console.log(this.props.remated);
    return(
      <div>
        <div className='lotesBig' id="lotesBigOne">
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
              <Link to={"/puja/" + this.props.mi + "/" + this.props.remated} props={{ minOfferIncrement: this.state.minOfferIncrement, }}>
                <div className="btn btn_cta">
                  OFERTAR
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LotesBig;
