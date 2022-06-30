// =======================================----------PAGE [LOGIN]---------=================================================
// -----------------------------------------------------------------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import BtnLogin from '../Componentes/BtnLogin';
import Loading from '../Componentes/Loading';
import { Link } from 'react-router-dom';
import './Login.css';
import Logo from '../Imagens/Logo.svg';

class Login extends React.Component {
  // =============================================================
  // ==========----------CONSTRUCTOR SCOPE--------------==========
  // =============================================================

  // 1- Constructor and Super;
  constructor() {
    console.log('[LOGIN] - 1.Constructor');
    console.log('-----------');
    super();
    // 2- 'binding' functions:
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleValidateBtnDisable = this.handleValidateBtnDisable.bind(this);

    // 3- create initial-state-component {Object} :
    this.state = {
      email: '',
      password: '',
      statusBtn: true,
      loading: false,
    };
  }

  // =============================================================
  // ==========--------componentDidMount SCOPE----------==========
  // =============================================================
  componentDidMount() {
    console.log('[LOGIN] - 3.ComponentDidMount');
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

    const { email, password } = this.state;
    const MIN_LENGHT_EMAIL = 1;
    const MIN_LENGHT_PASSWORD = 1;

    if (
      email.length >= MIN_LENGHT_EMAIL
      && password.length >= MIN_LENGHT_PASSWORD
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
    console.log('[LOGIN] - 2. Render');
    console.log('-------------');

    // ====Desctructing Objects=====
    const { email, statusBtn, loading } = this.state;

    return (
      <div className="main-div">
        { loading ? (
          <Loading />
        ) : (
          <div className="main-containerLogin">
            <form className="main-formLogin">
              <div className="main-containerImg">
                <img src={ Logo } alt="logo icon" className="main-image" />
              </div>
              <h2 className="main-title">Login</h2>

              {/* componente 1 - input username */}
              <label htmlFor="email" className="main-label">
                <input
                  className="main-input-login"
                  type="text"
                  name="email"
                  placeholder="digite o seu usuario"
                  onChange={ this.handleOnChange }
                />
              </label>

              {/* componente 2 - input password */}
              <label htmlFor="password" className="main-label">
                <input
                  className="main-input-login"
                  type="password"
                  name="password"
                  placeholder="digite sua senha"
                  onChange={ this.handleOnChange }
                />
              </label>

              {/* componente 2 - btn Login */}
              <BtnLogin
                statusBtn={ statusBtn }
                onClickButton={ () => this.handleClick(email) }
              />

              {/* CREATE-PROFILE */}
              <span className="main-span">
                <p className="title-txt">ainda não é cadastrado?</p>
                <Link
                  to="/cadastroFunc"
                >
                  <p className="link">cadastrar-se</p>
                </Link>
              </span>
            </form>
          </div>
        )}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};

export default Login;
