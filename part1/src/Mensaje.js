
const Mensaje = (props) =>{
    console.log(props) //console log lo que se muestra por consola.
    return <h1 style={{color: props.color}} >* {props.message} *</h1> //lO que se muestra en el navegador.
  }

  export default Mensaje;