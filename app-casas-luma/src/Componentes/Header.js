// ==================================----------COMPONENT [Header]-----------==============================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import Logo from '../Imagens/Logo-Header.svg';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNavicon } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom';

class Header extends React.Component {
  // =============================================================
  // ==========-------------RENDER SCOPE ()------------===========
  // =============================================================

  // 1- Constructor e Super;
  constructor() {
    console.log('[HEADER] - 1.Constructor');
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
    console.log('[HEADER] - 3.ComponentDidMount');
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
    console.log('[HEADER] - 2.Render');
    console.log('------------');

    // ====Desctructing Objects=====
    // const { loading } = this.state;

    return (
      <header className="main-header-home">
        
        {/* CONTAINER LOGO */}
        <div className="container-logo-header-home">
          <FontAwesomeIcon
            icon={faNavicon}
            className="icon-header"  
          />  
        </div>

        {/* CONTAINER TITLE */}
        <div className="container-title-header-home">
          <img
            src={ Logo }
            alt="logo icon"
            className="main-logo"
          />
          <h1 className="main-title-header-home">SISTEMA DE CONTROLE DE ESTOQUE</h1>
        </div>

        {/* CONTAINER LOGOUT/NAV */}
        <div className="container-nav-header-home">
          <FontAwesomeIcon
            icon={faSignOutAlt}
            className="icon-header"  
          /> 
        </div>        
    </header>
    );
  }
}

export default Header;

// {/* HOME */}
// <div className="box-link-home">
//  <Link
//  data-testid="link-to-home"
//  to="/"
// >
//  Home
// </Link>
// </div>
