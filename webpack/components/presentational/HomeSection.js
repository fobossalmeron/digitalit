import React, { Component } from "react";
import DigitalSuccess from "svg-react-loader?name=DesignSuccess!../../../assets/img/layout/digitalSuccess.svg";

class HomeSection extends Component {
  render() {
    return (
      <section id="home">
        <div className="overVideo">
          <DigitalSuccess className="mainLogo" />
          <h1>reimagine, (re)invent, realize</h1>
          <h2>
            We are award-winning digital pioneers that takes validated
            innovations, strategies and products and make them come digitally
            alive – fast!
          </h2>
        </div>
        <div id="homevideo">
          <div className="video_overlay" />
          <video
            src="assets/video/intro.mp4"
            preload="auto"
            autoPlay
            muted
            playing
            loop
            playsInline
          />
        </div>
      </section>
    );
  }
}

export default HomeSection;
