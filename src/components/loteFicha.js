import React from 'react';
import {useLocation} from 'react-router';
import { useState } from "react";
import {Link} from 'react-router-dom';









class LoteFicha extends React.Component{
  state = {
    loading: true,
    remate: window.location.href.split('/')[4],
    lote: window.location.href.split('/')[6],
    data:[],
    lid: window.location.href.split('/')[6],
    rid: window.location.href.split('/')[4],

  }


  fetchData = async () =>{
    var dataArr = []
    try{
      const daw = await fetch("https://api.elrodeo.com.py/api/Remates/get-lotes-from-remates",{
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          "accept": "text/plain"
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({remateId: parseInt(this.state.remate)}),
        data: {
          "remateId": "1"
        }
      })
      .then((response)=> response.json())
      .then((data)=> {
        dataArr = data;
        console.log(dataArr);

        var a = dataArr.data.loteList;
        var b = a.filter(lote =>{

          console.log(this.state.lid);
          console.log(lote.id, lote.id == this.state.lid);
          return lote.id == this.state.lid
        })
        console.log(b);
        this.setState({data: b[0]})



        console.error(this.state.data.animales[0].propiedades);
        setTimeout(()=>{

          console.log(this.state.data);
          this.setState({loading: false})

        },0)
      })
    }
    catch(error){
      console.log(error);
    }

  }
  componentDidMount(){
    this.fetchData();
  }
  render(){
    if(this.state.loading){
      return null
    }
    return (
      <div>

        <div className="ficha_wrapp">
          <div className="ficha">
            <div className="ficha_titulo">
              <p className="ficha_titulo_codigo">Codigo de remate</p>
              <p className="ficha_titulo_codigo_dato"></p>
              <p className="ficha_titulo_titular">{this.state.data.name}</p>
            </div>
            <hr/>

            <div className="ficha_datosPrincipales">
              <div className="ficha_datosPrincipales-cajas">
                <p className="ficha_datosPrincipales-cajas_titulos">Establecimiento:</p>
                <p className="ficha_datosPrincipales-cajas_datos">{this.state.data.name}</p>
              </div>

              <div className="ficha_datosPrincipales-cajas">
                <p className="ficha_datosPrincipales-cajas_titulos">Precio:</p>
                <p className="ficha_datosPrincipales-cajas_datos">{this.state.data.maxOffer}</p>
              </div>
              <div className="ficha_datosSecundarios">

              {this.state.data.animales[0].propiedades.map((lote, i) => (

                  <div className="ficha_datosSecundarios_cajas" key={i}>
                    <p className="ficha_datosSecundarios_cajas_titulo">{lote.name}</p>
                    <p className="ficha_datosSecundarios_cajas_dato">{lote.value}</p>
                  </div>

              ))}



              </div>
            </div>
            <div className="ficha_stats">

              <div className="ficha_stats_caja">
                <div className="ficha_stats_caja_img">
                  <img src="./img/observaciones-icon.svg" alt=""/>
                </div>
                <div className="ficha_stats_caja_titulo">
                  Observaciones
                </div>
                <div className="ficha_stats_caja_texto">
                  {this.state.data.description}
                </div>
              </div>



            </div>

            <div className="ficha_botonera">
              <div className="navbar_botonera">

                <Link to={'/remate/' + this.state.remate }>
                  <div className="btn btn-ppl">
                    Volver
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
}
}

export default LoteFicha;
