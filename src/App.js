import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/index.js';
import Equipo from './componentes/Equipo/index.js';
import Footer from './componentes/Footer/index.js';
import {v4 as uuid} from 'uuid';
 
function App() {
  const[mostrarFormulario,actualizarMostrar] = useState(false);
  // Colaboradores
  const [colaboradores,actualizarColaboradores] = useState([
    { 
      id:uuid(),
      equipo:"Programacion",
      foto:"https://github.com/angeltapialedesma.png",
      nombre:"Angel Tapia",
      puesto:"Lider",
      fav:true
    },
    {
      id:uuid(),
      equipo:"Frontend",
      foto:"https://github.com/harlandlohora.png",
      nombre:"Harland Lohora",
      puesto:"Instructor",
      fav:false
    }, {
      id:uuid(),
      equipo:"Data Science",
      foto:"https://github.com/bearcide.png",
      nombre:"Emilio Garcia",
      puesto:"Lider",
      fav:false
    },
    {
      id:uuid(),
      equipo:"Devops",
      foto:"https://media.licdn.com/dms/image/D5603AQFH28T-i_aTmg/profile-displayphoto-shrink_800_800/0/1715262157316?e=1724889600&v=beta&t=OIyf6i5MWhN98m3X0NBAgx6j5lLbYSzpPi6eqxa7XxQ",
      nombre:"Alvaro Osmany",
      puesto:"Instructor",
      fav:true
    },
    {
      id:uuid(),
      equipo:"UX y Diseño",
      foto:"https://media-qro1-1.cdn.whatsapp.net/v/t61.24694-24/410665451_205145436012869_3849818756914665696_n.jpg?ccb=11-4&oh=01_Q5AaIOCKeUW2RgBoG8tfGyOdRcZSLRZLuRiJJqCGpP1ts4TZ&oe=66874DD9&_nc_sid=e6ed6c&_nc_cat=103",
      nombre:"Erandi Tapia",
      puesto:"Gestor",
      fav:true
    }
  ]);
  const [equipos,actualizarEquipos] = useState([
    {
      id:uuid(),
      titulo: 'Programacion',
      colorPrimario: '#57C278',
      colorSecundario: '#D9F7E9'
    },
    {
      id:uuid(),
      titulo: 'Frontend',
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF'
    },
    {
      id:uuid(),
      titulo: 'Data Science',
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2'
    },
    {
      id:uuid(),
      titulo: 'Devops',
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8'
    },
    {
      id:uuid(),
      titulo: 'UX y Diseño',
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5'
    },
    {
      id:uuid(),
      titulo: 'Movil',
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9'
    },
    {
      id:uuid(),
      titulo: 'Innovación y gestión',
      colorPrimario: '#FFEEDF',
      colorSecundario: '#FF8A29'
    }
  ]);
  
  //ternario ->  condicion ? true : false;
  // Condicion && seMuestra 
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  // Actualizar colores de equipo
  const actualizarColor = (color,id) => {
      console.log("Actualizar equipo",color,id)
      const equiposActualizados = equipos.map((equipo) => {
        if(equipo.id === id){
          equipo.colorPrimario = color;
        }
        return equipo;
      })

      actualizarEquipos(equiposActualizados);
  }
  
  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log('Nuevo colaborador' , colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  } 

  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log('Eliminar colaborador',id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores);
  }

  // Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos,{...nuevoEquipo, id:uuid()}]);
  }

  const like = (id) => {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    })

    actualizarColaboradores(colaboradoresActualizados);
  }

  return (
    <div className="App">
      <Header/>
      {/* {mostrarFormulario ? <Formulario></Formulario> : <></>}   */}
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
      />)
      }
      <Footer/>
    </div>
  );
}

export default App;
