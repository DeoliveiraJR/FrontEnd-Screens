// =====================================--------PROJETO APP ESTOQUE------=================================================
// -----------------------------------------------------------------------------------------------------------------------
import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import CadastroFunc from "./Pages/CadastroFunc";
import ScreenProduct from "./Pages/ScreenProduct";
import ScreenSales from "./Pages/ScreenSales";
import ScreenProviders from "./Pages/ScreenProviders";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/cadastroFunc" component={CadastroFunc} />
          <Route path="/screenProduct" component={ScreenProduct} />
          <Route path="/screenSales" component={ScreenSales} />
          <Route path="/screenProviders" component={ScreenProviders} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

// -------------------------------------------------------------------------------------------------------------------------------
// =================================================---------CHECKLIST----------==================================================
// -------------------------------------------------------------------------------------------------------------------------------

// =================================================----------SCREENS-----------==================================================
// -------------------------------------------------------------------------------------------------------------------------------

/* 
  [ X ] tela de login:
    X Código de usuário
    X Senha.

  [ X ] tela Home:
    X Cards das telas

  [ X ] Tela de cadastro de produto:
    X Código de produto
    X Nome do produto
    X Quantidade
    X Valor de Compra
    X Valor de Venda.

  [ X ] Tela de cadastro de funcionários:
    X Código do funcionário
    X Nome
    X Cargo
    X Email
    X Senha

  [ X ] Tela de cadastro de vendas:
    X Código de venda
    X Código do produto
    X Data da venda
    X  Quantidade
    X Valor Venda
    X Tipo de Pagamento.
    X Código de relatório de vendas diárias
    X Código de lucro diário.
    X Código de relatório de vendas diárias
    X Código de lucro diário.
  */
