import React, { Component } from "react";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import PlayButton from "svg-react-loader?name=PlayButton!../../../assets/img/layout/playButton.svg";
import ClientMoneyAmigo from "svg-react-loader?name=ClientMoneyAmigo!../../../assets/img/clients/clientMoneyAmigo.svg";
import ClientAmigoHealth from "svg-react-loader?name=ClientAmigoHealth!../../../assets/img/clients/clientAmigoHealth.svg";
import ClientFindSmile from "svg-react-loader?name=ClientFindSmile!../../../assets/img/clients/clientFindSmile.svg";
import ClientLudbeck from "svg-react-loader?name=ClientLudbeck!../../../assets/img/clients/clientLudbeck.svg";
import ClientMyBlueDoctor from "svg-react-loader?name=ClientMyBlueDoctor!../../../assets/img/clients/clientMyBlueDoctor.svg";
import ClientNovoNordisk from "svg-react-loader?name=ClientNovoNordisk!../../../assets/img/clients/clientNovoNordisk.svg";

Modal.setAppElement("#app");
class WorkSection extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      chosenVideo: ""
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal(video) {
    this.setState({ modalIsOpen: true, chosenVideo: video });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {
    return (
      <section id="work">
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Video Modal"
          className="modal"
          overlayClassName="overlay"
          onClick={this.closeModal}
        >
          <a className="close" onClick={this.closeModal} />
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
          <div className="video" onClick={() => this.openModal(228273116)}>
            <PlayButton />
          </div>
          <div className="video" onClick={() => this.openModal(237994898)}>
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
            onClick={() => this.openModal("272768882/fe0d45cb69")}
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
          <div className="video" onClick={() => this.openModal(143683357)}>
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
            Development of first cross-target application for Novo Nordisk; connecting patients and endocrinologists/doctors in a natural and intuitive way. Increasing compliance and interaction.            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default WorkSection;
