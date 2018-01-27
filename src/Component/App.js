import React, {Component} from 'react';
import axios from 'axios';
import Menu from './Menu';
import Content from './Content';
import CoinsRate from './CoinsRate';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btcPrice: []
    }
  }
  getPrice() {
    axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=30").then(response => {
      this.setState({btcPrice: response.data})
    })
  }
  componentDidMount() {
    this.getPrice()
    setInterval(() => {
      this.getPrice()
    }, 30000);
  }

  render() {
    return (<div>
      <div className="App00236">
        
        <Menu/>     {/* navbar */}
        <Content {...this.state}/>  {/* exchange form */}
        <div className="container-fluid">{/* alt coin price */}
          <div className="row crypto_wrapper d-flex justify-content-center">
            <CoinsRate {...this.state} symbol="cc ETH" coinName="ethereum"/>
            <CoinsRate {...this.state} symbol="cc LTC" coinName="litecoin"/>
            <CoinsRate {...this.state} symbol="cc XMR" coinName="monero"/>
            <CoinsRate {...this.state} symbol="cc XRP" coinName="ripple"/>
            <CoinsRate {...this.state} symbol="cc BCH" coinName="bitcoin-cash"/>
            <CoinsRate {...this.state} symbol="cc STR" coinName="stellar"/>
            <CoinsRate {...this.state} symbol="cc NEO" coinName="neo"/>
            <CoinsRate {...this.state} symbol="cc XEM" coinName="nem"/>
            <CoinsRate {...this.state} symbol="cc DASH" coinName="dash"/>
            <CoinsRate {...this.state} symbol="cc ZEC" coinName="zcash"/>
            <CoinsRate {...this.state} symbol="cc STEEM" coinName="steem"/>
          </div>
        </div>
      </div>
      <Footer />{/* hero end */}
    </div>);
  }
}

export default App;
