import React, {Component} from 'react';
import responsive from "../img/responsive.png";
import coindeskLogo from "../img/logo_coindesk.svg";
import bitcoinLogo from "../img/logo_bitcoin.svg";
import cryptocoinLogo from "../img/logo_cryptocoins.svg";
import coincapLogo from "../img/logo_coinmarketCap.svg"
class Footer extends Component {
  render() {
    return (
      <div className="footer bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center jumbotron ftheaders bg-light">
              <h2 className="text-dark">EXCHANGER PLATFORM FEATURS</h2>
              <hr></hr>
              <p className="lead">EXCHANGER is an anonymous exchange platform for the leading cryptocurrency such as : Bitcoin , Bitcoin Cash , Ethereum , Litecoin , Monero , Ripple , Steem , Nem , Stellar, Neo , Dash and Zecash.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-3 jumbotron text-center ftheaders bg-light">
              <h1>
                <i className="fa fa-clock-o fa-2x text-primary" aria-hidden="true"></i>
              </h1>
              <h6>FAST TRANSACTION</h6>
              <p className="lead">Transaction are done in one click and your fund will be sent the moment you confirm the transaction, see
                <span className="text-primary"> HOW IT WORKS </span>
                for more information.</p>
            </div>
            <div className="col-md-3 jumbotron text-center ftheaders bg-light">
              <h1>
                <i className="fa fa-user-secret fa-2x text-primary" aria-hidden="true"></i>
              </h1>
              <h6>ANONYMITY AND PRIVACY</h6>
              <p className="lead">We will never ask you or disclose your email , address or any other personal information.
                <span className="text-primary"> ANONYMITY AND PRIVACY </span>
                is what make us diffrent from other exchanges.</p>
            </div>
            <div className="col-md-3 jumbotron text-center ftheaders bg-light">
              <h1>
                <i className="fa fa-money fa-2x text-primary" aria-hidden="true"></i>
              </h1>
              <h6>LOW FEE</h6>
              <p className="lead">Other cryptocurrency trading platform charge you with withdrawal fees ,transaction and exchange. We have a reasonable and a <span className="text-primary"> low fee of 0.5% </span>.</p>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-md-3 jumbotron text-center ftheaders bg-light">
              <h1>
                <i className="fa fa-shield fa-2x text-primary" aria-hidden="true"></i>
              </h1>
              <h6>SECURITY</h6>
              <p className="lead">The security of your funds is our main priority,we perform a daily maintenance on the servers with our services your funds <span className="text-primary"> will never be lost or stolen. </span></p>
            </div>
            <div className="col-md-3 jumbotron text-center ftheaders bg-light">
              <h1>
                <i className="fa  fa-random fa-2x text-primary" aria-hidden="true"></i>
              </h1>
              <h6>A GOOD EXCHANGE RATE</h6>
              <p className="lead"> We select the best exchange rate from a variety of exchange platform and your exchange rate will be set the moment you confirm the transaction. </p>
            </div>
            <div className="col-md-3 jumbotron text-center ftheaders bg-light">
              <h1>
                <i className="fa  fa-users fa-2x text-primary" aria-hidden="true"></i>
              </h1>
              <h6>DEDICATED SUPPORT TEAM</h6>
              <p className="lead">Our dedicated support team is available 24h/7d to guide you through all aspects of our platform and answer your question and request. </p>
            </div>
          </div>
        </div>

        <div className="container-fluid rfskdw">
          <div className="row justify-content-between text-center">
            <div className="col-md-3">
              <img src={coindeskLogo} className="img-fluid" alt="coindesk logo"/>
            </div>
            <div className="col-md-3">
              <img src={bitcoinLogo} className="img-fluid" alt="bitcoin.com logo"/>
            </div>
            <div className="col-md-3">
              <img src={cryptocoinLogo} className="img-fluid" alt="cyrptocoin logo"/>
            </div>

            <div className="col-md-3">
              <img src={coincapLogo} className="img-fluid" alt="coinmarketcap logo"/>
            </div>
          </div>
        </div>


        <div className="container-fluid img-container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img src={responsive} alt="Logo mobile tablette" className="img-fluid"/>
            </div>
            <div className="col-md-3">
              <h2>FRIENDLY INTERFACE</h2>
              <h3>Whether you use a mobile phone , <br></br>a tablette or a desktop computer , our interface is friendly and easy to use.</h3>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Footer;
