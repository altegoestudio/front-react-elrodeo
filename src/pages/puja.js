import React, {useState} from "react";
import { useLocation, useParams } from 'react-router-dom';






function Puja(props){
  const [offer, setOffer] = useState(1);
  const [loteData, setLoteData] = useState(0);
  const [min, setMin] = useState(0);
  var loteDataVar = [];
  const { basek } = useParams()



  let location = useLocation();

  React.useEffect(()=>{
    console.log(location);
  },[])

  var pathname = location.pathname;
  var pathnameID = pathname.replace('/puja/', '');
  var separado = pathnameID.split("/");
  var lote = separado[0];
  var base = separado[1];
  //setMin(location.state.minOfferIncrement);

  async function getHighest(a){
    try{
      const daw = await fetch("http://localhost:8050/api/Ofertas/get-highest-bid-from-lote",{
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json"
        },
        mode: 'cors',
        cache: 'default',
        data: '',
        body: JSON.stringify({
          loteId: a,
        })
      })
      .then((response)=> response.json())
      .then((data)=> {
        var dataArr = data;
        var precioActual = dataArr.data.offer + parseInt(base)
        //setOffer(precioActual)

      })
    }
    catch(error){
      console.log(error);
    }
  }





  getHighest(lote);





  return(
    <div className="form-m" >
    <p className="form-back">Atras</p>
    <div className="form">

      <img src="./img/cow-reg.png" className="form_img"/>
      <form>
        <h4></h4>
        <h3>Lote "La Huella"</h3><br/>
        <h4>ultima oferta: <b>{offer}</b> GS</h4>
        <small>suba minima +{min}GS</small>
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

export default Puja;
