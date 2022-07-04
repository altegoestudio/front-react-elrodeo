import React from 'react';
import {useLocation} from 'react-router';

const LoteFicha = () => {

  var location = useLocation();
  var pathname = location.pathname;
  var arr = pathname.split('/');
  var remate = arr[2];
  var lote = arr[4];

    return(
      <div>
        <h1>{remate}</h1>
        <h3>{lote}</h3>
        <div className="ficha_wrapp">
          <div className="ficha">
            <div className="ficha_titulo">
              <p className="ficha_titulo_codigo">Codigo de remate</p>
              <p className="ficha_titulo_codigo_dato">5522</p>
              <p className="ficha_titulo_titular">Invernada Online</p>
            </div>
            <hr/>
            <div className="ficha_datosPrincipales">
              <div className="ficha_datosPrincipales-cajas">
                <p className="ficha_datosPrincipales-cajas_titulos">Establecimiento:</p>
                <p className="ficha_datosPrincipales-cajas_datos">Las marias</p>
              </div>
              <div className="ficha_datosPrincipales-cajas">
                <p className="ficha_datosPrincipales-cajas_titulos">Localidad:</p>
                <p className="ficha_datosPrincipales-cajas_datos">Las marias</p>
              </div>
              <div className="ficha_datosPrincipales-cajas">
                <p className="ficha_datosPrincipales-cajas_titulos">Zona:</p>
                <p className="ficha_datosPrincipales-cajas_datos">Las marias</p>
              </div>
              <div className="ficha_datosPrincipales-cajas">
                <p className="ficha_datosPrincipales-cajas_titulos">Certificador:</p>
                <p className="ficha_datosPrincipales-cajas_datos">Las marias</p>
              </div>
              <div className="ficha_datosSecundarios">

                <div className="ficha_datosSecundarios_cajas">
                  <p className="ficha_datosSecundarios_cajas_titulo">cantidad</p>
                  <p className="ficha_datosSecundarios_cajas_dato">35</p>
                </div>

                <div className="ficha_datosSecundarios_cajas">
                  <p className="ficha_datosSecundarios_cajas_titulo">Categoria</p>
                  <p className="ficha_datosSecundarios_cajas_dato">Vacas preñadas</p>
                </div>

                <div className="ficha_datosSecundarios_cajas">
                  <p className="ficha_datosSecundarios_cajas_titulo">Raza</p>
                  <p className="ficha_datosSecundarios_cajas_dato">Hibridos</p>
                </div>

                <div className="ficha_datosSecundarios_cajas">
                  <p className="ficha_datosSecundarios_cajas_titulo">Peso promedio</p>
                  <p className="ficha_datosSecundarios_cajas_dato">433kgs</p>
                </div>

                <div className="ficha_datosSecundarios_cajas">
                  <p className="ficha_datosSecundarios_cajas_titulo">Peso total</p>
                  <p className="ficha_datosSecundarios_cajas_dato">12000Kgs</p>
                </div>

                <div className="ficha_datosSecundarios_cajas">
                  <p className="ficha_datosSecundarios_cajas_titulo">Pesados</p>
                  <p className="ficha_datosSecundarios_cajas_dato">%100</p>
                </div>

                <div className="ficha_datosSecundarios_cajas">
                  <p className="ficha_datosSecundarios_cajas_titulo">Solo marca</p>
                  <p className="ficha_datosSecundarios_cajas_dato">Si</p>
                </div>

                <div className="ficha_datosSecundarios_cajas">
                  <p className="ficha_datosSecundarios_cajas_titulo">Hora de pesaje</p>
                  <p className="ficha_datosSecundarios_cajas_dato">00:00:00hs</p>
                </div>

                <div className="ficha_datosSecundarios_cajas">
                  <p className="ficha_datosSecundarios_cajas_titulo">Carimbo</p>
                  <p className="ficha_datosSecundarios_cajas_dato">2</p>
                </div>

                <div className="ficha_datosSecundarios_cajas">
                  <p className="ficha_datosSecundarios_cajas_titulo">Identificación</p>
                  <p className="ficha_datosSecundarios_cajas_dato">CBO 1 Costilla Izq</p>
                </div>

                <div className="ficha_datosSecundarios_cajas">
                  <p className="ficha_datosSecundarios_cajas_titulo">Estado reproductivo</p>
                  <p className="ficha_datosSecundarios_cajas_dato">Preñada</p>
                </div>

                <div className="ficha_datosSecundarios_cajas">
                  <p className="ficha_datosSecundarios_cajas_titulo">Tratamineto nutricional</p>
                  <p className="ficha_datosSecundarios_cajas_dato">Sobre Pasturas Gatton Panic</p>
                </div>

                <div className="ficha_datosSecundarios_cajas">
                  <p className="ficha_datosSecundarios_cajas_titulo">Estado Corporal</p>
                  <p className="ficha_datosSecundarios_cajas_dato">Muy bueno</p>
                </div>

                <div className="ficha_datosSecundarios_cajas">
                  <p className="ficha_datosSecundarios_cajas_titulo">Calidad</p>
                  <p className="ficha_datosSecundarios_cajas_dato">Muy Buena</p>
                </div>

              </div>
            </div>
            <div className="ficha_stats">

              <div className="ficha_stats_caja">
                <div className="ficha_stats_caja_img">
                  <img src="./img/observaciones-icon.svg" alt=""/>
                </div>
                <div className="ficha_stats_caja_titulo">
                  Observaciones
                </div>
                <div className="ficha_stats_caja_texto">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
              </div>

              <div className="ficha_stats_caja">
                <div className="ficha_stats_caja_img">
                  <img src="./img/sanitisacion-icon.svg" alt=""/>
                </div>
                <div className="ficha_stats_caja_titulo">
                  Sanitacion
                </div>
                <div className="ficha_stats_caja_texto">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
              </div>

            </div>
            <div className="ficha_galeria">
              <p className="ficha_galeria_titulo">Imagenes</p>

              <div className="ficha_galeria_caja">

                <div className="ficha_galeria_caja_foto">
                  <img src="./img/vacas.png" alt=""/>
                </div>

                <div className="ficha_galeria_caja_foto">
                  <img src="./img/vacas.png" alt=""/>
                </div>

                <div className="ficha_galeria_caja_foto">
                  <img src="./img/vacas.png" alt=""/>
                </div>

                <div className="ficha_galeria_caja_foto">
                  <img src="./img/vacas.png" alt=""/>
                </div>

                <div className="ficha_galeria_caja_foto">
                  <img src="./img/vacas.png" alt=""/>
                </div>

                <div className="ficha_galeria_caja_foto">
                  <img src="./img/vacas.png" alt=""/>
                </div>

                <div className="ficha_galeria_caja_foto">
                  <img src="./img/vacas.png" alt=""/>
                </div>

                <div className="ficha_galeria_caja_foto">
                  <img src="./img/vacas.png" alt=""/>
                </div>

              </div>
            </div>
            <div className="ficha_botonera">
              <div className="navbar_botonera">
                <div className="btn btn-ppl">
                  Volver
                </div>
                <div className="btn btn_cta">
                  Ofertar
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
}

export default LoteFicha;
