import React from 'react';
import { IndexLink, Link } from 'react-router';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isNavOpen: false,
    };
  }

  render() {
    return (
      <header>
        <nav className="container navbar navbar-expand-lg navbar-light justify-content-between">
          <a className="navbar-brand" href="#">
            EĞİTİM BUDUR
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" activeClassName="active" className="nav-link">
                Anasayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/hakkimizda" activeClassName="active" className="nav-link">
                Hakkımzıda
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/iletisim" activeClassName="active" className="nav-link">
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
