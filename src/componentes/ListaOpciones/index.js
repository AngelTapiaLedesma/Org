import './ListaOpciones.css'
const ListaOpciones = (props) => {
        
    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value);
    }

    return <div className='lista-opciones'>
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}> 
            <option 
                value='' 
                disabled defaultvalue='' 
                hidden
            >Seleccionar Equipo</option>
            {props.equipos.map( (equipos, index) =>  <option value={equipos} key={index}>{equipos}</option>)}
        </select>
    </div>
};


export default ListaOpciones;