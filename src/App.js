import './App.css';
import HelloWord from './components/HelloWord'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'


function App() {
  const nome = "Maria"
  return (
    <div className="App">
      <h1>Testando o css</h1>
      <Frase/>
      <Frase/>
      <Pessoa foto="https://www.colorironline.com/images/imgcolor/desenho-fernando-pessoa-3-para-colorir.jpg"
              nome="José"
              idade="55"
              profissao="Carpinteiro"
      />
      <List />
    </div>
  );
}

export default App;
