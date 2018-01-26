import React, { Component } from 'react';

import Menu from './Menu';
import Content from './Content';
import CoinsRate from './CoinsRate';
import Footer from './Footer';

class App extends Component {


  render() {
    return (
      <div>
      <div className="App00236">
       <Menu />
        <Content />
        <div className="container-fluid">
          <div className="row crypto_wrapper">
            <CoinsRate symbol ="cc ETH" coinName="ethereum"/>
            <CoinsRate symbol ="cc LTC" coinName="litecoin"/>
            <CoinsRate symbol ="cc XMR" coinName="monero"/>
            <CoinsRate symbol ="cc XRP" coinName="ripple"/>
            <CoinsRate symbol ="cc BCH" coinName="bitcoin-cash"/>
            <CoinsRate symbol ="cc STR" coinName="stellar"/>
            <CoinsRate symbol ="cc NEO" coinName="neo"/>
            <CoinsRate symbol ="cc XEM" coinName="nem"/>
          </div>
        </div>
      </div>

       <Footer />
     </div>
    );
  }
}

export default App;
