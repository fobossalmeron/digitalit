import React, { Component } from "react";
import ReactPlayer from "react-player";
import Graphic1 from "./../../../assets/img/layout/graphic1.svg";
import Graphic1Mobile from "./../../../assets/img/layout/graphic1.svg";

class AboutSection extends Component {
  render() {
    return (
      <section id="why">
        <div className="screen1 screen">
          <h2>why</h2>
          <p>
            Today, we live in the age of acceleration where challenges and
            competition come from new and unexpected places.
            <br />
            <br />
            <b>FACT:</b> 70% of companies that were on the Fortune 1000 list
            just 10 years ago have fallen off the list. Adapting isn’t enough
            and <b>tomorrow is too late.</b>
            <br />
            <br />
            Your business and brand need <b>intelligent transformation now</b>.
          </p>
          <h2>what</h2>
          <p>
            <b>transform:now</b> is the next-generation experience, design and
            digital transformation consultancy. By applying our patented &
            ISO:9001 certified proven process (trusted by the world’s biggest
            brands and Fortune500 companies), we design true digital
            transformations for businesses and consumers by delivering insights,
            ideation, validation and tangible transformational solutions in the
            following areas:
          </p>
          <Graphic1 className="desktop" />
          {/*<Graphic1Mobile className="mobile" />*/}
          <p className="colophon">
            <b>
              the outcome: tangible and measurable impact for your organization
              that leads to growth and thrive.
            </b>
          </p>
          <ReactPlayer
            url="https://vimeo.com/343751758"
            className="fullVideo"
          />
        </div>
      </section>
    );
  }
}

export default AboutSection;
