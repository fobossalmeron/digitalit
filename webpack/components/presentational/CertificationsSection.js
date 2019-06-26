import React from "react";
import CertificationsPNG from "./../../../assets/img/layout/certifications.svg";

class CertificationSection extends React.Component {
  render() {
    return (
      <section id="certifications">
        <div className="screen9 screen">
          <p>
          The <b>design:success</b> team is formed by world-class certified creator, business strategist, design thinkers, and senior engineers recognized and certified by organizations such as ISO:9001, Apple, Google, Amazon AWS, IBM, Oracle, ITIL, Interaction Design Institute, Singularity University among others which allows us deploying in terms of weeks, not quarters.
          </p>
          <h2>certified by:</h2>
          <CertificationsPNG/>
        </div>
      </section>
    );
  } 
}

export default CertificationSection;
