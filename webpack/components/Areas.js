import React, { Component } from "react";
import AreasModal from "./areasModal";
import Graphic6 from "./../../assets/img/layout/graphic6.svg";
import Graphic7 from "./../../assets/img/layout/graphic7.svg";
import Graphic8 from "./../../assets/img/layout/graphic8.svg";
import Graphic9 from "./../../assets/img/layout/graphic9.svg";

const areasData = {
  areases: [
    {
      id: 1,
      title: "Customer Success Management",
      desc:
        "Our seamless delivery process is led by a team of experienced project managers who are adept to unite together the work of our strategy, design and development teams. Our experienced team is flexible to adopt client project procedures, adapting methodologies accordingly while implementing a Waterfall, Agile or Hybrid approach.",
      svg: <Graphic6 className="areasIcon" />
    },
    {
      id: 2,
      title: "Quality Assurance (QA)",
      desc:
        "To facilitate the delivery of a seamless experience and completely functional solution, our quality assurance team tests all apps to ensure they adhere strictly to your specifications and requirements.</br>Our QA team’s extensive testing process involves using a combination of manual and automated methods, throughout the development process, to ensure the creation of best in class mobile apps.",
      svg: <Graphic8 className="areasIcon" />
    },
    {
      id: 3,
      title: "Continuous improvement",
      desc:
        "As a standard, D:S integrates analytics into every solution that is created. We maintain and ensure the evolution of your digital solution is a continual process. </br>We understand that your solution will require updates based on user behavior. We offer thorough understanding of the analytics available, delivered through our support and maintenance offerings.",
      svg: <Graphic9 className="areasIcon" />
    }
  ]
};

class areas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedareas: "",
      modalToggled: false
    };
  }

  closeModal() {
    this.setState({
      modalToggled: false
    });
  }

  nextModal(selected) {
    var index = areasData.areases.indexOf(selected);
    if (index + 2 > areasData.areases.length) {
      var nextareasName = areasData.areases[0];
    } else {
      var nextareasName = areasData.areases[index + 1];
    }
    this.setState({
      selectedareas: nextareasName
    });
  }

  prevModal(selected) {
    var index = areasData.areases.indexOf(selected);
    if (index - 1 < 0) {
      var nextareasName = areasData.areases[areasData.areases.length - 1];
    } else {
      var nextareasName = areasData.areases[index - 1];
    }
    this.setState({
      selectedareas: nextareasName
    });
  }

  toggleModal(selected) {
    if (window.innerWidth < 1000) {
      this.setState({
        modalToggled: true,
        selectedareas: selected
      });
    }
  }

  render() {
    var areasesList = areasData.areases.map((areas, index) => (
      <li
        className="areas"
        key={areas.id}
        onClick={() => this.toggleModal(areas)}
      >
        {areas.svg}
        <h3 dangerouslySetInnerHTML={{ __html: areas.title }} />
        <Graphic7 className="backIcon" />
        <p dangerouslySetInnerHTML={{ __html: areas.desc }} />
      </li>
    ));
    var areasModal = (
      <AreasModal
        areas={this.state.selectedareas}
        areases={areasData.areases}
        changeareas={this.toggleModal.bind(this)}
        prevModal={this.prevModal.bind(this)}
        nextModal={this.nextModal.bind(this)}
        closeModal={this.closeModal.bind(this)}
      />
    );
    var areasList = (
      <ul className={"areasList " + mobileAway}>{areasesList}</ul>
    );

    var isModalToggled = this.state.modalToggled ? areasModal : areasList;
    var mobileAway = this.state.modalToggled ? "hideMe" : null;
    return <div className="areasContainer">{isModalToggled}</div>;
  }
}

export default areas;
