import React, {Component} from 'react';

export default class CoinsRate extends Component {

  getAcutualPrice(coin) {
    let clPrice = this.props.btcPrice.filter(data => {
      if (data.id === coin) {
        return data
      }
      return null
    }).map(data => {
      var cryptoChangeDay = null;
      var cryptoChangeHour = null;
      if(data.percent_change_1h >= 0){
       cryptoChangeHour = <span className="text-success"> {data.percent_change_1h}</span>
      }
       else{
            cryptoChangeHour = <span className="text-danger"> {data.percent_change_1h}</span>
           }
       if(data.percent_change_24h >= 0){
         cryptoChangeDay = <span className="text-success"> {data.percent_change_24h}</span>
       }else{
             cryptoChangeDay = <span className="text-danger"> {data.percent_change_24h}</span>
           }
      return (<div key={data.rank}>
        <ul className="list-group crlist_Wrapper">
          <li className="list-group-item">
            <span className={this.props.symbol}></span><span> {data.name}({data.symbol})</span><br></br>
            <span>{data.price_btc} BTC</span> {cryptoChangeHour} <br></br>
            <span>{data.price_usd} USD</span> {cryptoChangeDay}
            </li>
        </ul>
      </div>)
    })
    return clPrice
  }
  render() {
    let BTC = this.getAcutualPrice(this.props.coinName);
    return (<div className="col-md-1  coinWrapper556">
      {BTC}
    </div>)
  }
}
