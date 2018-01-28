import React, {Component} from 'react';
import Exchange from './Exchange';
import data from './coins.json';
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCoinSe: data.currentCoinSe,
      currentCoinRe: data.currentCoinRe,
      amountSend : 0,
      amountRecieve:0,
      currentPrice:0,
      Coins: data.Coins,
      searchSend: "",
      searchRecieve: "",
      id: 0
    }
  }
  resetVal(e){
    this.setState({
        amountSend:0,
        amountRecieve:0,
        currentPrice:0
    })
      this.refs.amounGet.value = 0;
      this.refs.amountSend.value = 0;
  }
setValue(){
    const checkAm = this.state;
    let total = parseFloat(checkAm.currentPrice * checkAm.amountSend);
    let btcXprice = (total - (total/100)*0.5).toFixed(8);
      const setGetAmout=(e)=>{
        this.setState({amountRecieve:parseFloat(this.refs.amounGet.value)});
      }
      if(checkAm.currentCoinRe.crTextG ==="BTC"){
        this.refs.amounGet.value =  btcXprice;
        setGetAmout()
      }
      const setGetAmountAlt=(symbol)=>{
        if(checkAm.currentCoinRe.crTextG === symbol){
          this.props.btcPrice.filter(data =>{
            if(data.symbol === symbol){
              this.refs.amounGet.value = (btcXprice / data.price_btc).toFixed(8);
               setGetAmout();
            }
            return null
          })
        }
      }
  setGetAmountAlt("ETH");
  setGetAmountAlt("LTC");
  setGetAmountAlt("XMR");
  setGetAmountAlt("XRP");
  setGetAmountAlt("BCH");
  setGetAmountAlt("XLM");
  setGetAmountAlt("NEO");
  setGetAmountAlt("XEM");
  setGetAmountAlt("DASH");
  setGetAmountAlt("ZEC");
  setGetAmountAlt("STEEM");
}

  readAmountSend(symbol,e){
    this.setState({amountSend: parseFloat(this.refs.amountSend.value)})
           this.props.btcPrice.filter(data =>{
            if(data.symbol === symbol){
              this.setState({currentPrice: parseFloat(data.price_btc)},()=>{
                this.setValue();
              })
            }
            return null
          })
  }
  searchingSe(e) {
    this.setState({searchSend: e.target.value.toLowerCase()})
  }
  searchingRe(e) {
    this.setState({searchRecieve: e.target.value.toLowerCase()})
  }
  setNewCoinSend(coin, icon) {
    this.setState({
      currentCoinSe: {
        crCoinY: icon,
        crTextY: coin,
      }
    })
  }
  setNewCoinRecieve(coin, icon) {
    this.setState({
      currentCoinRe: {
        crCoinG: icon,
        crTextG: coin,
      }
    })
  }

  render() {
    const cr = this.state.currentCoinSe;
    const xs = this.state.currentCoinRe
    let cNameSEND = this.state.Coins;
    let searchSend = this.state.searchSend;
    cNameSEND = cNameSEND.filter(data => {
      return data.Texts.toLowerCase().indexOf(searchSend) >= 0
    }).map(data => {
      return (
        <div className="container clickab55987" key={data._Id} onClick={(e) => this.setNewCoinSend(data.Texts, data.Coin)}>
          <div className="row wrapercoinhv">
            <div className="col-3 text-center coin56488896">{data.Texts}</div>
            <div className="col-3 coin6549875 srt555987">
              <span className={data.Coin}></span>
            </div>
            <div className="col-6 text669874">{data.Alt}</div>
          </div>
          <hr></hr>
        </div>
      )
    });
    let cNameRECIEVE = this.state.Coins;
    let searchRecieve = this.state.searchRecieve;
    cNameRECIEVE = cNameRECIEVE.filter(data => {
      return data.Texts.toLowerCase().indexOf(searchRecieve) >= 0
    }).map(data => {
      return (
        <div className="container clickab55987" key={data._Id} onClick={(e) => this.setNewCoinRecieve(data.Texts, data.Coin)}>
          <div className="row wrapercoinhv">
            <div className="col-3 text-center coin56488896">{data.Texts}</div>
            <div className="col-3 coin6549875 srt555987">
              <span className={data.Coin}></span>
            </div>
            <div className="col-6 text669874">{data.Alt}</div>
          </div>
          <hr></hr>
        </div>
      )
    });
    return (
      <div className="container">
        <div>
          <div className="header88997">
            <h1 className="text-white">Fast, Secure, Anonymous &
              <b>Cheap!</b>
            </h1>
            <h1 className="text-white">Exchange your
              <i> Cryptocurrency </i>
              at the best rate</h1>
            </div>
          <div className="enginexchanger66548 row">
            <h5 className="text-white">Exchange in one click and recieve your fund instantly.</h5>
            <div className="form-row d-flex justify-content-center">
              <div className="input-group input-group-lg col-md-5">
                <div className="input-group-prepend">
                  <span className="input-group-text prependsend6545487">You have</span>
                </div>
                <input type="text" onChange={(e)=> this.readAmountSend(cr.crTextY,e)} className="form-control text-right inp65645987" ref="amountSend"/>
                <div className="input-group-append">
                  <a className="btn btn-secondary btnbord6565487" onMouseUp={(e)=>this.resetVal(e)} role="button" data-toggle="dropdown">
                    <i className={cr.crCoinY}></i>
                    <span className="coin6549875">
                      {cr.crTextY}<i className="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </a>
                  <div className="dropdown-menu get654877989">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-white pres659656">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" className="form-control ingetsearch" onChange={(e) => this.searchingSe(e)} ref="searchingSend"/>
                    </div>
                    <div className="dropdown-divider"></div>
                    {cNameSEND}
                  </div>
                </div>
              </div>
              <h3 className="text-white exch6498797">
                <i className="fa fa-exchange" aria-hidden="true"></i>
              </h3>
              <div className="input-group input-group-lg col-md-5">
                <div className="input-group-prepend">
                  <span className="input-group-text prependsend6545487">You get</span>
                </div>
                <input type="text" readOnly ref="amounGet"  className="form-control text-right inp65645987 dis55"/>
                <div className="input-group-append">
                  <a className="btn btn-secondary btnbord6565487" onMouseUp={(e)=>this.resetVal(e)}  role="button" data-toggle="dropdown">
                    <i className={xs.crCoinG}></i>
                    <span className="coin6549875">
                      {xs.crTextG}<i className="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </a>
                  <div className="dropdown-menu get654877989">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text bg-white pres659656">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input type="text" className="form-control ingetsearch" onChange={(e) => this.searchingRe(e)} ref="searchingRecieve"/>
                    </div>
                    <div className="dropdown-divider"></div>
                    {cNameRECIEVE}
                  </div>
                </div>
              </div>
                <Exchange {...this.state}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Content;
