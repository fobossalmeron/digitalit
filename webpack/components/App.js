import React, { Component } from "react";
import Nav from "./Nav";
import HomeSection from "./presentational/HomeSection";
import WorkSection from "./presentational/WorkSection";
import AboutSection from "./presentational/AboutSection";
import ServicesSection from "./presentational/ServicesSection";
import ContactSection from "./presentational/ContactSection";
import scrollToComponent from "react-scroll-to-component";
import DigitalSuccess from "./../../assets/img/layout/digitalSuccess.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOn: false,
      modalOpen: false,
      maintenance: false
    };
    this.quitMaintenance = this.quitMaintenance.bind(this);
    this.initScrollMagic = this.initScrollMagic.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  toggleMenu() {
    this.setState({ menuOn: !this.state.menuOn });
  }

  hideNav() {
    this.setState({ menuOn: false });
  }

  initScrollMagic() {
    const script = document.createElement("script");
    script.src = "assets/js/scrollmagic.js";
    script.async = true;
    document.body.appendChild(script);
  }

  quitMaintenance() {
    this.setState({ maintenance: false });
    this.initScrollMagic();
  }

  componentDidMount() {
    if (this.state.maintenance == false) {
      this.initScrollMagic();
    }
  }

  goToTab(index) {
    this.setState({ tabIndex: index });
  }

  render() {
    var maintenanceScreen = (
      <div className="loading">
        <DigitalSuccess/>
        <h2>website under construction</h2>
        <button onClick={this.quitMaintenance}>quit</button>
      </div>
    );
    var app = (
      <div>
        <Nav
          toggleMenu={this.toggleMenu.bind(this)}
          hideNav={this.hideNav.bind(this)}
          menuOn={this.state.menuOn}
          closeModal={this.closeModal.bind(this)}
          scrollToHome={() =>
            scrollToComponent(this.Home, { offset: 0, align: "top" })
          }
          scrollToAbout={() =>
            scrollToComponent(this.About, { offset: -45, align: "top" })
          }
          scrollToServices={() =>
            scrollToComponent(this.Services, { offset: -45, align: "top" })
          }
          scrollToWork={() =>
            scrollToComponent(this.Work, { offset: -65, align: "top" })
          }
          scrollToContact={() =>
            scrollToComponent(this.Contact, { offset: -45, align: "top" })
          }
        />
        <HomeSection
          ref={section => {
            this.Home = section;
          }}
        />
        <AboutSection
          ref={section => {
            this.About = section;
          }}
        />
        <WorkSection
          ref={section => {
            this.Work = section;
          }}
          modalOpen={this.state.modalOpen}
          openModal={this.openModal.bind(this)}
          closeModal={this.closeModal.bind(this)}
        />
        <ServicesSection
          ref={section => {
            this.Services = section;
          }}
        />
        <ContactSection
          ref={section => {
            this.Contact = section;
          }}
        />
      </div>
    );
    var doRenderApp = this.state.maintenance ? maintenanceScreen : app;
    return doRenderApp;
  }
}

export default App;
