import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';




class Puja2 extends React.Component{
  state = {
    loading: true,
    chrono : false,
    start: '',
    end: '',
    newOffer:'1',
    lid: window.location.href.split('/')[4],
    rid: window.location.href.split('/')[5],
    oferta: "",
    lote: []
  }
  getDateText(){
    const stringDay = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado'
    ]
    const stringMonth = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      'octubre',
      'noviembre',
      'diciembre'
    ]
    var dateEnd, dateEnd, day, month, year, dia;
    dateEnd = new Date(this.state.end);
    day = dateEnd.getDate();
    month = dateEnd.getMonth();
    year = dateEnd.getFullYear();
    dia = dateEnd.getDay();

    var arrday = stringDay[dia] + " " + day + " de " + stringMonth[month] + ' ' + year

    return arrday
  }
  getDate(){

    var date_target = new Date(this.state.end);

    var span_d = document.getElementById("td");
    var span_h = document.getElementById('th');
    var span_m = document.getElementById('tm');
    var span_s = document.getElementById('ts');

    var ms_s = 1000;
    var ms_m = ms_s * 60;
    var ms_h = ms_m * 60;
    var ms_d = ms_h * 24;

      if(this.state.chrono){
        function updateCountdown(){



          var now = new Date();
          var duration = date_target - now;

          var rem_days = Math.floor(duration / ms_d);
          var rem_hours = Math.floor((duration % ms_d) / ms_h);
          var rem_mins = Math.floor((duration % ms_h) / ms_m);
          var rem_secs = Math.floor((duration % ms_m) / ms_s);


          span_d.innerHTML = rem_days;

          (rem_hours < 10)
          ?span_h.innerHTML = "0" + rem_hours
          :span_h.innerHTML = rem_hours;

          (rem_mins < 10)
          ?span_m.innerHTML = "0" + rem_mins
          :span_m.innerHTML = rem_mins;

          (rem_secs < 10)
          ?span_s.innerHTML = "0" + rem_secs
          :span_s.innerHTML = rem_secs;

        }

        updateCountdown()
      }
  }
  onSubmit = (e) =>{
    var a = parseInt(this.state.lote.minOfferIncrement) + parseInt(this.state.lote.maxOffer)
    var msjErr = document.getElementById('mensajeErr');
    if( a  > parseInt(this.state.newOffer)){
      msjErr.innerText = "La oferta tiene que superior a: " + a;
      return null
    }
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
  format = (input) => {
    var num = input.value.replace(/\./g,'');
    if(!isNaN(num)){
      num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
      num = num.split('').reverse().join('').replace(/^[\.]/,'');
      input.value = num;
    }

    else{ alert('Solo se permiten numeros');
      input.value = input.value.replace(/[^\d\.]*/g,'');
    }
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
        this.setState({oferta: data.data.offer})
      })
    }
    catch(error){
      console.log(error);
    }
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

        this.setState({lote: data.data.loteList.filter( lote => lote.id == this.state.lid )[0]})
        this.setState({end: this.state.lote.end});
        setTimeout(()=>{
          this.setState({start: this.state.lote.remate.start});
          this.setState({chrono : true});
        },0)
      })
    }
    catch(error){
      console.log(error);
    }
    setTimeout(()=>{this.setState({loading: false})},0)
  }
  handlerOffer = (e) =>{
    this.setState( {newOffer: e.target.value} );
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  componentDidMount(){

    this.fetchData()
    this.fetchData2()


    this.getDateText()

    const thisBoundedIncrementer = this.getDate.bind(this);
    this.interval = setInterval(thisBoundedIncrementer, 1000);
  }
  render(){
    if(this.state.loading){
      return null
    }
    return(
      <div className="form-m" >

      <div className="form">

        <img src="../../img/cow-reg.png" className="form_img"/>
        <form onSubmit={this.onSubmit}>

          <Link to={'/lote/' + this.state.lote.remateId }>
            <p className="atras">Volver a lotes</p>
          </Link>
          <br/>
          <br/>
          <h3 className="big">{this.state.lote.name}</h3><br/>

          <h4>Cierra: <br/><b className="atras">{this.getDateText()}</b></h4>
          <br/>
          <h4>Oferta más alta: <br/><b className="atras">{this.state.lote.maxOffer} GS</b></h4>
          <br/>
          <h4>Oferta min: <br/><b className="atras">{this.state.lote.minOfferIncrement} GS</b></h4>

          <small></small>
            <div className="form_box">


              <div className="form_box_item">
                <label>Ingrese oferta (sin puntos)</label>
                <input
                  type="number"
                  id='user'
                  name='user'
                  onChange={this.handlerOffer}
                  step="100"
                />
                <small id="mensajeMail"></small><br/><br/>
                <small className="card1_container_text-tiempo" id="timer">
                  <span>Termina en: </span>
                  <span id="td">0</span> dias <span> </span>
                  <span id="th">0</span>:
                  <span id="tm">0</span>:
                  <span id="ts">0</span>
                </small>
              </div>

            </div>
          <div>
            <button type="button" className="btn btn_cta" onClick={this.onSubmit}>Ofertar</button>
            <button type="button" className="btn btn-ppl m-1" onClick={this.fetchData}>Actualizar oferta</button>
          </div>

          <small id="mensajeOk" className="green"></small>
          <small id="mensajeErr" ></small>
        </form>
        </div>
      </div>
    );
  }


}

export default Puja2;
