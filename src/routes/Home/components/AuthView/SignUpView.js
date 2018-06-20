import React from 'react';
import * as Http from 'utils/http.helper';

class SignUpView extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      hasError: false,
      errorMessage: '',
    };
  }

  onInputChanged(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSignUp(e) {
    e.preventDefault();

    if (this.state.email === '' || this.state.password === '') {
      this.setState({
        hasError: true,
        errorMessage: 'Lütfen tüm alanları doldurunuz.',
      });

      return;
    }

    const model = {
      email: this.state.email,
      password: this.state.password,
    };

    Http.post('auth/sign-up', model).then(res => {
      if (res.status === false) {
        this.setState({
          hasError: !res.status,
          errorMessage: 'Bu email adresi sistemde kayıtlı.',
        });
      }

      this.setState({
        hasError: !res.status,
      });
    });
  }

  renderError() {
    return (
      <div
        className="alert alert-danger"
        style={{ width: '516px', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}
      >
        {this.state.errorMessage}
      </div>
    );
  }

  render() {
    const { onViewChange } = this.props;

    const Error = this.renderError.bind(this);

    return (
      <div>
        <form className="form-inline" onSubmit={this.onSignUp.bind(this)}>
          <div className="form-group">
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="E-Posta"
              onChange={this.onInputChanged.bind(this)}
            />
          </div>
          <div className="form-group mx-sm-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Şifre"
              onChange={this.onInputChanged.bind(this)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Kayıt Ol!
          </button>
        </form>
        {this.state.hasError ? <Error /> : null}
        <p>
          Zaten üye misiniz? <br />
          O zaman giriş yapmak için{' '}
          <b>
            <u>
              <a
                style={{ fontSize: '18px' }}
                onClick={e => {
                  e.preventDefault();
                  onViewChange(1);
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

export default SignUpView;
