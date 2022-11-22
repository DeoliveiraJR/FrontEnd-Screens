// =======================================-------PAGE-[SCREEN Providers]------=============================================
// -----------------------------------------------------------------------------------------------------------------------
import React from "react";
import Header from "../Componentes/Header";
import "./ScreenProviders.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faTrashCan,
  faPen,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
// import PropTypes from 'prop-types';
// import FormExpenses from '../Components/FormExpenses';

class ScreenProviders extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE-------------==========
  // =============================================================

  // 1- Constructor and Super;
  constructor() {
    console.log("[SCREEN-PROVIDERS] - 1.Constructor");
    console.log("-----------");
    super();
    // 2- 'binding' functions:
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    // 3- create initial-state-component {Object} :
    this.state = {
      providers: [],
      date: "",
      nomeFornecedor: "",
      nomeProduto: "",
      CNPJ: "",
      valorCompra: "",
      statusBtn: true,
    };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log("[SCREEN-PROVIDERS] - 3.ComponentDidMount");
    console.log("------------");
  }

  // =============================================================
  // ==========---------Handlers Functions SCOPE--------==========
  // =============================================================
  // =====------FUNCTION------=====
  // describe function: this function...
  handleOnChange(event) {
    console.log("handleOnchange");
    console.log("-------------------");

    const { target } = event;
    const { value } = target;

    this.setState(
      {
        [target.name]: value,
      },
      () => {
        this.handleValidateBtnDisable();
      }
    );
  }

  // =====------FUNCTION------=====
  // describe function: this function...
  handleClick() {
    console.log("handleClick");
    console.log("----------------");
    const { date, nomeFornecedor, nomeProduto, CNPJ, valorCompra } = this.state;

    const providers = {
      date,
      nomeFornecedor,
      nomeProduto,
      CNPJ,
      valorCompra,
    };

    this.setState(
      (prevState) => ({
        providers: [...prevState.providers, providers],
      }),
      () => {
        this.setState({
          date: "",
          nomeFornecedor: "",
          nomeProduto: "",
          CNPJ: "",
          valorCompra: "",
          statusBtn: true,
        });
      }
    );
  }

  // =====------FUNCTION------=====
  // describe function: this function...
  handleValidateBtnDisable() {
    console.log("handleBtnDisable");
    console.log("------------");
    const { date, nomeFornecedor, nomeProduto, CNPJ, valorCompra } = this.state;

    const MIN_LENGHT = 1;

    if (
      date.length >= MIN_LENGHT &&
      nomeFornecedor.length >= MIN_LENGHT &&
      nomeProduto.length >= MIN_LENGHT &&
      CNPJ.length >= MIN_LENGHT &&
      valorCompra.length >= MIN_LENGHT
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
    console.log("[SCREEN-PROVIDERS] - 2. Render");
    console.log("-------------");

    // ====Desctructing Objects=====
    const {
      providers,
      date,
      nomeFornecedor,
      nomeProduto,
      CNPJ,
      valorCompra,
      statusBtn,
    } = this.state;
    console.log(providers);

    return (
      <div className="container-screen-products">
        <div className="container-header-home">
          <Header />
        </div>
        <h1 className="main-title-products">
          Tela de Cadastro de Fornecedores
        </h1>
        <div className="container-form">
          <div className="block-form">
            <form className="main-form">
              {/* >>>>> component: DATA <<<<< */}
              <label htmlFor="date" className="main-label">
                data:
                <input
                  className="main-input"
                  name="date"
                  type="date"
                  placeholder="data"
                  value={date}
                  onChange={this.handleOnChange}
                />
              </label>

              {/* >>>>> component: INPUT-nomeFornecedor <<<<< */}
              <label htmlFor="nomeFornecedor" className="main-label">
                Fornecedor:
                <input
                  className="main-input-text"
                  name="nomeFornecedor"
                  type="text"
                  placeholder="fornecedor"
                  value={nomeFornecedor}
                  onChange={this.handleOnChange}
                />
              </label>

              {/* >>>>> component: INPUT-NOME-PRODUTO <<<<< */}
              <label htmlFor="nomeProduto" className="main-label">
                Produto:
                <input
                  className="main-input-text"
                  name="nomeProduto"
                  type="text"
                  placeholder="nome do produto"
                  value={nomeProduto}
                  onChange={this.handleOnChange}
                />
              </label>

              {/* >>>>> component: INPUT-CNPJ <<<<< */}
              <label htmlFor="CNPJ" className="main-label">
                CNPJ:
                <input
                  className="main-input"
                  name="CNPJ"
                  type="number"
                  min="0"
                  oninput="this.value = Math.abs(this.value)"
                  placeholder="CNPJ"
                  value={CNPJ}
                  onChange={this.handleOnChange}
                />
              </label>

              {/* >>>>> component: INPUT VALOR VENDA <<<<< */}
              <label htmlFor="valorCompra" className="main-label">
                Valor de Compra:
                <input
                  className="main-input"
                  name="valorCompra"
                  type="number"
                  min="0"
                  oninput="this.value = Math.abs(this.value)"
                  placeholder="R$ compra"
                  value={valorCompra}
                  onChange={this.handleOnChange}
                />
              </label>

              {/* >>>>> component: BUTTON ADD+ <<<<< */}
              <button
                type="button"
                className="main-buttonAdd"
                disabled={statusBtn}
                onClick={this.handleClick}
              >
                <FontAwesomeIcon icon={faSquarePlus} className="icon-button" />
              </button>

              {/* >>>>> component: BUTTON PRINT+ <<<<< */}
              <button
                type="button"
                className="main-button-print"
                disabled={false}
                // onClick={ }
              >
                <FontAwesomeIcon icon={faPrint} className="icon-button-print" />
              </button>
            </form>
          </div>
          <div className="block-values">
            Total Compra | <span className="title-values">R$ : X.XX</span>
          </div>

          <div className="container-table-products">
            <table className="main-table">
              <tr className="main-tr">
                <th className="celulasColumnsValues">DATA</th>
                <th className="celulasColumnsText">FORNECEDOR</th>
                <th className="celulasColumnsText">PRODUTO</th>
                <th className="celulasColumnsValues">CNPJ</th>
                <th className="celulasColumnsValues">VALOR COMPRA R$</th>
              </tr>
              {!providers ? (
                <></>
              ) : (
                providers.map((provider, index) => (
                  <tr key={index} className="main-td">
                    <td className="celulasRow">{provider.date}</td>
                    <td className="celulasRow">{provider.nomeFornecedor}</td>
                    <td className="celulasRow">{provider.nomeProduto}</td>
                    <td className="celulasRow">{provider.CNPJ}</td>
                    <td className="celulasRow">{provider.valorCompra}</td>
                    <td className="celulasRowDelEditsale">
                      <button
                        type="button"
                        className="main-buttonDelete"
                        data-testid="delete-btn"
                        disabled={false}
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
                        disabled={false}
                        // onClick={ () => testingDelete(expense.id) }
                      >
                        <FontAwesomeIcon
                          icon={faPen}
                          className="icon-button-edit"
                        />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

ScreenProviders.propTypes = {
  /* codigo: PropTypes.string.isRequired,
  nomeProduto: PropTypes.func.isRequired,
  quantidade: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  valorCompra: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  valorVenda: PropTypes.func.isRequired, */
};

export default ScreenProviders;
