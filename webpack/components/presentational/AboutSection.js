import React, { Component } from "react";
import NikeIcon from "svg-react-loader?name=NikeIcon!../../../assets/img/clients/clientNike.svg";
import CocaColaIcon from "svg-react-loader?name=CocaColaIcon!../../../assets/img/clients/clientCocaCola.svg";
import ChanelIcon from "svg-react-loader?name=ChanelIcon!../../../assets/img/clients/clientChanel.svg";
import MoneyGramIcon from "svg-react-loader?name=MoneyGramIcon!../../../assets/img/clients/clientMoneyGram.svg";
import CapitalOneIcon from "svg-react-loader?name=CapitalOneIcon!../../../assets/img/clients/clientCapitalOne.svg";
import BaseFIcon from "svg-react-loader?name=BaseFIcon!../../../assets/img/clients/clientBaseF.svg";
import NovartisIcon from "svg-react-loader?name=NovartisIcon!../../../assets/img/clients/clientNovartis.svg";
import DiageoIcon from "svg-react-loader?name=DiageoIcon!../../../assets/img/clients/clientDiageo.svg";
import KraftIcon from "svg-react-loader?name=KraftIcon!../../../assets/img/clients/clientKraft.svg";
import PepsicoIcon from "svg-react-loader?name=PepsicoIcon!../../../assets/img/clients/clientPepsico.svg";
import BMWIcon from "svg-react-loader?name=BMWIcon!../../../assets/img/clients/clientBMW.svg";
import BossIcon from "svg-react-loader?name=BossIcon!../../../assets/img/clients/clientBoss.svg";
import Graphic1 from "svg-react-loader?name=Graphic1!../../../assets/img/layout/graphic1.svg";
import Graphic2 from "svg-react-loader?name=Graphic2!../../../assets/img/layout/graphic2.svg";
import Graphic3 from "svg-react-loader?name=Graphic3!../../../assets/img/layout/graphic3.svg";
import Graphic4 from "svg-react-loader?name=Graphic4!../../../assets/img/layout/graphic4.svg";
import Graphic5 from "svg-react-loader?name=Graphic5!../../../assets/img/layout/graphic5.svg";

class AboutSection extends Component {
  render() {
    return (
      <section id="what&amp;how">
        <div className="screen1 screen">
          <p>
            Combining digital agency services and innovation business consulting
            we transform business process and end-user engagement successfully.
            From prototyping to enterprise solutions:
          </p>
          <Graphic1 />
        </div>
        <div className="screen2 screen">
          <ul>
            <li>
              <Graphic2 />
              <h3>reimagine</h3>
              <p>
                Utilizing design:success’ proprietary innovation process we
                identify innovation digital solutions. <br /> Rapid digital
                mock-ups, UI/UX’s and flow’s tested live with real consumers.
              </p>
            </li>
            <li>
              <Graphic3 />
              <h3>(re)invent</h3>
              <p>
                Based on deep insights and data we (re)invent the IT & digital
                experience from UI/UX front end to integration back-end – with
                in-depth architecture and flows.
              </p>
            </li>
            <li>
              <Graphic4 />
              <h3>realize</h3>
              <p>
                We design and build THE real experience and solution, and by
                clients choice either as functional prototyping or as final
                end-to-end enterprise product.
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
          <p>faster than any other innovation and IT process</p>
          <h3>repositioning</h3>
          <p>
            the brand, company and experience towards customers and investors
          </p>
          <h3>(r)evolutionize</h3>
          <p>
            changing the brand, category and experience forever – increasing
            ROI, faster
          </p>
        </div>
      </section>
    );
  }
}

export default AboutSection;
