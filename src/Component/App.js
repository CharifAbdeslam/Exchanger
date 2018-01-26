import React, { Component } from 'react';

import Menu from './Menu';
import Content from './Content';
import CoinsRate from './CoinsRate';
import Footer from './Footer';

class App extends Component {


  render() {
    return (
      <div>
      <div className="App00236">
       <Menu />
        <Content />
        <div className="container-fluid">
          <div className="row">
            <h5><CoinsRate /></h5>
          </div>
        </div>
      </div>

       <Footer />
     </div>
    );
  }
}

export default App;
