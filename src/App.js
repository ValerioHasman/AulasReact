import { useState } from 'react'
import SeuNome from './components/SeuNome'
import './App.css';
import Saudacao from './components/Saudacao';

function App() {

  const [nome, setNome] = useState()
  return (
    <div className="App">
      <h1>Renderização de OutraLista</h1>
      <SeuNome setNome={setNome}/>
      <p>{nome}</p>
      <Saudacao nome={nome} />

    </div>
  );
}

export default App;
