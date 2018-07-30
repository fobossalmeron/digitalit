import React, { Component } from "react";
import Graphic2 from "./../../assets/img/layout/graphic2.svg";

class AreasModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var areas = this.props.areas;
    var areasList = this.props.areases.map((areas, index) => ( 
      <li key={areas.id + "listed"} onClick={() => this.props.changeareas(areas)}>
        <span>{areas.id}</span> 
        <p>{areas.title}</p> 
      </li>
    ));
    var areasId = "areas" + areas.id
    var svg = areas.svg
    return (
      <div className="areasModal">
          <a className="close" onClick={() => this.props.closeModal()}></a>
          <a className="next" onClick={() => this.props.nextModal(areas)}></a>
          <a className="next prev" onClick={() => this.props.prevModal(areas)}></a>

          <h3 dangerouslySetInnerHTML={{ __html: areas.title }}></h3>
          {svg}
          <p dangerouslySetInnerHTML={{ __html: areas.desc }}></p>
      </div>
    );
  }
}

export default AreasModal
