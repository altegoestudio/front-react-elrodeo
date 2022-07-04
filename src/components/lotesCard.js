import React from 'react';

class LotesCard extends React.Component{
  render(){
    return(

        <div class="card2">
          <div class="card2_container">
            <div class="card2_container_lote">
              LOTE 01 - ID 671
            </div>
            <div class="card2_container_img">
              <img src="./img/vacas.png" alt=""/>
            </div>
            <div class="card2_container_timer">
              12 D. 23:59:59
            </div>
            <div class="card2_container_titulo">
              Estancia Santa Cecilia
            </div>
            <div class="card2_container_precio">
              Gs. 2.000.000
            </div>
            <div class="card2_container_caracteristica">
              <div class="card2_container_caracteristica-item">
                Categoria: Vaquillas
              </div>
              <div class="card2_container_caracteristica-item">
                Cantidad: 999
              </div>
              <div class="card2_container_caracteristica-item">
                Pelo: Negro
              </div>
              <div class="card2_container_caracteristica-item">
                Peso: 153 Kg
              </div>
              <div class="card2_container_caracteristica-item">
                Dpto: San Pedro
              </div>
              <div class="card2_container_caracteristica-item">
                Carimbo: 2
              </div>
              <div class="card2_container_caracteristica-item">
                Peso: 153 Kg
              </div>
              <div class="card2_container_caracteristica-item">
                Dpto: San Pedro
              </div>



            </div>
            <div class="card2_container_botonera">
              <div class="btn_cta card2_container_btn">
                VER MÁS
              </div>
              <div class="btn_cta card2_container_btn">
                 OFERTAR
              </div>

            </div>
          </div>
        </div>

    )
  }
}

export default LotesCard;
