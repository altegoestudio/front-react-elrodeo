import React from 'react';
import LotesBig from '../components/lotesBig';
import lotesBig from '../json/lotes.json';
//import {useLocation} from 'react-router';
/*
var location = useLocation();
var pathname = location.pathname;
var pathnameID = pathname.replace('/remate/', '');
*/

const remateID = window.location.href.split('/')[4]
console.log(remateID);

var bodyData = {
  remateId: parseInt(remateID)
}
console.log(bodyData);
class LotesBigList extends React.Component{
    state = {
      rid: window.location.href.split('/')[4],
      loading: true,
      error: null,
      data: [{}],
      remateID: window.location.href.split('/')[4]
    }
    componentDidMount(){
      this.fetchData();

    }
    sorter(){

    }
    fetchData = async () =>{
      this.setState({loading: true})
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
          body: JSON.stringify({remateId: parseInt(this.state.rid)}),
          data: {
            "remateId": "1"
          }
        })
        .then((response)=> response.json())
        .then((data)=> {
          dataArr = data;
          console.log(dataArr);
          this.setState({data: dataArr.data})
          console.log(this.state.data[0].id);

          setTimeout(()=>{
            //console.log(typeof this.state.data);
          },1000)

          this.state.data.map((lote, i) => {
            var string = lote.id.toString()
            console.log(string);
            console.log(i);
            //this.setState({data: dataArr.data})
          } )

        })
      }
      catch(error){
        console.log(error);
      }

      setTimeout(()=>{this.setState({loading: false});console.log(this.state);},10)
    }
    render(){
      if(this.state.loading){
        return null
      }
      console.log(this.state.data.loteList[0].animales);
      return(
        <div>
          <div className="lotesBig_portada">

          </div>
          <div className="lotesBig_portada">
            <img src="../img/portada.png" />
          </div>
          <div className="orderer">

          {this.state.data.loteList.map((lote, i) => (
            <LotesBig
              path={lote.remateId}
              key={i}
              mi={lote.id}
              name={lote.name}
              remated= {lote.remateId}
              status={lote.status}
              orden={lote.order}
              propietario={lote.owner}
              base={lote.maxOffer}
              minOffer={lote.minOfferIncrement}
              peso="{lote.info.peso}"
              carimbo="{lote.info.carimbo}"
              oferta="{lote.info.oferta}"
              ofertante="{lote.info.ofertante}"
              animales={lote.animales}
            />
          ))}


          </div>
        </div>
      )
    }
}

export default LotesBigList;
/*





*/
