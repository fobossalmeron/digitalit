import React, { Component } from "react";
import DigitalSuccess from "./../../../assets/img/layout/digitalSuccess.svg";
import ByDesignSuccess from "./../../../assets/img/layout/byDesignSuccess.svg";

class HomeSection extends Component {
  constructor() {
    super();
    this.playVideo = this.playVideo.bind(this);
  }
  componentDidMount() {
    this.refs.video.setAttribute("muted", true);
    this.refs.video.pause();
    this.playVideo();
  }

  playVideo() {
    this.refs.video.play();
    var myself = this;
    setTimeout(function() {
      myself.refs.video.play();
    }, 500);
  }
  render() {
    return (
      <section id="home">
        <div className="overVideo">
          <DigitalSuccess className="mainLogo" />
          <ByDesignSuccess className="byDesign"/>
          <h1>transform:now</h1>
          <h2>
          transforming brands and companies into digital market leaders
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
