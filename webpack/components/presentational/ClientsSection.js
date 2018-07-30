import React, { Component } from 'react';
import NikeIcon from './../../../assets/img/clients/clientNike.svg';
import CocaColaIcon from './../../../assets/img/clients/clientCocaCola.svg';
import ChanelIcon from './../../../assets/img/clients/clientChanel.svg';
import MoneyGramIcon from './../../../assets/img/clients/clientMoneyGram.svg';
import CapitalOneIcon from './../../../assets/img/clients/clientCapitalOne.svg';
import BaseFIcon from './../../../assets/img/clients/clientBaseF.svg';
import NovartisIcon from './../../../assets/img/clients/clientNovartis.svg';
import DiageoIcon from './../../../assets/img/clients/clientDiageo.svg';
import KraftIcon from './../../../assets/img/clients/clientKraft.svg';
import PepsicoIcon from './../../../assets/img/clients/clientPepsico.svg';
import BMWIcon from './../../../assets/img/clients/clientBMW.svg';
import BossIcon from './../../../assets/img/clients/clientBoss.svg';


class StaticSection extends Component {

  render (){

    return (
        <section id="clients">
          <div className="column">
            <h3>we are trusted by</h3>
            <img src="assets/img/layout/yourlogohere.svg"/>
          </div>
          <ul>
            <li className="clientNike">Nike<NikeIcon/></li>
            <li className="clientCocaCola">Coca-Cola<CocaColaIcon/></li>
            <li className="clientChanel">Chanel<ChanelIcon/></li>
            <li className="clientMoneyGram">MoneyGram<MoneyGramIcon/></li>
            <li className="clientCapitalOne">CapitalOne<CapitalOneIcon/></li>
            <li className="clientBaseF">BaseF<BaseFIcon/></li>
            <li className="clientNovartis">Novartis<NovartisIcon/></li>
            <li className="clientDiageo">Diageo<DiageoIcon/></li>
            <li className="clientKraft">Kraft<KraftIcon/></li>
            <li className="clientPepsico">Pepsico<PepsicoIcon/></li>
            <li className="clientBMW">BMW<BMWIcon/></li>
            <li className="clientBoss">Boss<BossIcon/></li>
          </ul>
          <p className="manyMore">...and many more</p>
        </section>
    );
  }
};

export default StaticSection;
