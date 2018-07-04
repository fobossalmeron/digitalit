import React, { Component } from 'react';
import {render} from 'react-dom';
import Nav from './components/Nav';
import ContactSection from './components/presentational/ContactSection';

class NotFound extends Component {
  constructor(props) {
    super(props);
      this.state = {
        menuOn: false,
      };
}

  toggleMenu(){
    this.setState({ menuOn: !this.state.menuOn})
  }
  hideNav(){
    this.setState({ menuOn: false});
  }
  componentDidMount() {
    this.loadDiscount(this);
  }

  render() {
    return (
      <div>
        <Nav relativePath="/"
             toggleMenu={this.toggleMenu.bind(this)}
             hideNav={this.hideNav.bind(this)}
             menuOn={this.state.menuOn}  />
        <ContactSection/>
      </div>
    );
  }
};

export default NotFound;

render(<NotFound/>, document.getElementById('layout'));
