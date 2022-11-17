import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [ clients, setClients] = useState([]);
  
  useEffect( () => {
    axios.get('https://contable-advisory.herokuapp.com/cliente/')//'http://127.0.0.1:8000/clientes/'
    .then((response) => {
      setClients(response.data.clientes);
    });
  }, []);

  return (
    <div className="App">
      <h2> Clientes Registrados</h2>
      <table border="1" class="App-table">
        <thead>
          <tr>
            <th>
              Nombre
            </th>
            <th>
              Tipo Documento
            </th>
            <th>
              # Documento
            </th>
            <th>
              Genero
            </th>
          </tr>
        </thead>
        <tbody>
          { clients.map( client => {
              return (
        <tr>
          <td>{ client.nombre } </td>
          <td>{ client.tipo_documento } </td>
          <td>{ client.documento }</td>
          <td>{ client.genero }</td>
          </tr>
            );
          })}
        
        </tbody>
      </table>
    </div>
  );
}

export default App;