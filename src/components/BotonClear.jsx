import React, {Fragment} from "react";
import "../CSS/BotonClear.css";

const BotonClear = ({children, limpiar}) => {
    return ( 
        <Fragment>
           <div
           onClick={limpiar}
            className="boton-clear">
               {children} 
            </div> 
        </Fragment>
    );
}
 
export default BotonClear;