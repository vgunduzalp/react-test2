import React from 'react';
import DuckImage from '../assets/Duck.jpg';

export const HomeView = () => (
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
    </form>

    <p>
      Henüz üye olmadınız mı? <br />
      Ücretsiz kayıt olmak için{' '}
      <b>
        <u />
      </b>
    </p>
  </div>
);

export default HomeView;
