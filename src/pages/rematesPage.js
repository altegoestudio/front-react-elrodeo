import React from 'react';
import RematesList from '../components/rematesList';
import Hero from '../components/hero'

class RematesPage extends React.Component{
  render(){
    return (
      <div>
        <Hero/>
        <RematesList/>
      </div>
    )
  }
}

export default RematesPage;
