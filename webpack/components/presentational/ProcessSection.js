import React, { Component } from "react";
import Graphic2 from "./../../../assets/img/layout/graphic2.svg";
import GraphicA from "./../../../assets/img/layout/graphicA.svg";
import GraphicB from "./../../../assets/img/layout/graphicB.svg";
import GraphicC from "./../../../assets/img/layout/graphicC.svg";
import GraphicD from "./../../../assets/img/layout/graphicD.svg";
import GraphicE from "./../../../assets/img/layout/graphicE.svg";

class ProcessSection extends Component {
  render() {
    return (
      <section id="process">
        <div className="screen2 screen">
          <p className="colophon">
            our patented & ISO:9001 certified proven process in the only one of
            its kind in the world.
          </p>
          <Graphic2 style={{marginBottom:"15%"}}/>
          <ul>
            <li>
              <GraphicA />
              <div className="step">
                <h3>1: immersion</h3>
                <p>
                  It all starts with our renowned innovation:vision workshop.
                  Along with your strategic team, we define the vision, scope,
                  and brief.
                  <br />
                  <br />
                  We dig deeper and utilize all the expert tools available. The
                  outcome is our proprietary opportunity mapping where we
                  outline unique untapped directions.
                </p>
              </div>
            </li>
            <li style={{ marginBottom: "7%" }}>
              <GraphicB />
              <div className="step">
                <h3>2: in depth insights</h3>
                <p>
                  Tailored to each project, we apply the best methodologies to
                  get real in-depth insights: interception, one-on-one
                  interviews, qualitative, quantitative research, and our
                  proprietary QualQuantTM; fusing qualitative and quantitative
                  simultaneously.
                </p>
              </div>
            </li>
            <li style={{ marginBottom: "7%" }}>
              <GraphicC />
              <div className="step">
                <h3>3: strategic conceptual development</h3>
                <p>
                  Our strategic, business, innovation and creative teams
                  co-create strategic platforms, solutions, designs, and
                  communications, all based on fitting business strategy and
                  identified in-depth insights.
                </p>
              </div>
            </li>
            <li>
              <GraphicD />
              <div className="step">
                <h3>4: validation - innovation:lab</h3>
                <p>
                  Our strategic, business, innovation and creative teams
                  co-create strategic platforms, solutions, designs, and
                  communications, all based on fitting business strategy and
                  identified in-depth insights.
                </p>
              </div>
            </li>
            <li>
              <GraphicE style={{ alignSelf: "flex-start" }} />
              <div className="step">
                <h3>5: digital transformation execution & implementation</h3>
                <p>
                  Defining what new technologies, capabilities, skills, and
                  culture are central to success. Along with your team, we
                  identify the capabilities that will drive your transformation,
                  we call them enablers.
                  <br />
                  <br />
                  <b>Data:</b> Determine how data can deliver new identified
                  value in the previous stages and identify technology that will
                  balance efficiency and agility without creating chaos.
                  <br />
                  <br />
                  <b>Talent:</b> Identifying key internal talent that will drive
                  agile innovations in a cross-functional collaboration with
                  design:success.
                  <br />
                  <br />
                  <b>Operating Model:</b> We co-create with you. The “new way of
                  working” to enable speed of both action and decision making,
                  collaboration across functions.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default ProcessSection;
