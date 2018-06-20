import React from 'react';

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

  render() {
    const { onViewChange } = this.props;

    return (
      <div>
        <form className="form-inline">
          <div className="form-group">
            <input type="text" name="email" className="form-control" placeholder="E-Posta" />
          </div>
          <div className="form-group mx-sm-3">
            <input type="password" name="password" className="form-control" placeholder="Şifre" />
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
