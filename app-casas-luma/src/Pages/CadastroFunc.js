// =======================================----------PAGE [LOGIN]---------=================================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Componentes/Loading';
import './CadastroFunc.css';
import Logo from '../Imagens/Logo.svg';
import { Player } from '@lottiefiles/react-lottie-player';

class CadastroFunc extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE--------------==========
  // =============================================================

  // 1- Constructor and Super;
  constructor() {
    console.log('[CAD-FUNC] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' functions:
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleValidateBtnDisable = this.handleValidateBtnDisable.bind(this);
    this.handleOnChangeLogin = this.handleOnChangeLogin.bind(this);

    // 3- create initial-state-component {Object} :
    this.state = {
      login: '',
      passwordLogin: '',
      codigo: '',
      name: '',
      email: '',
      cargo: '',
      password: '',
      statusBtn: true,
      statusBtnLogin: true,
      loading: false,
    };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[CAD-FUNC] - 3.ComponentDidMount');
    console.log('------------');
  }

  // =============================================================
  // ==========---------Handlers Functions SCOPE--------==========
  // =============================================================
  // =====------FUNCTION------=====
  // describe function: this function receive an event onChange on input and setState:
  handleOnChange(event) {
    console.log('handleOnchange');
    console.log('---------------');

    const { target } = event;
    const { value } = target;

    this.setState({
      [target.name]: value,
    }, () => {
      this.handleValidateBtnDisable();
    });
  }

  // =====------FUNCTION------=====
  // describe function: this function receive an event onChange on input and setState:
  handleOnChangeLogin(event) {
    console.log('handleOnchange');
    console.log('---------------');

    const { target } = event;
    const { value } = target;

    this.setState({
      [target.name]: value,
    }, () => {
      
      const { login, passwordLogin } = this.state;
      const MIN_LENGHT= 1;

    if (
      login.length >= MIN_LENGHT
      && passwordLogin.length >= MIN_LENGHT
    ) {
      this.setState({ statusBtnLogin: false });
    } else {
      this.setState({ statusBtnLogin: true });
    }
    });
  }

  // ====----FUNCTION 2----====
  // describe function: this function receive an event onClick on btn-Login and setState:
  handleClick() {
    console.log('handleClick [Part-1]');
    console.log('--------------');
    const { history } = this.props;

    // redirect to page 'home';
    history.push('/home');
  }

  // ====----FUNCTION 3----====
  // describe function: this function validate logic to disable 'btn-Login' and change state if necessary:
  handleValidateBtnDisable() {
    console.log('handleBtnDisable');
    console.log('------------');

    const { codigo, name, email, cargo, password } = this.state;
    const MIN_LENGHT= 1;

    if (
      codigo.length >= MIN_LENGHT
      && cargo.length >= MIN_LENGHT
      && name.length >= MIN_LENGHT
      && email.length >= MIN_LENGHT
      && password.length >= MIN_LENGHT
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
    console.log('[CAD-FUNC] - 2. Render');
    console.log('-------------');

    // ====Desctructing Objects=====
    const { cargo ,statusBtn, statusBtnLogin, loading } = this.state;

    return (
      <div className="main-divRegister">
        { loading ? (
          <Loading />
        ) : (
          /* COMPONENTE HEADER - REGISTER */
          <div className="main-containerHeader">
            <header className="main-headerRegister">
              {/* CONTAINER LOGO */}
              <div className="container-logo-header">
                <img src={ Logo } alt="logo icon" className="main-image-header" />
              </div>
              
              {/* CONTAINER INPUTS */}
              <div className="container-login-header">
                <label htmlFor="login" className="main-label">
                  <input
                    className="main-input-header"
                    type="text"
                    name="login"
                    placeholder="email"
                    onChange={ this.handleOnChangeLogin }
                  />
                </label>
                <label htmlFor="passwordLogin" className="main-label">
                  <input
                    className="main-input-header"
                    type="password"
                    name="passwordLogin"
                    placeholder="senha"
                    onChange={ this.handleOnChangeLogin }
                    />
                </label>
                <button
                  className="main-buttonLogin-header"
                  type="button"
                  disabled={ statusBtnLogin }
                  onClick={ this.handleClick }
                >
                  Entrar
                </button>
              </div>
            </header>
            
            {/* CONTAINER BOTTOM */}
            <div class="container-bottom">
            
              {/* CONTAINER LEFT - FORMS */}
              <div className="main-container-form">
                <form className="main-formRegister">
                  <h2 className="main-titleRegister">Cadastrar Funcionario</h2>

                  
                  {/* INPUT-BLOCK CODIGO / NAME */}
                  <div className="main-input-blockName">
                    <label htmlFor="codigo" className="main-label">
                      <input
                        className="input-code"
                        type="text"
                        name="codigo"
                        placeholder="codigo-func"
                        onChange={ this.handleOnChange }
                        />
                    </label>

                    {/* componente 1 - input username */}
                    <label htmlFor="name" className="main-label">
                      <input
                        className="input-name"
                        type="text"
                        name="name"
                        placeholder="digite o seu nome completo"
                        onChange={ this.handleOnChange }
                      />
                    </label>
                  </div>

                  {/* componente 1 - input username */}
                  <label htmlFor="cargo">
                    <select
                      name="cargo"
                      placeholder="selecione um cargo"
                      className="main-input-select"  
                      value={ cargo }
                      onChange={ this.handleOnChange }
                      >
                        Selecione um cargo:
                      <option value="Cargo 1">Cargo 1</option>
                      <option value="Cargo 2">Cargo 2</option>
                      <option value="Cargo 3">Cargo 3</option>
                    </select>
                  </label>
                    
                  {/* componente 1 - input username */}
                  <label htmlFor="email" className="main-label">
                  </label>
                    <input
                      className="main-input-register"
                      type="text"
                      name="email"
                      placeholder="digite um email válido"
                      onChange={ this.handleOnChange }
                    />

                  {/* componente 2 - input password */}
                  <label htmlFor="password" className="main-label">
                  </label>
                    <input
                      className="main-input-register"
                      type="password"
                      name="password"
                      placeholder="cadastre sua senha"
                      onChange={ this.handleOnChange }
                    />

                  {/* componente 2 - btn Login */}
                  <button
                    className="main-buttonRegister"
                    type="button"
                    disabled={ statusBtn }
                    onClick={ this.handleClick }
                  >
                    Cadastrar
                  </button>

                </form>
              </div>

              {/* CONTAINER RIGHT - ANIMATION */}
              <div className="container-animation">
                <Player
                  autoplay
                  loop
                  src="https://assets6.lottiefiles.com/packages/lf20_jvt4bdg7.json"
                  className="lottie"
                />          
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

CadastroFunc.propTypes = {
  history: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};

export default CadastroFunc;
