import React, {Component} from 'react';
import axios from 'axios';
export default class CoinsRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btcPrice: []
    }
  }
  getPrice() {
    axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=10").then(response => {
      this.setState({
        btcPrice: response.data
      })
    })
  }
  componentDidMount() {
    this.getPrice()
  }
  getAcutualPrice(coin,) {
    let clPrice = this.state.btcPrice.filter(data => {
      if (data.id === coin) {
        return data
      }
      return null
    }).map(data => {
      return (<div>
        <ul className="list-group">
          <li className="list-group-item">{data.id}(#{data.symbol}) {data.price_usd}</li>
          <li className="list-group-item"> </li>
        </ul>
      </div>)
    })
    return clPrice
  }
  render() {
    const BTC = this.getAcutualPrice("bitcoin");
    return (<div className="col-md-1">
      {BTC}
    </div>)
  }
}
