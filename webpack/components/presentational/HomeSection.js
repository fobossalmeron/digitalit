import React, { Component } from "react";
import ReactPlayer from "react-player";
import DigitalSuccess from "svg-react-loader?name=DesignSuccess!../../../assets/img/layout/digitalSuccess.svg";

class HomeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullVideo: false,
      playing: false,
      loop: true,
      muted: true,
      playsinline: true,
      url: "assets/video/intro.mp4",
      playerKey: "oneKey"
    };
  }

  componentDidMount() {
    this.setState({ playing: true });
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
          <ReactPlayer
            key={this.state.playerKey}
            url={this.state.url}
            playing={this.state.playing}
            loop={true}
            muted={true}
            playsinline={true}
          />
        </div>
      </section>
    );
  }
}

export default HomeSection;