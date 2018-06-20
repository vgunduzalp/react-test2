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

    const model = {
      email: this.state.email,
      password: this.state.password,
    };

    Http.post('auth/sign-up', model).then(res => {
      console.log(res);
    });
  }

  render() {
    const { onViewChange } = this.props;

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
