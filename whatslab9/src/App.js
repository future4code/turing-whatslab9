import React from 'react';
import './App.css';
import styled from 'styled-components';

const CampoMensagem = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
`

const CampoFuncionalidades = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
padding-bottom: 10px;
`
const CampoInputUsuario = styled.input`
width: 20%;
height: 32px;
border-radius: 8px;
border: none;
padding-left: 15px;
`

const CampoInputTexto = styled.input`
width: 55%;
border-radius: 8px;
border: none;
padding-left: 15px;
`

const CampoBotao = styled.button`
width: 15%;
border-radius: 8px;
border: none;
font-weight: bold;
background-color: #FFF;
` 

const MensagemImpressa = styled.div`
padding: 10px;
margin: 15px;
border-radius: 20px;
background-color: #FFF;
width: 40%;
`

class App extends React.Component {
  state = {
    mensagens: [
     
    ],
    valorInputUsuario: "",
    valorInputTexto: "",
    valorIdMensagem:0
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

  enterMensagem = (event) => {
      if(event.key === "Enter"){
        this.adicionaMensagem()
      }
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
      <MensagemImpressa key={this.state.valorIdMensagem}>
        <strong>{mensagem.usuario}:</strong> {mensagem.texto}
      </MensagemImpressa>
      )
    })

    return (
      <div className="AppTotal">
        <div className="App">   
          <CampoFuncionalidades>
            <CampoInputUsuario 
            placeholder="Usuário" 
            value={this.state.valorInputUsuario} 
            onChange={this.onChangeInputUsuario}
            onKeyPress={this.enterMensagem}
            />
            <CampoInputTexto 
            placeholder="Mensagem"
            value= {this.state.valorInputTexto} 
            onChange= {this.onChangeInputTexto}
            onKeyPress={this.enterMensagem}
            />
            <CampoBotao onClick={this.adicionaMensagem}>Enviar</CampoBotao>
          </CampoFuncionalidades>
          <CampoMensagem>
            {listaDeMensagens}
          </CampoMensagem>
        </div>
      </div>
    );
  }
}

export default App;
