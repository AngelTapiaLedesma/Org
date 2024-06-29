import './MiOrg.css';

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //Const [nombreVar, funcionActualiza] = useState(valorInicials);

    //const [mostrar, actualizarMostrar] = useState(props.actualizarMostrar);    
    //const manejarClick = () => {
    //    console.log('Mostrar / Ocultar elemento', mostrar);
    //    actualizarMostrar(!mostrar);
    //}

    return <section className="orgSection">
        <h3 className='title'>Mi organizacion</h3>
        <img src="/img/botonAdd.png" alt="boton de agregar" onClick={props.cambiarMostrar}></img>
    </section>

};

export default MiOrg; 