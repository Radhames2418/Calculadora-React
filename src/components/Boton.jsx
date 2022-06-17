import React, {Fragment} from "react";
import '../CSS/Boton.css';

const Botones = ({children, manejarClic}) => {

    function esOperador(valor){

      return isNaN(valor) && (valor !== '.') && (valor !== '=');

    };

    return ( 

        <Fragment>
            <div
            onClick={() => manejarClic(children)}
            className={`boton-contenedor ${esOperador(children) ? 'operador' : '' }`.trimEnd()}>
              {children}
            </div>
        </Fragment>
    );
}
 
export default Botones;