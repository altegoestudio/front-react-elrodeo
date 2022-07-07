import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';




class Puja2 extends React.Component{
  state = {
    
    newOffer:'',
    lid: window.location.href.split('/')[4],
    rid: window.location.href.split('/')[5],
    oferta: "",
    lote: []
  }
  componentDidMount(){
    console.log(this.props.token);
    this.fetchData()
    this.fetchData2()
    console.log(this.state.rid);

    //const navigate = useNavigate()
  }
  fetchData = async () =>{
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
        body: JSON.stringify({loteId: parseInt(this.state.lid)}),
        data: {
          "remateId": "1"
        }
      })
      .then((response)=> response.json())
      .then((data)=> {
        var dataArr = data;
        console.log(data.data.offer);
        this.setState({oferta:data.data.offer})

      })
    }
    catch(error){
      console.log(error);
    }

    setTimeout(()=>{this.setState({loading: false})},10)
  }
  fetchData2 = async () =>{
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
        body: JSON.stringify({remateId: parseInt(this.state.rid)}),
        data: {
          "remateId": "1"
        }
      })
      .then((response)=> response.json())
      .then((data)=> {
        //var dataArr = data;
        //console.log(data.data.filter( lote => lote.id == this.state.lid ));
      //var bart = data.data.filter( lote => lote.id == this.state.lid )
        //this.setState({lote: bart})
        this.setState({lote: data.data.filter( lote => lote.id == this.state.lid )[0]})
      })
    }
    catch(error){
      console.log(error);
    }

    setTimeout(()=>{this.setState({loading: false})},10)
  }
  handlerOffer = (e) =>{

    this.setState( {newOffer: e.target.value} );

  }
  onSubmit = (e) =>{
    console.log(this.props.token);
    e.preventDefault();
    try {
      let res =  fetch("http://localhost:8050/api/ofertas/bid-up", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "accept": "text/plain",
          'Authorization': 'Bearer ' + this.props.token
        },
        body: JSON.stringify({
          offer: this.state.newOffer,
          loteId: this.state.lid
        }),
      })
      .then((response)=> response.json())
      .then((data)=> {

        console.log(data);

      })
    } catch (err) {
      console.log(err);
    }
  }
  render(){
    console.log(this.state.lote.name);

    return(
      <div className="form-m" >

      <div className="form">

        <img src="../../img/cow-reg.png" className="form_img"/>
        <form onSubmit={this.onSubmit}>
          <h4></h4>
          <h3>{this.state.lote.name}</h3><br/>
          <h4>ultima oferta: <b>{this.state.oferta + this.state.lote.minOfferValue}</b> GS</h4>
          <small></small>
            <div className="form_box">


              <div className="form_box_item">
                <label>Ingrese oferta (sin puntos)</label>
                <input
                  type="number"
                  id='user'
                  name='user'
                  onChange={this.handlerOffer}
                />
                <small id="mensajeMail"></small>
              </div>

            </div>

          <button type="button" className="btn btn_cta" onClick={this.onSubmit}>Ofertar</button>

          <small id="mensajeBtn"></small>
        </form>
        </div>
      </div>
    );
  }


}

export default Puja2;
