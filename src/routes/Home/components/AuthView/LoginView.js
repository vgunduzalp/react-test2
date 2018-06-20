import React from 'react';
import { connect } from 'react-redux';
import { userInit } from 'store/userReducer';
import * as Http from 'utils/http.helper';
import { browserHistory } from 'react-router';

class LoginView extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  emailChanged(e) {
    this.setState({
      email: e.target.value,
    });
  }

  passwordChanged(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onUserClick() {
    Http.post('auth/login', this.state).then(res => {
      if (res.status) {
        localStorage.setItem('userToken', res.token);
        this.props.userInit({ email: this.state.email });
        browserHistory.push('/app');
      } else {
        alert(res.message);
      }
    });
  }

  render() {
    const { onViewChange } = this.props;

    if (this.props.userData.name) {
      return <div>GİRİŞ YAPILMIŞ</div>;
    }

    return (
      <div>
        <form className="form-inline">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="E-Posta"
              value={this.state.email}
              onChange={this.emailChanged.bind(this)}
            />
          </div>
          <div className="form-group mx-sm-3">
            <input
              type="password"
              className="form-control"
              placeholder="Şifre"
              value={this.state.password}
              onChange={this.passwordChanged.bind(this)}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={this.onUserClick.bind(this)}>
            Giriş Yap
          </button>
          <a
            href="javascript:void(0);"
            onClick={e => {
              onViewChange(3);
            }}
          >
            Şifremi Unuttum!
          </a>
        </form>

        <p>
          Henüz üye olmadınız mı? <br />
          Ücretsiz kayıt olmak için{' '}
          <b>
            <u>
              <a
                style={{ fontSize: '18px' }}
                onClick={e => {
                  e.preventDefault();
                  onViewChange(2);
                }}
                href="javascript:void(0);"
              >
                tıklayınız.
              </a>
            </u>
          </b>
        </p>
      </div>
    );
  }
}

const matStateToProps = state => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userInit: user => dispatch(userInit(user)),
  };
};

export default connect(
  matStateToProps,
  mapDispatchToProps,
)(LoginView);
//export default LoginView;
