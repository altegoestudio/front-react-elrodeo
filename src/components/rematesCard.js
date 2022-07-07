import React, { useState, useEffect } from "react";
import remates from '../json/remates.json';
import imageUrl from '../img/portada.png';

var rematesA = remates[0];

const remateID = window.location.href.split('/')[4]
console.log(remateID);





class RematesCard extends React.Component{
  state = {
    getStatus: this.getStatus.bind(this),
    //remates: remates[0],
    chrono : false,
    dateStart: new Date(this.props.start),
    dateEnd: new Date(this.props.end),
    today: new Date(),
    timer: document.getElementById('timer'+this.props.mi),
    status: document.getElementById('status'+this.props.mi),
    name: this.props.name,
    owner: this.props.owner,
    remateID: window.location.href.split('/')[4]
  }

  getStatus(){

    var timer = document.getElementById('timer'+this.props.mi);
    var status = document.getElementById('status'+this.props.mi);



    if((this.state.today - this.state.dateStart) > 0){
      this.setState({chrono : true});
      status.classList.add('statusGreen');
      status.classList.remove('statusRed','statusGrey');
      //status.classList.remove('statusGrey');
      status.innerHTML = "En proceso";
      if((this.state.dateEnd - this.state.today) < 0){
        this.setState({chrono : false});
        timer.style.display = "none";
        status.classList.add('statusRed');
        status.classList.remove('statusGreen','statusGrey');
        //status.classList.remove('statusGrey');
        status.innerHTML = "Terminada";
      }
    }else{
      this.setState({chrono : false})
      timer.style.display = "none";
      status.classList.add('statusGrey');
      status.classList.remove('statusRed','statusGreen');
      //status.classList.remove('statusGreen');
      status.innerHTML = "Proximamente";
    }

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

    var dateEnd = new Date(this.props.start);
    var day = dateEnd.getDate();
    var month = dateEnd.getMonth();
    var year = dateEnd.getFullYear();
    var dia = dateEnd.getDay();

    var arrday = stringDay[dia] + " " + day + " de " + stringMonth[month] + ' ' + year
    return arrday
  }
  getDate(){
    var date_target = new Date(this.props.end);

    var span_d = document.getElementById("td"+this.props.mi);
    var span_h = document.getElementById('th'+this.props.mi);
    var span_m = document.getElementById('tm'+this.props.mi);
    var span_s = document.getElementById('ts'+this.props.mi);

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

  componentDidMount(){
    const thisBoundedIncrementer = this.getDate.bind(this);
    this.interval = setInterval(thisBoundedIncrementer, 1000);

    this.getDateText();
    this.getStatus();
  }
  componentWillUnmount(){
    //console.log(this.interval);
    clearInterval(this.interval)
  }
  render(){
    return(
      <div className="card1">
        <div className="card1_container">
          <div className="card1_container_img">
            <img src="./img/placeholder.png" alt=""/>
          </div>
          <div className="card1_container_status" id={"status"+this.props.mi}>

          </div>
          <div className="card1_container_text">
            <div className="card1_container_text_cajaSuperior">
              <p className="card1_container_text-cliente">
                {this.state.owner}
              </p>
              <p className="card1_container_text-titulo">
                {this.state.name}
              </p>
            </div>

            <div className="card1_container_text_cajaInferior">
              <p className="card1_container_text-fecha">
                {this.getDateText()}
              </p>
              <small className="card1_container_text-tiempo" id={"timer"+this.props.mi}>
                <span>Termina en: </span>
                <span id={"td"+this.props.mi}>0</span> dias <span> </span>
                <span id={"th"+this.props.mi}>0</span>:
                <span id={"tm"+this.props.mi}>0</span>:
                <span id={"ts"+this.props.mi}>0</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RematesCard;
