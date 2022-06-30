// =======================================-------PAGE-[SCREEN PRODUCTS]------=============================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import Header from '../Componentes/Header';
import './ScreenProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faTrashCan, faPen, faPrint } from '@fortawesome/free-solid-svg-icons'
// import PropTypes from 'prop-types';
// import FormExpenses from '../Components/FormExpenses';

class ScreenSales extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE-------------==========
  // =============================================================

  // 1- Constructor and Super;
  constructor() {
    console.log('[SCREEN-SALES] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' functions:
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    
    // 3- create initial-state-component {Object} :
    this.state = {
      sales: [],
      date: '',
      codVenda: '',
      codProduto: '',
      quantidade: '',
      method: '',
      valorVenda: '',
      statusBtn: true,
    };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[SCREEN-SALES] - 3.ComponentDidMount');
    console.log('------------');
    
  }

  // =============================================================
  // ==========---------Handlers Functions SCOPE--------==========
  // =============================================================
  // =====------FUNCTION------=====
  // describe function: this function...
  handleOnChange(event) {
    console.log('handleOnchange');
    console.log('-------------------');

    const { target } = event;
    const { value } = target;

    this.setState({
      [target.name]: value,
    }, () => {
      this.handleValidateBtnDisable();
    });
  }

  // =====------FUNCTION------=====
  // describe function: this function...
  handleClick() {
    console.log('handleClick');
    console.logV('----------------');
    const { date, codVenda, codProduto, quantidade, valorCompra, valorVenda } = this.state;

    const sales = {
      date,
      codVenda,
      codProduto,
      quantidade,
      method: '',
      valorVenda,
    }

    this.setState((prevState) => ({
      products: [...prevState.sales, sales]
    }), () => {
      this.setState({
        date: '',
        codVenda: '',
        codProduto: '',
        quantidade: '',
        method: '',
        valorVenda: '',
        statusBtn: true,
      })
    });
  }

  // =====------FUNCTION------=====
  // describe function: this function...
  handleValidateBtnDisable() {
    console.log('handleBtnDisable');
    console.log('------------');
    const { date, codVenda, codProduto, quantidade, method, valorVenda } = this.state;

    const MIN_LENGHT = 1;
   
    if (
        date.length >= MIN_LENGHT
        && codVenda.length >= MIN_LENGHT
        && codProduto.length >= MIN_LENGHT
        && quantidade.length >= MIN_LENGHT
        && method.length >= MIN_LENGHT
        && valorVenda.length >= MIN_LENGHT
      ) {
        this.setState({ statusBtn: false });
      } else {
        this.setState({ statusBtn: true });
    }
  }

  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================
  render() {
    console.log('[SCREEN-SALES] - 2. Render');
    console.log('-------------');

    // ====Desctructing Objects=====
    const { sales, date, codVenda, codProduto, quantidade, method, valorVenda, statusBtn } = this.state;
    // console.log(sales);

    return (
      <div className="container-screen-products">
        <div className="container-header-home">
          <Header />    
        </div>
        <h1 className="main-title-products">Tela de Cadastro de Vendas</h1>
        <div className="container-form">
          <div className="block-form">
            <form className="main-form">
              {/* >>>>> component: DATA VENDA <<<<< */}
              <label htmlFor="date" className="main-label">
                data:
                
                <input
                  className="main-input"
                  name="date"
                  type="date"
                  placeholder="data venda"
                  value={ date }
                  onChange={ this.handleOnChange }
                />
              </label>

              {/* >>>>> component: INPUT-CODIGO-VENDA <<<<< */}
              <label htmlFor="codVenda" className="main-label">
                codigo-venda:
                
                <input
                  className="main-input"
                  name="codVenda"
                  type="number"
                  placeholder="codigo venda"
                  value={ codVenda }
                  onChange={ this.handleOnChange }
                />
              </label>
              
              {/* >>>>> component: INPUT-COD-PRODUTO <<<<< */}
              <label htmlFor="codProduto" className="main-label">
                Codigo Produto:
                
                <input
                  className="main-input"
                  name="codProduto"
                  type="number"
                  placeholder="codigo produto"
                  value={ codProduto }
                  onChange={ this.handleOnChange }
                />
              </label>
              
              { /* >>>>> component: INPUT QUANTIDADE <<<<< */ }
              <label htmlFor="quantidade" className="main-label">
                QTDE:
                
                <input
                  className="main-input"
                  name="quantidade"
                  type="number"
                  placeholder="quantidade"
                  value={ quantidade }
                  onChange={ this.handleOnChange }
                />
              </label>

              { /* >>>>> component: SELECT-METHOD <<<<< */ }
              <label htmlFor="method" className="main-label">
                Método/Pgto:

                <select
                  className="main-input"
                  name="method"
                  onChange={ this.handleOnChange }
                  value={ method }
                >
                  <option value="Dinheiro" >Dinheiro</option>
                  <option value="Cartão de crédito">Cartão de crédito</option>
                  <option value="Cartão de débito">Cartão de débito</option>
                </select>
              </label>

              { /* >>>>> component: INPUT VALOR VENDA <<<<< */ }
              <label htmlFor="valorVenda" className="main-label">
                Valor de Venda:
                
                <input
                  className="main-input"
                  name="valorVenda"
                  type="number"
                  placeholder="R$ Venda"
                  value={ valorVenda }
                  onChange={ this.handleOnChange }
                />
              </label>
              
              { /* >>>>> component: BUTTON ADD+ <<<<< */ }
              <button
                type="button"
                className="main-buttonAdd"
                disabled={ statusBtn }
                onClick={ this.handleClick }
              >
                <FontAwesomeIcon
                  icon={faSquarePlus}
                  className="icon-button"  
                />  
              </button>
              
              { /* >>>>> component: BUTTON PRINT+ <<<<< */ }
              <button
                type="button"
                className="main-button-print"
                disabled={ false }
                // onClick={ }
              >
                <FontAwesomeIcon
                  icon={faPrint}
                  className="icon-button-print"  
                />  
              </button>
            </form>
          </div>
          <div className="block-values">
            Total Venda | <span className="title-values">R$ : X.XX</span> 
          </div>
          <div className="block-filter">
            <label htmlFor="date" className="main-label">
              Selecione o periodo :
                <input
                  className="main-input"
                  name="date"
                  type="date"
                  placeholder="data venda"
                  value={ date }
                  onChange={ this.handleOnChange }
                />
              </label>
              <label htmlFor="date" className="main-label">
              Até:
                <input
                  className="main-input"
                  name="date"
                  type="date"
                  placeholder="data venda"
                  value={ date }
                  onChange={ this.handleOnChange }
                />
              </label>
          </div>
        </div>
        <div className="container-table-products">
          <table className="main-table">
            <tr className="main-tr">
              <th className="celulasColumnsValues">CODIGO PRODUTO</th>
              <th className="celulasColumnsText">NOME PRODUTO</th>
              <th className="celulasColumnsValues">QTDE</th>
              <th className="celulasColumnsValues">Valor Compra R$</th>
              <th className="celulasColumnsValues">Valor Venda R$</th>
            </tr>
            { (!sales) ?
            <></>
            :
            sales.map((sale, index) => (
              <tr key={ index } className="main-td">
                <td className="celulasRow">{ sale.codigo }</td>
                <td className="celulasRow">{ sale.nomeProduto }</td>
                <td className="celulasRow">{ sale.quantidade }</td>
                <td className="celulasRow">{ sale.valorCompra }</td>
                <td className="celulasRow">{ sale.valorVenda }</td>
                <td className="celulasRowDelEditsale">
                  <button
                    type="button"
                    className="main-buttonDelete"
                    data-testid="delete-btn"
                    disabled={ false }
                    // onClick={ () => testingDelete(expense.id) }
                  >
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="icon-button-delete"  
                    />
                  </button>
                  <button
                    type="button"
                    className="main-buttonDelete"
                    data-testid="delete-btn"
                    disabled={ false }
                    // onClick={ () => testingDelete(expense.id) }
                  >
                    <FontAwesomeIcon
                      icon={faPen}
                      className="icon-button-edit"  
                    />
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

ScreenSales.propTypes = {
  /* codigo: PropTypes.string.isRequired,
  nomeProduto: PropTypes.func.isRequired,
  quantidade: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  valorCompra: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  valorVenda: PropTypes.func.isRequired, */
};

export default ScreenSales;
