
import React, { Component } from 'react';


class Exchange extends Component {
  clicktest(e){
    console.log(this.props.amountSend);
    console.log(this.props.amountReceive);
    console.log(this.props.currentCoinSe.crTextY);
  }
  render() {
    return (
      <div className="col-md-3 btexch6659775">
       <button type="button" onClick={(e)=> this.clicktest(e)}className="btn btn-primary btn-lg btn-block">Exchange Now!</button>
     </div>
    );
  }
}

export default Exchange;
