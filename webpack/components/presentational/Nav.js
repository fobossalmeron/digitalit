import React, { Component } from 'react';
import HamburgerIcon from 'svg-react-loader?name=HamburgerIcon!../../../assets/img/layout/hamburger.svg';
import DesignSuccess from 'svg-react-loader?name=DesignSuccess!../../../assets/img/layout/designSuccess.svg';
import DesignSuccessMobile from 'svg-react-loader?name=DesignSuccess!../../../assets/img/layout/designSuccessMobile.svg';
import DigitalSuccess from 'svg-react-loader?name=DesignSuccess!../../../assets/img/layout/digitalSuccess.svg';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relative: false,
      menuOn: false
    };
    this.navScrollMagic = this.navScrollMagic.bind(this);
    this.doToggleMenu = this.doToggleMenu.bind(this);
    this.doHideNav = this.doHideNav.bind(this);
  }

  doToggleMenu(){
    this.setState({ menuOn: !this.state.menuOn})
    document.body.classList.toggle('restrictBody')
    document.addEventListener('touchstart', this.touchstart);
    document.addEventListener('touchmove', this.touchmove);
    function touchstart(e) {
        e.preventDefault()
    }
    function touchmove(e) {
        e.preventDefault()
    }
  }
  doHideNav(){
    this.setState({ menuOn: false});
    document.body.classList.remove('restrictBody')
    document.removeEventListener('touchstart', this.touchstart);
    document.removeEventListener('touchmove', this.touchmove);
  }

  componentDidMount(){
    if (typeof this.props.relativePath !== 'undefined') {
      this.setState({ relative : true }, () => this.navScrollMagic());
    } else{
      this.navScrollMagic();
    }
  }

  doScrollToAbout(event){
    if (typeof this.props.scrollToAbout !== 'undefined') {
      event.preventDefault();
      this.props.scrollToAbout();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#about");
      }
    }
  }
  doScrollToServices(){
    if (typeof this.props.scrollToServices !== 'undefined') {
      event.preventDefault();
      this.props.scrollToServices();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#services");
      }
    }
  }
  doScrollToContact(){
    if (typeof this.props.scrollToContact !== 'undefined') {
      event.preventDefault();
      this.props.scrollToContact();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#contact");
      }
    }
  }

  navScrollMagic(){
    var controllerX = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 0}});
    var logoScene = new ScrollMagic.Scene({triggerElement: "body", offset: 15})
            .setClassToggle("nav", "navScroll")
            .addTo(controllerX);
  }

  render (){
    var baseUrl = this.state.relative? this.props.relativePath : '';
    var isActive = this.state.menuOn? "menuActive" : "";
    var navIsActive = this.state.menuOn? "navActive" : "";
    var navToggled = this.state.menuOn ? 'toggled' : '';

    return (
      <header>
          <a className="hideText" href="http://designsuccess.com">
          <DesignSuccess className="designSuccessLogo"/>
          <DesignSuccessMobile className="designSuccessLogoMobile"/>
            design:success
          </a>
          <a href={baseUrl + "#home"} className="hideText a">
            <DigitalSuccess className="websiteLogo" id="websiteLogo"/>
            digital:success
          </a>
          <div id="hamburger" className={navToggled} onClick={() => this.toggleNav()}>
            <HamburgerIcon onClick={this.doToggleMenu} className={"menuButton " + isActive}/>
          </div>
          <nav id={navIsActive} className={navToggled} onClick={() => this.closeNav()}>
          <li onClick={() => {this.handleNavClick(0); this.doHideNav()}}><a href={baseUrl + "#products"}>booths</a></li>
          <li onClick={() => {this.handleNavClick(1); this.doHideNav()}}><a href={baseUrl + "#products"}>videowalls</a></li>
          <li onClick={() => {this.doHideNav(); this.doScrollToServices()}}><a href={baseUrl + "#services"}>services</a></li>
          <li onClick={() => {this.doHideNav(); this.doScrollToAbout(event)}}><a href={baseUrl + "#about"}>about</a></li>
          <li onClick={() => {this.doHideNav(); this.doScrollToContact()}}><a href={baseUrl + "#contact"}>contact</a></li>
          </nav>
        </header>
    );
  }
};

export default Nav;