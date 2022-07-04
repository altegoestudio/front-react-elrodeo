import React from "react";
import Lottie from 'lottie-react';
import notFound from '../img/404.json';


class Error extends React.Component{
  constructor(props){
    super(props);

  }
  render(){

    return(
      <div>
        <Lottie animationData={notFound} loop={true} className='notFound'/>
      </div>
    );
  }
}

export default Error;
