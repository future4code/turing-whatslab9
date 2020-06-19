import React from 'react';
import './App.css';
import styled from 'styled-components'

const CampoMensagem = styled.div`
height: 97%;
display: flex;
flex-direction: column-reverse;
padding-left: 10px;
`

const CampoFuncionalidades = styled.div`
width: 100%;
`
const CampoInput = styled.input`
margin:0;
padding: 0;

`
const CampoBotao = styled.button`
margin:0;
padding: 0;

`
class App extends React.Component {
  state = {
    mensagens: [
     
    ],
    valorInputUsuario: "",
    valorInputTexto: ""
  };

  

  adicionaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      texto: this.state.valorInputTexto
    }
    const novasMensagens = [...this.state.mensagens, novaMensagem]
    this.setState({mensagens: novasMensagens});
    this.setState({valorInputTexto: ""})
  }

  onChangeInputUsuario = event => {
    this.setState({ valorInputUsuario: event.target.value});
  }
  onChangeInputTexto = event => {
    this.setState({ valorInputTexto: event.target.value });
  }

  render(){
    const listaDeMensagens = this.state.mensagens.map(mensagem => {
      return (
      <div>
        {mensagem.usuario}: {mensagem.texto}
      </div>
      )
    })

    return (
      <div className="AppTotal">
        <div className="App">
        <CampoMensagem>
          {listaDeMensagens}
        </CampoMensagem>
          <CampoFuncionalidades>
            <CampoInput 
            placeholder="Usuário" 
            value={this.state.valorInputUsuario} 
            onChange={this.onChangeInputUsuario}
            />
            <CampoInput 
            placeholder="Mensagem"
            value= {this.state.valorInputTexto} 
            onChange= {this.onChangeInputTexto}
            />
            <button onClick={this.adicionaMensagem}>Enviar</button>
          </CampoFuncionalidades>
        </div>
      </div>
    );
  }
}

export default App;
