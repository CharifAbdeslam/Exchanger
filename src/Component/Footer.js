import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <div>
      <div className="container">
        <div className="footer">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center jumbotron ftheaders">
              <h2 className="text-dark">EXCHANGER PLATFORM FEATURS</h2>
              <hr></hr>
              <p className="lead">EXCHANGER is an anonymous exchange platform for the leading cryptocurrency such as : Bitcoin , Ethereum , Litecoin , Monero , Ripple , Steem , Nem , Stellar, Neo , Dash and Zecash. </p>
            </div>
          </div>
          </div>
        </div>
          <div className="container-fluid">
          <div className="row justify-content-around">
            <div className="col-md-3 jumbotron text-center ftheaders">
              <h1><i className="fa fa-clock-o fa-4x text-primary" aria-hidden="true"></i></h1>
              <h6>FAST TRANSACTION</h6>
              <p className="lead">Transaction are done in one click and we will send your fund the moment you confirm the transaction, see <span className="text-primary">HOW IT WORKS</span> for more info.</p>
            </div>
            <div className="col-md-3 jumbotron text-center ftheaders">
              <h1><i className="fa fa-eye-slash fa-4x text-primary" aria-hidden="true"></i></h1>
                <h6>ANONYMITY AND PRIVACY</h6>
                <p className="lead">We will never ask you or disclose your email , address or any other personal information. <span className="text-primary">ANONYMITY AND PRIVACY</span> is what make us diffrent from other exchanges</p>
              </div>
              <div className="col-md-3 jumbotron text-center ftheaders">
                <h1><i className="fa fa-money fa-4x text-primary" aria-hidden="true"></i></h1>
                <h6>LOW FEE</h6>
                <p className="lead">Other cryptocurrency trading platform charge you with withdrawal fees and exchange. We have a reasonable and a low fee of 0.5%.</p>
              </div>
          </div>
        </div>

</div>
    );
  }
}

export default Footer;
