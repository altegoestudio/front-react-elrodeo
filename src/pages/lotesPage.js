import React from 'react';
import LotesBigList from '../templates/lotesBigList';
import Hero from '../components/hero'

class LotesPage extends React.Component{
  render(){
    return (
      <div>
        <Hero/>
        <LotesBigList/>
      </div>
    )
  }
}

export default LotesPage;
