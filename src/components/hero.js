import React from 'react';
import banner from '../img/hero-image.png';
import bannerJson from '../json/banner.json';

var bannerData = bannerJson[0];

class Hero extends React.Component{

  render(){
    return(
      <div className="hero">
        <h2 className="hero_title">
          {bannerData.titulo}
        </h2>
        <p className="hero_parragraph">
          {bannerData.copy}
        </p>
        <div className="btn btn_cta">
          {bannerData.cta}
        </div>
        <img src={banner} className="hero_img"/>
      </div>
    )
  }
}

export default Hero;
