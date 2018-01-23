import React, {Component} from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
class Content extends Component {
  constructor(props){
    super(props);
    this.state={
      BTC:"cc BTC",
      ETH:"cc ETH"
    }
  }
  render() {
    return (<div className="container">
      <div className="header88997">
        <h1 className="text-white">Fast, Secure, Anonymous &
          <b>Cheap!</b>
        </h1>
        <h1 className="text-white">Exchange your
          <i>Cryptocurrency </i>
          at the best rate</h1>
        <div className="enginexchanger66548">
          <div className="form-row">
            <div className="input-group input-group-lg col-md-5">
              <div className="input-group-prepend">
                <span className="input-group-text prependsend6545487">You have</span>
              </div>
              <input type="text" className="form-control text-right inp65645987" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
              <div className="input-group-append">
             <span className="input-group-text"><i className={this.state.BTC}></i> BTC <i class="fa fa-angle-down" aria-hidden="true"></i>
            </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}
export default Content;
