import React from "react";
import '../App.css';


class Ventas extends React.Component {
render(){
    return(
    <div className="formulario">
        <form>
        <div>
            <label>Id</label>
            <input type="number"/>
        </div>
        <div>
            <label>Total</label>
            <input type="number"/>
        </div>
        <div>
            <label>Cantidad</label>
            <input type="number" />
        </div>
        <div>
            <label>Documento</label>
            <input type="number" />
        </div>
        <div>
            <label>Cliente</label>
            <input type="text" />
        </div>
        <div>
            <label>Vendedor</label>
            <input type="text" />
        </div>
            <input type="submit" value="Editar" />
            <input type="button" value="Limpiar"  />
        </form>
    </div>
    );
}

}
export default Ventas;