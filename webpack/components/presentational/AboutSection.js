import React, { Component } from "react";
import Graphic1 from "./../../../assets/img/layout/graphic1.svg";
import Graphic1Mobile from "./../../../assets/img/layout/graphic1mobile.svg";
import Graphic2 from "./../../../assets/img/layout/graphic2.svg";
import Graphic3 from "./../../../assets/img/layout/graphic3.svg";
import Graphic4 from "./../../../assets/img/layout/graphic4.svg";
import Graphic5 from "./../../../assets/img/layout/graphic5.svg";

class AboutSection extends Component {
  render() {
    return (
      <section id="what">
        <div className="screen1 screen">
          <p>
            We combine digital agency services and innovation business
            consulting to transform your business process and end-user
            engagement successfully, from prototyping to enterprise solutions:
          </p>
          <Graphic1 className="desktop" />
          <Graphic1Mobile className="mobile" />
        </div>
        <div className="screen2 screen">
          <ul>
            <li>
              <Graphic2 />
              <h3>reimagine</h3>
              <p>
                Utilizing design:success’ proprietary innovation process, we
                identify innovative digital solutions.
                <br />
                We rapidly create digital mock-ups, UI/UX’s and flows and test
                live with real consumers.
              </p>
            </li>
            <li>
              <Graphic3 />
              <h3>(re)invent</h3>
              <p>
                Based on deep insights and data, we (re)invent the IT & digital
                experience from UI/UX front end to integration back-end – with
                in-depth architecture and flows.
              </p>
            </li>
            <li>
              <Graphic4 />
              <h3>realize</h3>
              <p>
                We design and build the REAL experience and solution, either as
                functional prototyping or final end-to-end enterprise product.
              </p>
            </li>
          </ul>
        </div>
        <div className="screen3 screen">
          <div className="box">
            <h2>the results are simple</h2>
            <Graphic5 />
          </div>
          <h3>rapid</h3>
          <p>we’re faster than any other innovation and IT process</p>
          <h3>repositioning</h3>
          <p>
            your brand, company and experience towards customers and investors
          </p>
          <h3>(r)evolutionize</h3>
          <p>
            changing your brand, category and experience forever – increasing
            ROI, faster
          </p>
        </div>
      </section>
    );
  }
}

export default AboutSection;
