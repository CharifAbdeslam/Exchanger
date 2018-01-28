import React, {Component} from 'react';
import axios from 'axios';
import Menu from './Menu';
import Content from './Content';
import CoinsRate from './CoinsRate';
import Footer from './Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btcPrice: [] // Getting the average price of the coin
    }
  }
  getPrice() {
    axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=40").then(response => {
      this.setState({btcPrice: response.data})
    })
  }
  componentDidMount() { // performing the request every one minute to update the price
    this.getPrice()
    setInterval(() => {
      this.getPrice()
    }, 60000);
  }
  render() {
    return (
      <div>
        <div className="App00236">
          <Menu/> {/* navbar */}
          <Content {...this.state}/> {/* exchange form */}
          <div className="container-fluid">
            {/* alt coin price */}
            <div className="carousel slide" data-ride="carousel" data-interval="8000">
              <div className="carousel-inner">
                <div className="carousel-item active">
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
                <div className="carousel-item">
                  <div className="row crypto_wrapper d-flex justify-content-center">
                    <CoinsRate {...this.state} symbol="cc ADA" coinName="cardano"/>
                    <CoinsRate {...this.state} symbol="cc BC" coinName="bitcoin-gold"/>
                    <CoinsRate {...this.state} symbol="cc IOTA" coinName="iota"/>
                    <CoinsRate {...this.state} symbol="cc STRAT" coinName="stratis"/>
                    <CoinsRate {...this.state} symbol="cc QTUM" coinName="qtum"/>
                    <CoinsRate {...this.state} symbol="cc LSK" coinName="lisk"/>
                    <CoinsRate {...this.state} symbol="cc USDT" coinName="tether"/>
                    <CoinsRate {...this.state} symbol="cc SC" coinName="siacoin"/>
                    <CoinsRate {...this.state} symbol="cc BCN" coinName="bytecoin-bcn"/>
                    <CoinsRate {...this.state} symbol="cc BTS" coinName="bitshares"/>
                    <CoinsRate {...this.state} symbol="cc XVG" coinName="verge"/>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
        <Footer/>{/* hero end */}
      </div>
    );
  }
}
