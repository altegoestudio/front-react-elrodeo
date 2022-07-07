import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';




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
      const daw = await fetch("https://api.elrodeo.com.py/api/Ofertas/get-highest-bid-from-lote",{
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
      const daw = await fetch("https://api.elrodeo.com.py/api/Remates/get-lotes-from-remates",{
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
    if(this.props.token){
      console.log("toek");
      try {
        let res =  fetch("https://api.elrodeo.com.py/api/ofertas/bid-up", {
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
          var msjOk = document.getElementById('mensajeOk');


          console.log("--======---");
          console.log(data);
          if(data.status === 'Ok'){
            console.log("puja correcta");
            msjOk.innerText = "puja correcta";
            setTimeout(()=>{msjOk.innerText = " ";}, 1000)
          }else{
            console.log("error");

          }
          this.fetchData2();
        })
      } catch (err) {
        console.log(err);
      }

    }else{
      var msjErr = document.getElementById('mensajeErr');
      console.log("no tok");
      msjErr.innerText = "Logeese antes de ofertar";
    }


  }
  render(){
    console.log(this.state.lote.name);

    return(
      <div className="form-m" >

      <div className="form">

        <img src="../../img/cow-reg.png" className="form_img"/>
        <form onSubmit={this.onSubmit}>

          <Link to={'/lote/' + this.state.lote.remateId }>
            <small className="atras">Atras</small>
          </Link>
          <br/>
          <br/>
          <h3>{this.state.lote.name}</h3><br/>
          <h4>ultima oferta: <b>{this.state.lote.maxOffer}</b> GS</h4>
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


          <small id="mensajeOk" className="green"></small>
          <small id="mensajeErr" ></small>
        </form>
        </div>
      </div>
    );
  }


}

export default Puja2;
