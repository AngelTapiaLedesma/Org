import './Equipo.css'
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    //Destructuracion
    const {colorPrimario, titulo, id} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor,like} = props; 
    const estiloTitulo = {
        borderColor: hexToRgba(colorPrimario)
    }

    const estiloEquipo = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }
    
    return colaboradores.length > 0 && <section className="equipo" style={estiloEquipo}>
        <input
            type="color"
            className='input-color'
            value={hexToRgba(colorPrimario, 0.6)}
            onChange={(evento)=>{
                console.log(evento.target)
                actualizarColor(evento.target.value, id);
            }}
        />
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map((colaborador, index)=> <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                />)
            }    
        </div>
    </section>
}

export default Equipo;