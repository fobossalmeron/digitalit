import React, { Component } from "react";
import DigitalSuccess from "./../../../assets/img/layout/digitalSuccess.svg";

class HomeSection extends Component {
  componentDidMount(){
    this.refs.video.setAttribute('muted', true);
    this.refs.video.play();
  }
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
            ref="video"
            preload="auto"
            autoPlay
            muted={true}
            loop
            playsInline
          />
        </div>
      </section>
    );
  }
}

export default HomeSection;
