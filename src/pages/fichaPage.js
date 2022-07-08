import React from 'react';
import LoteFicha from '../components/loteFicha';
/*
id={this.state.loteFiltrado.id.toString()}
name={this.state.loteFiltrado.name}
animales= {this.state.loteFiltrado.animales}
descripcion= {this.state.loteFiltrado.description}
oferta={this.state.loteFiltrado.maxOffer}
*/
class FichaPage extends React.Component{
  state = {
    loading: false,
    error: null,
    data: [ ],
    lid: window.location.href.split('/')[6],
    rid: window.location.href.split('/')[4],
    loteFiltrado: "",
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
        //console.log(dataArr);
        this.setState({data: dataArr.data.loteList})
        //console.log(this.state.data);
        var a = dataArr.data.loteList;
        var b = a.filter(lote =>{

          console.log(this.state.lid);
          console.log(lote.id, lote.id == this.state.lid);
          return lote.id == this.state.lid
        })

        this.setState({loteFiltrado: b[0]})
        console.log(b[0]);
        this.setState({loteFiltrado: b[0]})
        console.log(this.state.loteFiltrado);
        /*
        this.state.data.map((lote, i) => {
          var string = lote.id.toString()
          this.setState({data: dataArr.data})
        } )
        */

      })
      .then(()=>{
        console.log(this.state.loteFiltrado);
        this.setState({loading: false})
      })
    }
    catch(error){
      console.log(error);
    }

    setTimeout(()=>{this.setState({loading: false});console.log(this.state);},10)
  }
  componentDidMount(){
    //this.fetchData();
  }
  render(){
    {if(this.state.loading){
      return null
    }}
    return (
      <LoteFicha

      />
    )
  }
}

export default FichaPage;
