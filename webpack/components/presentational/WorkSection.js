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
              Award-winning money and life management application. Innovated
              &amp; programmed from a-to-z.
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
              Revolutionary way to find, book and save when looking for a
              dentist. Concept, UI and backbone innovation.
            </p>
          </div>
          <div className="gradient right bottom">
            <ClientAmigoHealth />
            <p>
              An innovation from a-to-z giving everyone access to see a doctor
              online in a revolutionary simple and extremely inexpensive way.
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
            Development of a concierge application and service for physicians and psychiatrists for world’s largest manufacturer of anti-depressants.  
            </p>
          </div>
          <div className="image" />
          <div className="video" onClick={() => this.doOpenModal(143683357)}>
            <PlayButton />
          </div>
          <div className="gradient right">
            <ClientMyBlueDoctor />
            <p>
            Creation of first cross functional and IT agnostic booking system. Easy for patients and easy for doctors’ offices.             </p>
          </div>
          <div className="image" />
          <div className="gradient top">
            <ClientNovoNordisk />
            <p>
            Development of first cross-target application for Novo Nordisk; connecting patients and endocrinologists / doctors in a natural and intuitive way. Increasing compliance and interaction.            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default WorkSection;
