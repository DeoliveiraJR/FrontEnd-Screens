// Modelo default de Template para criação de componentes:
import React from 'react';
// import propTypes from 'prop-types';
import './Home.css';
import { Player } from '@lottiefiles/react-lottie-player';

class Home extends React.Component {
  // =============================================================
  // ==========---------BLOCO DO CONSTRUCTOR------------==========
  // =============================================================
  
  // 1- Constructor e Super;
  constructor() {
    console.log('[COMPONENT] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' functions:
    // this.handleFunction = this.handleFunction.bind(this);
    
    // 3- create State {Objeto} :
    /* this.state = {
      state1: '',
    }; */
  }

  // =============================================================
  // ==========--------BLOCO componentDidMount---------==========
  // =============================================================
  componentDidMount() {
    console.log('[COMPONENT] - 3.ComponentDidMount');
    console.log('------------');
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
    console.log('RENDER [COMPONENT]');
    console.log('---------------');

    // ====Desctructing Objects=====
    // const { state1 } = this.props;
    // const { state1 } = this.state;

    return (
      <div className="test-lottie">
        <Player
          autoplay
          loop
          src="https://assets6.lottiefiles.com/packages/lf20_jvt4bdg7.json"
          // style={{ height: '300px', width: '300px' }}
          className="test-lottie"
         />          
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
