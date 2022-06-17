import React, {Fragment} from "react";
import "../CSS/Pantalla.css";

const Pantalla = ({ input }) => {
    return (  
        <Fragment>
            <div className="input">
                {input}
            </div>
        </Fragment>
    );
}
 
export default Pantalla;