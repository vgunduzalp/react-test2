import React from 'react';

class LoginView extends React.Component {
  render() {
    const { onViewChange } = this.props;

    return (
      <div>
        <form className="form-inline">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="E-Posta" />
          </div>
          <div className="form-group mx-sm-3">
            <input type="password" className="form-control" placeholder="Şifre" />
          </div>
          <button type="button" className="btn btn-primary">
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

export default LoginView;
