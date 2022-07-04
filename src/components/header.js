import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../img/logo_rodeo.svg';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import twitter from '../img/twitter.svg';
import hamburger from '../img/hamburger.svg';




class Header extends React.Component {
  constructor(props){
    super(props);

  }
  logOut(){
    console.log("logOut");

  }
  render() {

    return(
      <div>
          <div className="navbar">
            <div className="navbar_rrss">
                <a href="http://www.google.com">
                  <img
                    src={facebook}
                    alt="facebook"
                    className="navbar_rrss-icon"
                  />
                </a>
                <a href="http://www.google.com">
                  <img
                    src={instagram}
                    alt="instagram"
                    className="navbar_rrss-icon"
                  />
                </a>
                <a href="http://www.google.com">
                  <img
                    src={twitter}
                    alt="twitter"
                    className="navbar_rrss-icon"
                  />
              </a>
            </div>

            <div className="navbar_logo">
              <NavLink to="/">
                <img
                  src={logo}
                  className="navbar_logo_img"
                  alt="El rodeo"
                />
              </NavLink>
            </div>
            {!this.props.logged ?
            <div className="navbar_login">
              <div className="navbar_botonera">

                <NavLink to="/register">
                  <div className="btn">
                    Registrarse
                  </div>
                </NavLink>
                <NavLink to="/login">
                  <div className="btn btn_cta">
                    Ingresar
                  </div>
                </NavLink>
              </div>
            </div> :
            <div>
              <div className="navbar_user">
                <div>
                <p>Bienvenido <b>{this.props.userName}</b> ! 🐮</p>
                </div>
                <div className="btn btn_cta" onClick={this.props.handleLogout}>
                  Salir
                </div>
              </div>
            </div>}

            <div className="navbar_hamburger" id="navbar_hamburger">
              <img
                src={hamburger}
                alt="Menu"
              />
            </div>
          </div>


          <div className="navbar_menu">
            <ul>

                <li><NavLink to='/'>Remates</NavLink></li>

                <li><NavLink to='/comingsoon'>Invernada</NavLink></li>

                <li><NavLink to='/comingsoon'>Nosotros</NavLink></li>

            </ul>
          </div>
      </div>
    )
  }
}

export default Header;
