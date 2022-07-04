import React from 'react';
import LotesBig from '../components/lotesBig';
import lotesBig from '../json/lotes.json';
import {useLocation} from 'react-router';

const LotesBigList = () =>{

    var location = useLocation();
    var pathname = location.pathname;
    var pathnameID = pathname.replace('/remate/', '');


    return(
      <div>
        <div className="lotesBig_portada">
          <h1>-Remate ID: {pathnameID}</h1>
        </div>
        <div className="lotesBig_portada">
          <img src="../img/portada.png" />
        </div>

        {lotesBig.map(lote => (
          <LotesBig
            path={pathnameID}
            key={lote.loteId}
            mi={lote.loteId}
            status={lote.status}
            orden={lote.remateId}
            propietario={lote.info.propietario}
            peso={lote.info.peso}
            carimbo={lote.info.carimbo}
            oferta={lote.info.oferta}
            ofertante={lote.info.ofertante}
            animales={lote.animales}
          />
        ))}
      </div>
    )

}

export default LotesBigList;
