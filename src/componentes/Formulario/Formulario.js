import { useState } from 'react';
import './Formulario.css';
import Campo from '../Campo';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Boton';
const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState('');
    const [puesto, actualizarPuesto] = useState('');
    const [foto, actualizarFoto] = useState('');
    const [equipo, actualizarEquipo] = useState('');
    const [titulo, actualizarTitulo] = useState('');
    const [color, actualizarColor] = useState('');

    //Destructuracion
    const {registrarColaborador, crearEquipo} = props;


    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            equipo:equipo,  
            nombre: nombre,
            puesto: puesto,
            foto: foto
        }  
        registrarColaborador(datosAEnviar);
    };

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo,colorPrimario:color});
    }


    return <section className='formulario'>        
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo 
                titulo='Nombre' 
                placeholder='Ingresar no mbre' 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <Campo 
                titulo='Puesto' 
                placeholder='Ingresar puesto' 
                required 
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />
            <Campo 
                titulo='Foto' 
                placeholder='Ingresar foto' 
                valor={foto} 
                actualizarValor={actualizarFoto}/
            >   
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos = {props.equipos}
            />
            <Boton texto='Crear colaborador'/>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo 
                titulo='Titulo' 
                placeholder='Ingresar titulo' 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />                

            <Campo 
                type='color'
                titulo='color' 
                placeholder='Ingresar el color en hexadecimal' 
                required 
                valor={color} 
                actualizarValor={actualizarColor}
            />
            <Boton texto='Registrar equipo'/>
        </form>
    </section>
} 


export default Formulario;