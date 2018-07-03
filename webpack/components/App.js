import React, { Component } from 'react';
import HomeSection from './HomeSection';
import ContactSection from './ContactSection';
import Nav from './presentational/Nav';
import AboutSection from './presentational/AboutSection';
import scrollToComponent from 'react-scroll-to-component';
import InstagramIcon from 'svg-react-loader?name=InstagramIcon!../../assets/img/social/instagram.svg';
import UnderConstruction from 'svg-react-loader?name=UnderConstruction!../../assets/img/underconstruction.svg';


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        menuOn: false,
        maintenance: false
      };
    this.quitMaintenance = this.quitMaintenance.bind(this);
    this.initScrollMagic = this.initScrollMagic.bind(this);
  }

  toggleMenu(){
    this.setState({ menuOn: !this.state.menuOn})
  }

  hideNav(){
    this.setState({ menuOn: false});
  }

   initScrollMagic(){
     const script = document.createElement("script");
     script.src = "assets/js/scrollmagic.js";
     script.async = true;
     document.body.appendChild(script);
   }

   quitMaintenance(){
     this.setState({maintenance: false})
     this.initScrollMagic();
   }

   componentDidMount() {
    if (this.state.maintenance == false){
      this.initScrollMagic();
    }
  }

  goToTab(index){
    this.setState({tabIndex: index})
  }

  render() {
    var maintenanceScreen = (
      <div className="loading">
        <div id="loadingvideo">
            <UnderConstruction/>
        </div>
        <div className="aboveVideo">
          <img src="assets/img/layout/logo.svg"/>
          <img src="assets/img/layout/type.svg"/>
          <div className="secondLanding">
            <h2 className="blue">we're</h2>
            <h2 className="yellow">redesigning</h2>
            <h2 className="pink">ourselves</h2>
          </div>
          <div className="follow">
            <p>follow us on 
            <a href={"https://www.instagram.com/more.than.spaces/"} target="_blank">
                 <InstagramIcon/>
               </a>
            </p>
            <p><a href="http://instagram.com/more.than.spaces/">@<span className="blue">more</span>.<span className="yellow">than</span>.<span className="pink">spaces</span></a></p>
            </div>
        </div>
        <button onClick={this.quitMaintenance}>quit</button>
      </div>
    )
    var app = (
      <div>
        <Nav 
             toggleMenu={this.toggleMenu.bind(this)}
             hideNav={this.hideNav.bind(this)}
             menuOn={this.state.menuOn}
             
             scrollToAbout={() => scrollToComponent(this.About, { offset: -50, align: 'top'})}
             scrollToContact={() => scrollToComponent(this.Contact, { offset: -50, align: 'top'})}
             scrollToServices={() => scrollToComponent(this.Services, { offset: -50, align: 'top'})}
             scrollToProducts={() => scrollToComponent(this.Products, { offset: -50, align: 'top'})}
             scrollToDiscountBanner={() => scrollToComponent(this.DiscountBanner, { offset: -50, align: 'top'})}/>
        <HomeSection />
        <AboutSection ref={(section) => { this.About = section; }}/>
        <ContactSection ref={(section) => { this.Contact = section; }}/>
      </div>
    )
    var doRenderApp = this.state.maintenance? maintenanceScreen : app;
    return doRenderApp
  }
};

export default App;
