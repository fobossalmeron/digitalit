import React, { Component } from "react";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import PlayButton from "./../../../assets/img/layout/playButton.svg";
import ClientMoneyAmigo from "./../../../assets/img/clients/clientMoneyAmigo.svg";
import ClientAmigoHealth from "./../../../assets/img/clients/clientAmigoHealth.svg";
import ClientFindSmile from "./../../../assets/img/clients/clientFindSmile.svg";
import ClientLudbeck from "./../../../assets/img/clients/clientLudbeck.svg";
import ClientMyBlueDoctor from "./../../../assets/img/clients/clientMyBlueDoctor.svg";
import ClientNovoNordisk from "./../../../assets/img/clients/clientNovoNordisk.svg";

Modal.setAppElement("#app");
class WorkSection extends Component {
  constructor() {
    super();
    this.state = {
      chosenVideo: ""
    };
    this.doOpenModal = this.doOpenModal.bind(this);
    this.doCloseModal = this.doCloseModal.bind(this);
  }
  doOpenModal(video) {
    this.setState({ chosenVideo: video });
    this.props.openModal();
  }

  doCloseModal() {
    this.props.closeModal();
  }
  render() {
    return (
      <section id="work">
        <Modal
          isOpen={this.props.modalOpen}
          onRequestClose={this.doCloseModal}
          contentLabel="Video Modal"
          className="modal"
          overlayClassName="overlay"
          onClick={this.doCloseModal}
        >
          <a className="close" onClick={this.doCloseModal} />
          <ReactPlayer
            className="video"
            url={`https://vimeo.com/${this.state.chosenVideo}`}
            playing={true}
          />
        </Modal>
        <div className="clients">
          <ClientMoneyAmigo />
          <ClientAmigoHealth />
          <ClientFindSmile />
          <ClientLudbeck />
          <ClientMyBlueDoctor />
          <ClientNovoNordisk />
        </div>
        <div className="workScreen screen">
          <div className="image moneyAmigoImage" />
          <div className="gradient left bottom">
            <ClientMoneyAmigo />
            <p>
              An award-winning money and life management application. Innovated
              & programmed from A-to-Z.
            </p>
          </div>
          <div className="video" onClick={() => this.doOpenModal(228273116)}>
            <PlayButton />
          </div>
          <div className="video" onClick={() => this.doOpenModal(237994898)}>
            <PlayButton />
          </div>
          <div className="gradient top">
            <ClientFindSmile />
            <p>
              A revolutionary new way to find, book and save when needing a
              dentist. Concept, UI and backbone innovation.
            </p>
          </div>
          <div className="gradient right bottom">
            <ClientAmigoHealth />
            <p>
              An A-to Z innovation giving anyone online access to see a doctor
              in a revolutionary and extremely simple, inexpensive way.
            </p>
          </div>
          <div className="image" />
          <div
            className="video"
            onClick={() => this.doOpenModal("272768882/fe0d45cb69")}
          >
            <PlayButton />
          </div>
        </div>
        <div className="workScreen workFollow screen">
          <div className="image" />
          <div className="gradient left bottom">
            <ClientLudbeck />
            <p>
              A concierge application and service for physicians & psychiatrists
              of the world’s largest manufacturer of anti-depressants.
            </p>
          </div>
          <div className="image" />
          <div className="video" onClick={() => this.doOpenModal(143683357)}>
            <PlayButton />
          </div>
          <div className="gradient right">
            <ClientMyBlueDoctor />
            <p>
              Creation of first cross functional and IT agnostic booking system.
              Easy for patients and doctor’s officer alike.
            </p>
          </div>
          <div className="image" />
          <div className="gradient top">
            <ClientNovoNordisk />
            <p>
              Development of Novo Nordisk’s first cross-target application;
              connecting patients, endocrinologists and doctors in a natural,
              intuitive way. Increasing interaction and patient compliance.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default WorkSection;
