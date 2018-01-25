import React, {Component} from 'react';
import data from './coins.json';
import "../node_modules/flag-icon-css/css/flag-icon.min.css"
import lg from './img/lg.png';
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state ={
      currentFlag:data.currentFlag,
      languages:data.languages

  }
  }
  setLanguage(flag, text) {
    this.setState({currentFlag:{
      crFlag: flag,
      crText: text}})
  }
  render() {
    return (<div className="container">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand text-white"><img src={lg} width="50px" height="50px" alt="Logo"/>
          ExchangeR</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item spacing">
              <a className="nav-link text-white">SECURITY</a>
            </li>
            <li className="nav-item spacing">
              <a className="nav-link text-white">FAQ</a>
            </li>
            <li className="nav-item dropdown spacing">
              <a className="nav-link text-white dropdown-toggle" data-toggle="dropdown">
                MORE
              </a>
              <div className="dropdown-menu drpLanguage">
                <a className="dropdown-item text-black">HOW IT WORKS</a>
                <a className="dropdown-item text-black">SUPORTED COINS</a>
                <a className="dropdown-item text-black">CONTACT US</a>
              </div>
            </li>
            <li className="nav-item dropdown spacingLG">
              <a className="nav-link text-white dropdown-toggle" data-toggle="dropdown">
                <span className={this.state.currentFlag.crFlag}></span> <span> {this.state.currentFlag.crText}</span>
              </a>
              <div className="dropdown-menu drpLanguage">
                {
                    this.state.languages.map(language => {
                      return (<a key={language.Texts} onClick={(e) => this.setLanguage(language.Flag, language.Texts)} className="dropdown-item text-black"><span className={language.Flag}></span>
                        <span> {language.Texts}</span></a>)
                    })
                }
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>);
  }
}
export default Menu;
