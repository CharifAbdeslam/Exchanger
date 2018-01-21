import React, { Component } from 'react';
import Menu from './Menu';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
      <div className="App00236">
       <Menu />
        <Content />
      </div>
       <Footer />
     </div>
    );
  }
}

export default App;
