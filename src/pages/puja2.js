import React, {useState} from "react";
import { useLocation, useParams } from 'react-router-dom';
import { withRouter } from "react-router";




class Puja extends React.Component{
  state = {
    loading: true,
    loteID: window.location.href.split('/')[4],
    remateId: window.location.href.split('/')[5],
    props: this.props,
    remate: [],
    lote:[]
  }
  componentDidMount(){
    //const loteID = window.location.href.split('/')[4];
    //console.log(loteID);

    //const remateID = window.location.href.split('/')[5];
    //console.log(remateID);

    var bodyDataRemate = {
      remateId: this.state.remateId
    }
    var bodyDataLote = {
      loteId: this.state.loteID
    }
    this.fetchData1();
    this.fetchData2();
  }
  fetchData1 = async () =>{
    try{
      const daw = await fetch("http://localhost:8050/api/Remates/get-lotes-from-remates",{
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          "accept": "text/plain"
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({remateId: this.state.remateId}),
        data: {
          "remateId": "1"
        }
      })
      .then((response)=> response.json())
      .then((data)=> {
        var dataArr = data;
        console.log(data);
        this.setState({remate: dataArr.data.filter(lote => lote.id == this.state.loteID)})
        //var foo = this.state.remate.filter(lote => lote.id == this.state.loteID);
        //console.log(foo[0]);
        //this.setState({remate: foo[0]})

      })
    }
    catch(error){
      console.log(error);
    }

    setTimeout(()=>{this.setState({loading: false}); console.log(this.state.remate[0]);},10)
  }
  fetchData2 = async () =>{
    try{
      const daw = await fetch("http://localhost:8050/api/Ofertas/get-highest-bid-from-lote",{
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          "accept": "text/plain"
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({loteId: this.state.loteID}),
        data: {
          "remateId": "1"
        }
      })
      .then((response)=> response.json())
      .then((data)=> {
        var dataArr = data;
        console.log(dataArr.data);
        this.setState({lote: dataArr.data})
        console.log(this.state.lote);

      })
    }
    catch(error){
      console.log(error);
    }

    setTimeout(()=>{this.setState({loading: true})},3000)
  }

  render(){

    {if(!this.state.loading){
      return null
    }}
    
    return(
      <div className="form-m" >
      <p className="form-back">Atras</p>
      <div className="form">

        <img src="./img/cow-reg.png" className="form_img"/>
        <form>
          <h4></h4>
          <h3>Lote "La Huella"</h3><br/>
          <h4>ultima oferta: <b></b> GS</h4>
          <small>suba minima +GS</small>
            <div className="form_box">


              <div className="form_box_item">
                <label>Ingrese oferta (sin puntos)</label>
                <input
                  type="number"
                  id='user'
                  name='user'
                />
                <small id="mensajeMail"></small>
              </div>

            </div>

          <button type="button"  className="btn btn_cta">Ofertar</button>
          <small id="mensajeBtn"></small>
        </form>
        </div>
      </div>
    );
  }


}

export default Puja;
