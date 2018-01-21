import React, { Component } from 'react';
import us from './us.svg';
import es from './es.svg';
import fr from './fr.svg';
class Menu extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" >Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item spacing">
            <a className="nav-link text-white">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item spacing">
            <a className="nav-link text-white " href="#">What we do</a>
          </li>
          <li className="nav-item spacing">
            <a className="nav-link text-white " href="#">FAQ</a>
          </li>
          <li className="nav-item dropdown spacing">
            <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={us} height="15px" width="25px"/>  Language
            </a>
            <div className="dropdown-menu drpLanguage" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item text-white"><img src={fr} height="15px" width="25px"/> French</a>
              <a className="dropdown-item text-white"><img src={es} height="15px" width="25px"/> Spanish</a>

            </div>
          </li>
        </ul>
      </div>
    </nav>

      </div>

    );
  }
}

export default Menu;
