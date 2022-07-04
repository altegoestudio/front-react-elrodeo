import React from 'react';
import logoFooter from '../img/logo_footer.svg';
var mainURL = "http://google.com";

class Footer extends React.Component{
  render(){
    return(
      <div>
        <div className="footer">
          <div className="footer_logo">
            <a href={mainURL}>
              <img src={logoFooter} alt="El rodeo"/>
            </a>
          </div>
          <div className="footer_link">
            <div className="footer_link_a">
              <ul>
                  <a href={mainURL}>
                    <li>Nosotros</li>
                  </a>
                  <a href={mainURL}>
                    <li>Como Funciona</li>
                  </a>
                  <a href={mainURL}>
                    <li>Noticias</li>
                  </a>
              </ul>
            </div>
            <div className="footer_link_b">
              <ul>
                <a href={mainURL}>
                  <li>Como Subasto</li>
                </a>
                <a href={mainURL}>
                  <li>Inscribir mi lote</li>
                </a>
                <a href={mainURL}>
                  <li>Contactanos</li>
                </a>
              </ul>

            </div>
          </div>
        </div>
        <div className="sub-footer">
          Un producto diseñado y desarrollado por: <a href="https://creadores.com.py/">creadores</a> 
        </div>
      </div>
    )
  }
}

export default Footer;
