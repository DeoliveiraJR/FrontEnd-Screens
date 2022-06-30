// ==================================----------COMPONENT [Header]-----------==============================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import './CardList.css';
import propTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faNavicon } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom';

class CardList extends React.Component {
  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================

  // 1- Constructor e Super;
  constructor() {
    console.log('[CARDLIST] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' nas funções:
    // this.handleFetchGetUser = this.handleFetchGetUser.bind(this);

    // 3- create State inicial {Objeto} :
    this.state = {
      // loading: false
    };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[CARDLIST] - 3.ComponentDidMount');
    console.log('------------');
    
  }

  // =============================================================
  // ==========---------Handlers Functions SCOPE--------==========
  // =============================================================
  // ====----FUNCTION ----====
  // describe function:
  
  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================
  render() {
    console.log('[CARDLIST] - 2.Render');
    console.log('------------');

    // ====Desctructing Objects=====
    const { categoriesProps }= this.props;
    // console.log(categoriesProps);
    // console.log(lottieUrl);

    return (
      <div className="">
        <figure>
          <div className="container-animation">
            {/* <Player
              autoplay
              loop
              src={lottieUrl}
              className="lottie"
             />      */}     
          </div>
          <figcaption></figcaption>
          <span></span>
        </figure>
      </div>
    );
  }
}

CardList.propTypes = {
    categoriesProps: propTypes.object.isRequired,
};  

export default CardList;

// {/* HOME */}
// <div className="box-link-home">
//  <Link
//  data-testid="link-to-home"
//  to="/"
// >
//  Home
// </Link>
// </div>
