
import './App.css';
import Mensaje from './Mensaje';


/*Primer componente llamado Description*/
const Description = () =>{
  return <p>Este es un curso de Reaact</p>
}

function App() {
  return (
    <div className="App">
      <Mensaje color="green" message="Estamos trabajando"/> 
      <Mensaje color="yellow" message="en un crso"/>
      <Mensaje color="red" message="de React"/>
      
      <Description/>
    </div>
  );
}

export default App;
