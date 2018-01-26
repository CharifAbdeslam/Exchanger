import React, {Component} from 'react';
import axios from 'axios';
export default class CoinsRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btcPrice:""
    }
  }
  getPrice() {
    axios.get("https://api.bitfinex.com/v2/tickers?symbols=tBTCUSD,tLTCUSD")
         .then(response => {
         this.setState({btcPrice: response.data},
        function() {
        console.log(this.state.btcPrice)
      })
    })
  }
  componentWillMount() {
    this.getPrice()
  }
  render() {
    return (<div>
      
  </div>)
  }
}
