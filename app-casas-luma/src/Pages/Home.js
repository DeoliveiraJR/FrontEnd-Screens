// Modelo default de Template para criação de componentes:
import React from "react";
import Header from "../Componentes/Header";
import "./Home.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import propTypes from "prop-types";
// import CardList from '../Componentes/CardList'
// import dataCategories from '../Helpers/dataCategories'

class Home extends React.Component {
  // =============================================================
  // ==========---------BLOCO DO CONSTRUCTOR------------==========
  // =============================================================

  // 1- Constructor e Super;
  constructor() {
    console.log("[HOME] - 1.Constructor");
    console.log("-----------");
    super();
    // 2- 'binding' functions:
    // this.handleFunction = this.handleFunction.bind(this);

    // 3- create State {Objeto} :
    this.state = {
      // categories: '',
    };
  }

  // =============================================================
  // ==========--------BLOCO componentDidMount---------==========
  // =============================================================
  componentDidMount() {
    console.log("[HOME] - 3.ComponentDidMount");
    console.log("------------");

    this.setState({
      // categories: dataCategories
    });
  }

  // =============================================================
  // ==========--------BLOCO Handlers Functions---------==========
  // =============================================================

  // ====----FUNCTION ----====
  // describe function:
  handleFunction() {
    console.log("handleFunction [Part-1]");
    console.log("---------------");
  }

  // =============================================================
  // ==========---------BLOCO de RENDERIZAÇÃO ()--------==========
  // =============================================================
  render() {
    console.log("[HOME] - 2.Render");
    console.log("---------------");

    // ====Desctructing Objects=====
    const { history } = this.props;
    // const { categories } = this.state;
    // console.log(categories)

    return (
      <div className="container-home">
        <div className="container-header-home">
          <Header />
        </div>

        <div className="container-nav-banner">
          {/* CONTAINER LEFT -CARDS */}
          <div className="container-left">
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_uowplbpq.json"
              className="lottie-figure"
            />
          </div>

          {/* CONTAINER RIGTH -CARDS */}
          <div className="container-right">
            {/* FIGURE -CARD 1 - PRODUCTS*/}
            <figure className="main-figure">
              <div className="container-animation-home">
                <Player
                  autoplay
                  loop
                  src="https://assets5.lottiefiles.com/packages/lf20_i9tvVI.json"
                  className="card-lottie"
                />
              </div>
              <div className="container-caption">
                <button
                  disabled={false}
                  type="button"
                  className="btn-nav"
                  onClick={() => history.push("/screenProduct")}
                >
                  <FontAwesomeIcon icon={faSquarePlus} className="icon-card" />
                  <figcaption className="main-caption">PRODUTOS</figcaption>
                </button>
              </div>
              <span className="main-descript">Cadastro de produtos</span>
            </figure>

            {/* FIGURE -CARD 2 - SALES */}
            <figure className="main-figure">
              <div className="container-animation-home">
                <Player
                  autoplay
                  loop
                  src="https://assets4.lottiefiles.com/packages/lf20_zvkr2yw6.json"
                  className="card-lottie"
                />
              </div>
              <div className="container-caption">
                <button
                  disabled={false}
                  type="button"
                  className="btn-nav"
                  onClick={() => history.push("/screenSales")}
                >
                  <FontAwesomeIcon icon={faSquarePlus} className="icon-card" />
                  <figcaption className="main-caption">VENDAS</figcaption>
                </button>
              </div>
              <span className="main-descript">Cadastro de Vendas</span>
            </figure>

            {/* FIGURE -CARD 3 - CLIENTES */}
            <figure className="main-figure">
              <div className="container-animation-home">
                <Player
                  autoplay
                  loop
                  src="https://assets7.lottiefiles.com/packages/lf20_qwATcU.json"
                  className="card-lottie"
                />
              </div>
              <div className="container-caption">
                <button
                  disabled={false}
                  type="button"
                  className="btn-nav"
                  onClick={() => history.push("/screenProviders")}
                >
                  <FontAwesomeIcon icon={faSquarePlus} className="icon-card" />
                  <figcaption className="main-caption">FORNECEDORES</figcaption>
                </button>
              </div>
              <span className="main-descript">Cadastro de Fornecedor</span>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  history: propTypes.oneOfType([propTypes.object]).isRequired,
};

export default Home;
