import React from 'react';
import RematesCard from './rematesCard';
import remates from '../json/remates.json';
import {Link, NavLink} from 'react-router-dom';
import Lottie from 'lottie-react';
import loader from '../img/loader.json'



class RematesList extends React.Component{
  state = {
    loading: true,
    error: null,
    data: [
      {
        id:1,
        owner:"-",
        start:"2022-06-30T17:10:40.407836-03:00",
        name: "No se ha encontrado ningun remate",
        end: "2022-07-04T15:10:40.407839-03:00",            //
        img: " "
      }
    ],
  }
  componentDidMount(){
    this.fetchData();
  }
  fetchData = async () =>{
    this.setState({loading: true})

    var dataArr = []
    try{
      const daw = await fetch("https://api.elrodeo.com.py/api/Remates/get-all-remates",{
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json"
        },
        mode: 'cors',
        cache: 'default',
        data: ''
      })
      .then((response)=> response.json())
      .then((data)=> {
        dataArr = data;
        this.setState({data: dataArr.data})


      })
    }
    catch(error){
      console.log(error);
    }

    setTimeout(()=>{this.setState({loading: false})},10)
  }
  render(){
    if(this.state.loading === true){
      return(
        <div>
          Loading...
        </div>
      )
    }
    return(
      <div className="remates_list">

        {this.state.data.map(card => (
          <NavLink to={"/lote/" +  card.id} key={card.id} style={{ textDecoration: 'none' }}>
            <RematesCard
              key={card.id}
              mi={card.id}
              owner={card.owner}
              start={card.start}
              name={card.name}
              end={card.end}
              img={card.imageUrl}
            />
          </NavLink>
        ))}
      </div>
    )
  }
}

export default RematesList;
/*
<Link to={"/remate/"+ card.id} key={card.id} style={{ textDecoration: 'none' }}>
*/
