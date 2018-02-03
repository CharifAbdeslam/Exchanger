
import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import ReactCountdownClock from "react-countdown-clock";
class Exchange extends Component {
  clicktest(e){
    console.log(this.props.amountSend);
    console.log(this.props.amountRecieve);
    console.log(this.props.currentCoinSe.crTextY);
    console.log(this.props.currentCoinRe.crTextG);
  }
  myCallback(){
    console.log("countdown end");
  }
  render() {
    return (
      <div className="col-md-3">
       <button type="button" onClick={(e)=> this.clicktest(e)} className="btn btn-primary btn-lg btn-block btexch6659775" data-toggle="modal" data-target="#exchangeModal">Exchange Now!</button>
       <div className="modal fade" id="exchangeModal" tabIndex="-1" role="dialog">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">


      <div className="modal-body">
        <p>Make sur to send the correct amount to the correct address or the transaction will be cancelled.</p>
        <hr></hr>

        <div>
          <div className="text-center qrcontainer">
            <p>Please send:<span className="text-success"> {this.props.amountSend}</span> <span>{this.props.currentCoinSe.crTextY}</span> to the address below:</p>
              <QRCode value="0x88A37155e840893d0F154f03EE4BeebB199313Ec" />
              <p className="text-secondary">0x88A37155e840893d0F154f03EE4BeebB199313Ec</p>
              <div className="container">
                <div className="row">
                  <ReactCountdownClock seconds={280} color="#000" alpha={0.7} size={70} onComplete={this.myCallback}/>
                </div>
              </div>


          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary btexch6659775">Confirm</button>
      </div>
    </div>
  </div>
</div>
     </div>
    );
  }
}

export default Exchange;
