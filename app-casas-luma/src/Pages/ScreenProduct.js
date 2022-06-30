// =======================================-------PAGE-[SCREEN PRODUCTS]------=============================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import Header from '../Componentes/Header';
import './ScreenProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faTrashCan, faPen, faPrint } from '@fortawesome/free-solid-svg-icons'
// import PropTypes from 'prop-types';
// import FormExpenses from '../Components/FormExpenses';

class ScreenProduct extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE-------------==========
  // =============================================================

  // 1- Constructor and Super;
  constructor() {
    console.log('[SCREEN-PRODUCT] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' functions:
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    
    // 3- create initial-state-component {Object} :
    this.state = {
      products: [],
      codigo: '',
      nomeProduto: '',
      quantidade: '',
      valorCompra: '',
      valorVenda: '',
      statusBtn: true,
    };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[SCREEN-PRODUCT] - 3.ComponentDidMount');
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
    console.log('----------------');
    const { codigo, nomeProduto, quantidade, valorCompra, valorVenda } = this.state;

    const products = {
      codigo,
      nomeProduto,
      quantidade,
      valorCompra,
      valorVenda,
    }

    this.setState((prevState) => ({
      products: [...prevState.products, products]
    }), () => {
      this.setState({
        codigo: '',
        nomeProduto: '',
        quantidade: '',
        valorCompra: '',
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
    const { codigo, nomeProduto, quantidade, valorCompra, valorVenda } = this.state;

    const MIN_LENGHT = 1;
   
    if (
        codigo.length >= MIN_LENGHT
        && nomeProduto.length >= MIN_LENGHT
        && quantidade.length >= MIN_LENGHT
        && valorCompra.length >= MIN_LENGHT
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
    console.log('[SCREEN-PRODUCT] - 2. Render');
    console.log('-------------');

    // ====Desctructing Objects=====
    const { products, codigo, nomeProduto, quantidade, valorCompra, valorVenda, statusBtn } = this.state;
    console.log(products);

    return (
      <div className="container-screen-products">
        <div className="container-header-home">
          <Header />    
        </div>
        <h1 className="main-title-products">Tela de Cadastro de Produtos</h1>
        <div className="container-form">
          <div className="block-form">
            <form className="main-form">
              <label htmlFor="value" className="main-label">
                Valor:
                
                {/* >>>>> component: INPUT-CODIGO <<<<< */}
                <input
                  className="main-input"
                  name="codigo"
                  type="number"
                  placeholder="codigo produto"
                  value={ codigo }
                  onChange={ this.handleOnChange }
                />
              </label>
              
              {/* >>>>> component: INPUT-NOME-PRODUTO <<<<< */}
              <label htmlFor="nomeProduto" className="main-label">
                Nome:
                
                <input
                  className="main-input-text"
                  name="nomeProduto"
                  type="text"
                  placeholder="nome doproduto"
                  value={ nomeProduto }
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

              { /* >>>>> component: INPUT VALOR COMPRA <<<<< */ }
              <label htmlFor="valorCompra" className="main-label">
                Valor de Compra:
                
                <input
                  className="main-input"
                  name="valorCompra"
                  type="number"
                  placeholder="R$ Compra"
                  value={ valorCompra }
                  onChange={ this.handleOnChange }
                />
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
            Total Compra | <span className="title-values">R$ : X.XX</span> | Total Venda | <span className="title-values">R$ : X.XX</span> 
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
            { (!products) ?
            <></>
            :
            products.map((product, index) => (
              <tr key={ index } className="main-td">
                <td className="celulasRow">{ product.codigo }</td>
                <td className="celulasRow">{ product.nomeProduto }</td>
                <td className="celulasRow">{ product.quantidade }</td>
                <td className="celulasRow">{ product.valorCompra }</td>
                <td className="celulasRow">{ product.valorVenda }</td>
                <td className="celulasRowDelEdit">
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

ScreenProduct.propTypes = {
  /* codigo: PropTypes.string.isRequired,
  nomeProduto: PropTypes.func.isRequired,
  quantidade: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  valorCompra: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  valorVenda: PropTypes.func.isRequired, */
};

export default ScreenProduct;
