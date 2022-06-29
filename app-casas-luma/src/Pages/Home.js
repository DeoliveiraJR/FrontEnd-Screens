// Modelo default de Template para criação de componentes:
import React from 'react';
import Header from '../Componentes/Header'
import './Home.css';
import { Player } from '@lottiefiles/react-lottie-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
// import CardList from '../Componentes/CardList'
// import propTypes from 'prop-types';
// import dataCategories from '../Helpers/dataCategories'

class Home extends React.Component {
  // =============================================================
  // ==========---------BLOCO DO CONSTRUCTOR------------==========
  // =============================================================
  
  // 1- Constructor e Super;
  constructor() {
    console.log('[HOME] - 1.Constructor');
    console.log('-----------');
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
  componentDidMount () {
    console.log('[HOME] - 3.ComponentDidMount');
    console.log('------------');
    
    this.setState({
      // categories: dataCategories
    })
  }

  // =============================================================
  // ==========--------BLOCO Handlers Functions---------==========
  // =============================================================

  // ====----FUNCTION ----====
  // describe function:
  handleFunction() {
    console.log('handleFunction [Part-1]');
    console.log('---------------');
  }

  // =============================================================
  // ==========---------BLOCO de RENDERIZAÇÃO ()--------==========
  // =============================================================
  render() {
    console.log('[HOME] - 2.Render');
    console.log('---------------');

    // ====Desctructing Objects=====
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
            
            {/* FIGURE -CARD 1 */}
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
                <FontAwesomeIcon
                  icon={faSquarePlus}
                  className="icon-card"  
                />  
                <figcaption className="main-caption">PRODUTOS</figcaption>
              </div>
              <span className="main-descript">Tela de cadastro de produtos</span>
            </figure>
            
            {/* FIGURE -CARD 2 */}
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
                <FontAwesomeIcon
                  icon={faSquarePlus}
                  className="icon-card"  
                />  
                <figcaption className="main-caption">VENDAS</figcaption>
              </div>
              <span className="main-descript">Tela de cadastro de Vendas</span>
            </figure>

            {/* FIGURE -CARD 3 */}
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
                <FontAwesomeIcon
                  icon={faSquarePlus}
                  className="icon-card"  
                />
                <figcaption className="main-caption">CLIENTES</figcaption>
              </div>
              <span className="main-descript">Tela de cadastro de Clientes</span>
            </figure>
          
          </div>
        </div>
      </div>
    );
  }
}

/*
TemplateComponent.propTypes = {
  props1: propTypes.string.isRequired,
  props1: propTypes.bool.isRequired,
  props1: propTypes.func.isRequired,
  props1: propTypes.func.isRequired,
};
 */

export default Home;
