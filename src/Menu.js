import React, {Component} from 'react';
import us from './img/us.svg';
import fr from './img/fr.svg';
import es from './img/es.svg';
import lg from './img/lg.png';
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crFlag: us,
      crText: "ENGLISH"
    }
  }
  setLanguage(flag, text) {
    this.setState({crFlag: flag, crText: text})
  }
  render() {
    const Language = this.state;
    return (<div className="container">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand text-white"><img src={lg} width="50px" height="50px" alt="Logo"/>
          ExchangeR</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item spacing">
              <a className="nav-link text-white">SECURITY</a>
            </li>
            <li className="nav-item spacing">
              <a className="nav-link text-white">FAQ</a>
            </li>
            <li className="nav-item dropdown spacing">
              <a className="nav-link text-white dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                MORE
              </a>
              <div className="dropdown-menu drpLanguage" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item text-black">HOW IT WORKS</a>
                <a className="dropdown-item text-black">SUPORTED COINS</a>
                <a className="dropdown-item text-black">CONTACT US</a>
              </div>
            </li>
            <li className="nav-item dropdown spacing">
              <a className="nav-link text-white dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={Language.crFlag} height="15px" width="25px" alt="current flag"/> <span> {Language.crText}</span>
              </a>
              <div className="dropdown-menu drpLanguage" aria-labelledby="navbarDropdownMenuLink">
                <a onClick={(e) => this.setLanguage(fr, "FRENCH")} className="dropdown-item text-black"><img src={fr} height="15px" width="25px" alt="usflag"/>
                  <span> FRENCH</span></a>
                <a onClick={(e) => this.setLanguage(es, "SPANISH")} className="dropdown-item text-black"><img src={es} height="15px" width="25px" alt="frflag"/>
                  <span> SPANISH</span></a>
                <a onClick={(e) => this.setLanguage(us, "ENGLISH")} className="dropdown-item text-black"><img src={us} height="15px" width="25px" alt="esflag"/>
                  <span> ENGLISH</span></a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>);
  }
}
export default Menu;
