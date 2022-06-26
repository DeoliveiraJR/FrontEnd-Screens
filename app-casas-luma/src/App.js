// =====================================--------PROJETO APP ESTOQUE------=================================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import CadastroFunc from './Pages/CadastroFunc'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/home" component={ Home } />
          <Route path="/cadastroFunc" component={ CadastroFunc } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

/* 
// -------------------------------------------------------------------------------------------------------------------------------
// =================================================---------CHECKLIST----------==================================================
// -------------------------------------------------------------------------------------------------------------------------------

// =================================================----------SCREENS-----------==================================================
// -------------------------------------------------------------------------------------------------------------------------------

  [ ] tela de login:
    - Código de usuário
    - Senha.

  [ ] tela Home:
    - Links das telas

  [ ] Tela de cadastro de produto:
    - Código de produto
    - Nome do produto
    - Quantidade
    - Valor de Compra
    - Valor de Venda.

  [ ] Tela de cadastro de funcionários:
    - Código do funcionário
    - Nome
    - Cargo
    - Email
    - Senha
    - Salário.

  [ ] Tela de cadastro de vendas:
    - Código de venda
    - Código do produto
    - Data da venda
    - Tipo de Pagamento.

  [ ] Tela de gerar relatório de itens em falta:
    - Código do relatório de produto em falta
    - Código do produto
    - Quantidade vendida do produto
    - Quantidade em estoque do produto.

  [ ] Tela de relatórios de vendas diarias:
    - Código de relatório de vendas diárias
    - Código de lucro diário.

  [ ] Tela de relatório de vendas mensais:
    - Código de relatório de vendas mensais
    - Código de lucro mensal.

  [ ] Tela funcionalidade associar venda a usuário:
    - Código de usuário
    - data da venda
    - valor da venda
    - produtos vendidos. 

// =================================================----------FIELDS-----------==================================================
// -------------------------------------------------------------------------------------------------------------------------------

  [ ] Campo Gerar relação dos preços dos produtos: Nome do produto, Código do produto, Preço.
  [ ] Campo Gerar relatório dos gastos 
  [ ] Campo Gerar relatório dos lucros

*/