import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefa: ""
    }
    this.adicionar = this.adicionar.bind(this);
  }

  adicionar() {
    
  }

  render() {
    return (
      <div className="App">
        <h2>Atividade-Somativa-DevOps</h2>
        <h3>Lista de atividades</h3>
        <input type="text" placeholder='Ex: nova atividade' name='listaTarefa'/>
        <button onClick={this.adicionar}>Inserir atividade</button>
        <div>
          <ul type="none">
            <li>Estudar Java</li>
            <li>Ir para o mercado</li>
            <li>Lavar o carro</li>
            <li>Estudar para a prova</li>
            <li>Arrumar a casa</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
