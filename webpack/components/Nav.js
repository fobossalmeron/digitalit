import React, { Component } from "react";
import Modal from "react-modal";
import HamburgerIcon from "svg-react-loader?name=HamburgerIcon!../../assets/img/layout/hamburger.svg";
import DesignSuccess from "svg-react-loader?name=DesignSuccess!../../assets/img/layout/designSuccess.svg";
import DesignSuccessMobile from "svg-react-loader?name=DesignSuccess!../../assets/img/layout/designSuccessMobile.svg";
import DigitalSuccess from "svg-react-loader?name=DesignSuccess!../../assets/img/layout/digitalSuccess.svg";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relative: false,
      menuToggled: false
    };
    this.navScrollMagic = this.navScrollMagic.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.doHideNav = this.doHideNav.bind(this);
  }

  toggleMenu() {
    this.setState({ menuToggled: !this.state.menuToggled });
    document.body.classList.toggle("restrictBody");
    document.addEventListener("touchstart", this.touchstart);
    document.addEventListener("touchmove", this.touchmove);
    function touchstart(e) {
      e.preventDefault();
    }
    function touchmove(e) {
      e.preventDefault();
    }
    this.props.closeModal();
  }
  doHideNav() {
    this.setState({ menuToggled: false });
    document.body.classList.remove("restrictBody");
    document.removeEventListener("touchstart", this.touchstart);
    document.removeEventListener("touchmove", this.touchmove);
    this.props.closeModal();
  }

  componentDidMount() {
    if (typeof this.props.relativePath !== "undefined") {
      this.setState({ relative: true }, () => this.navScrollMagic());
    } else {
      this.navScrollMagic();
    }
  }

  doScrollToHome(event) {
    this.props.closeModal();
    if (typeof this.props.scrollToHome !== "undefined") {
      event.preventDefault();
      this.props.scrollToHome();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#");
      }
    }
  }

  doScrollToAbout(event) {
    this.props.closeModal();
    if (typeof this.props.scrollToAbout !== "undefined") {
      event.preventDefault();
      this.props.scrollToAbout();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#what&how");
      }
    }
  }
  doScrollToWork() {
    this.props.closeModal();
    if (typeof this.props.scrollToWork !== "undefined") {
      event.preventDefault();
      this.props.scrollToWork();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#work");
      }
    }
  }
  doScrollToServices() {
    this.props.closeModal();
    if (typeof this.props.scrollToServices !== "undefined") {
      event.preventDefault();
      this.props.scrollToServices();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#serviceareas");
      }
    }
  }
  doScrollToContact() {
    this.props.closeModal();
    if (typeof this.props.scrollToContact !== "undefined") {
      event.preventDefault();
      this.props.scrollToContact();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#contact");
      }
    }
  }

  navScrollMagic() {
    var controllerX = new ScrollMagic.Controller({
      globalSceneOptions: { triggerHook: 0 }
    });
    var logoScene = new ScrollMagic.Scene({
      triggerElement: "body",
      offset: 20
    })
      .setClassToggle("header", "headerScroll")
      .addTo(controllerX);
  }

  render() {
    var baseUrl = this.state.relative ? this.props.relativePath : "";
    var navIsActive = this.state.menuToggled ? "navActive" : "";
    var navToggled = this.state.menuToggled ? "toggled" : "";
    var active = this.state.menuToggled ? "active" : "";

    return (
      <header>
        <div className="headerWrapper">
          <a className="hideText" href="http://designsuccess.com">
            <DesignSuccess className="designSuccessLogo" />
            <DesignSuccessMobile className="designSuccessLogoMobile" />
            design:success
          </a>
          <a
            onClick={() => {
              this.doHideNav();
              this.doScrollToHome(event);
            }}
            href={baseUrl + "#home"}
            className="hideText a"
          >
            <DigitalSuccess className="websiteLogo" id="websiteLogo" />
            digital:success
          </a>
          <HamburgerIcon
            id="hamburger"
            className={active}
            onClick={() => this.toggleMenu()}
          />
          <nav className={active} onClick={() => this.closeNav()}>
            <ul>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToAbout(event);
                }}
              >
                <a href={baseUrl + "#what&how"}>what & how</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToWork(event);
                }}
              >
                <a href={baseUrl + "#work"}>work</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToServices();
                }}
              >
                <a href={baseUrl + "#serviceareas"}>service areas</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToContact();
                }}
              >
                <a href={baseUrl + "#contact"}>contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Nav;
