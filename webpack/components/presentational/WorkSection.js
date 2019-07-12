import React, { Component } from "react";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import PlayButton from "./../../../assets/img/layout/playButton.svg";
import ClientMoneyAmigo from "./../../../assets/img/clients/clientMoneyAmigo.svg";
import ClientGoogleHome from "./../../../assets/img/clients/clientGoogleHome.svg";
import ClientGMFinancial from "./../../../assets/img/clients/clientGMFinancial.svg";
import ClientFinanmadrid from "./../../../assets/img/clients/clientFinanmadrid.svg";

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
          <ClientFinanmadrid />
          <ClientGMFinancial />
          <ClientMoneyAmigo />
          <ClientGoogleHome />
        </div>
        <h3>customer success stories examples</h3>
        <div className="workScreen screen">
          <div className="image moneyAmigoImage" />
          <div className="gradient">
            {// ey es aquí
            }
            <div className="left" />
            <div className="bottom" />
            <ClientFinanmadrid />
            <p>
              An online agile and flexible auto loan management platform that
              allowed Finanmadrid to adapt 3x faster and focus on growth without
              struggling.
            </p>
          </div>
          <div className="gradient">
          <div className="right" />
            <div className="bottom" />
            <ClientGMFinancial />
            <p>
              For GM customers, we created a dynamic app for Android and iPhone
              that allows them to select the right car based on their
              lifestyle. This app also enables access to car loans provided by
              GM Financial Services.
              <br />
              <br />
              For GM, it became a powerful tool to provide in-the-moment data to
              the Salesforce. Equipped with our hyper-location technology,
              customer are given a personalized experience according to their
              previous activity and interest. Sales reps receive relevant
              information about the customer in real-time, such as the type of
              the vehicle they are interested in, the number of visits and the
              status of their car loan application. This empowers the sales team
              with relevant data to provide a customer experience that has never
              been done before.
            </p>
          </div>
          <div className="image" />
        </div>
        <div className="workScreen workScreen2 screen">
          <div className="image" />
          <div className="gradient">
            <div className="right" />
            <div className="left" />
            <div className="bottom" />
            <ClientMoneyAmigo />
            <p>
              No branches, no tedious paperwork, no hidden fees, no problems. We
              built a mobile-only solution for all membership levels. For
              moneyamigo is was critical to be reachable to their customers
              thereby we help them to build the first banking assistant for
              Google Home, where customers can operate their account using their
              voice, all in a secure environment with PCI compliance and ISO
              27001 certification.
            </p>
          </div>
          <div className="image" />
          <div className="image" />
        </div>
        <div className="workScreen workScreen3 screen">
          <div className="image" />
          <div className="gradient">
            <div className="right" />
            <div className="left" />
            <div className="bottom" />
            <p>
              Our transform:now and innovation:lab process provides continuous
              progressive innovations into financial organizations by delivering
              ongoing transformation with new technology to enhance the customer
              experience. We simplify complicated or tedious experiences with
              our instant solutions such as enabling customers to send money
              with just the push of a button or by incorporating the process to
              make recurrent transfers from their smartwatch, and customers can
              even transfer money from their couch by using their Samsung Smart
              TV.{" "}
            </p>
          </div>
          <div className="image" />
          <div className="image" />
        </div>
      </section>
    );
  }
}

export default WorkSection;
