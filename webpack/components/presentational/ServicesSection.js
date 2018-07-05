import React, { Component } from "react";
import Areas from "./../Areas";

class ServicesSection extends Component {
  render() {
    return (
      <section id="serviceareas">
        <div className="screen4 screen">
          <h2>service areas</h2>
          <p className="main">
            Our overall passion is to take complex back-end solutions and make
            them into beautifully designed and naturally flowing digital
            experiences:
          </p>
          <h3>Innovation Lab</h3>
          <p>
            Utilizing patented validation process and methodologies the
            innovation:lab™ create tangible disruptive digital innovations –
            Cutting 4+ months of any digital solution and with predetermined
            scope and budget.
          </p>
          <h3>Enterprise Services</h3>
          <p>
            DS is recognized for its in-house, end-to-end developers, UX experts
            and QA engineers, delivering intuitive, intelligent solutions as
            well as for their scalable and secure integration capabilities.
          </p>
          <h3>User Experience and User Interface (UX/UI)</h3>
          <p>
            User expectations increase daily; wanting things faster, easier,
            smarter. We exist to make that happen, wand our UI/UX experts employ
            a user-centric approach in developing ‘the perfect’ next evolution
            of experiences. “Less is more” is our motto to design and create
            faster and smarter deep engagement.
          </p>
          <h3>Development</h3>
          <p>
            We prioritize optimal performance and security, to deliver robust,
            functional solutions to the enterprise.
          </p>
        </div>
        <div className="screen5 screen">
          <p>
            We deliver full-stack and full-service solutions thanks to our
            multidisciplinary and talented team formed by:
          </p>
          <div className="columns">
            <h4>Experience Design</h4>
            <ul>
              <li>UX Designers</li>
              <li>UI Designers</li>
              <li>UX Testers</li>
            </ul>
            <h4>Engineering</h4>
            <ul>
              <li>Mobile developers</li>
              <li>Web developers</li>
              <li>Backend Engineers</li>
              <li>Database Administrators</li>
              <li>Cloud &amp; Infrastructure engineers</li>
              <li>Machine learning engineers</li>
              <li>DevOps</li>
              <li>Testers</li>
            </ul>
            <h4>Business Growth</h4>
            <ul>
              <li>Business consultants</li>
              <li>Digital Marketers</li>
              <li>Mobile Marketers</li>
              <li>Project Managers</li>
              <li>Growth Hackers</li>
            </ul>
          </div>
        </div>
        <div className="screen6 screen">
          <p>
            We are obsessed with high availability, scalability, security and
            performance that is why we work with world’s most advanced
            technology to achieve it:
          </p>
          <div className="columns">
            <h4>Web</h4>
            <ul>
              <li>Angular</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Stylus</li>
              <li>Backbone</li>
              <li>Bootstrap</li>
              <li>JQuery</li>
            </ul>
            <h4>Mobile</h4>
            <ul>
              <li>Swift</li>
              <li>Objective C</li>
              <li>Cocoa pods</li>
              <li>Android</li>
              <li>Java</li>
              <li>Unity</li>
            </ul>
            <h4>
              Server side <br />&amp; Backend
            </h4>
            <ul>
              <li>NodeJS</li>
              <li>Django</li>
              <li>Ruby on Rails</li>
              <li>Java</li>
              <li>PHP</li>
              <li>Python</li>
            </ul>
            <h4>Databases</h4>
            <ul>
              <li>Oracle</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Casandra</li>
              <li>Neo4J</li>
            </ul>
            <h4>Scalability</h4>
            <ul>
              <li>Redis</li>
              <li>Hadoop</li>
              <li>Elastic Search</li>
              <li>Elastic load </li>
              <li>Balancing</li>
              <li>Auto-scaling</li>
              <li>Nginx</li>
              <li>DevOps</li>
              <li>Memcache</li>
            </ul>
            <h4>Clouds</h4>
            <ul>
              <li>Amazon AWS</li>
              <li>Google Cloud</li>
              <li>Rackspace</li>
            </ul>
          </div>
        </div>
        <div className="screen7 screen">
          <h3>Functional prototyping</h3>
          <p>
            Fast and agile prototyping, DS facilitates a multidisciplinary team
            of experts to prototype a concept and test it with real (existing
            and potential) customer. Validating UI, experience, product and
            business model.
          </p>
          <h3>AI (Artificial Intelligence) Technologies</h3>
          <p>
            Our AI experts navigate our clients from the ins-and-outs of the
            landscape, the possibilities, all the way to fully developed and
            deployed AI solutions.
          </p>
          <div className="subbed">
            <h4>Pre-emptive action / response</h4>
            <p>
              Conversational AI empowered by AIEEDA. (Artificial Intelligence
              Engagement Engine with Data Analytics) Exclusively developed by
              design:success AIEEDA can engage responsive across all
              communication channels, ranging from traditional call centers and
              email support to social media, messaging apps, and even smart
              connected devices. Utilizing voice and text and across multiple
              languages
            </p>
            <h4>Virtual Agents</h4>
            <p>
              Development of Virtual agents; conversational computer programs
              that interact directly with a customer without human intervention.
              Manage spikes in demand without the need to hire additional
              agents. DS CSA Agents understands 12 languages and can be
              connected with virtually any text-based platform
            </p>
            <h4>Voice user Interface</h4>
            <p>
              Enables corporates to delivery consumer driven solutions empowered
              by DS CSA through voice enabled devices such as Amazon Echo,
              Google Home, Google Assistant or IVR
            </p>
          </div>
          <h3>Hyperlocation</h3>
          <p>
            Hyperlocation DS partners with clients to innovate with
            location-targeted technology to create hyperlocal contextual
            experiences, to drive better business intelligence, engage the end
            user and deliver proximity-based targeting and content delivery:
          </p>
          <div className="inMenu">
            <h4>Indoor Navigation</h4>
            <h4>Beacon Technology</h4>
            <h4>Contextual IoT</h4>
          </div>
          <h3>Integration</h3>
          <p>
            Integration We ensure that complex and intelligent solutions that
            require the application to communicate with an online resource in
            some way, including CRM, ERP such SAP or back-end systems.
            <br />
            <br />
            DS understands the complexities of integrating with back-end systems
            and have the in-house skills and experience to employ full-scale
            integration; designing and building robust APIs and mobile ready
            back-ends.
          </p>
        </div>
        <div className="screen8 screen">
        <h2>service areas</h2>
        <Areas/>
        </div>
      </section>
    );
  }
}

export default ServicesSection;
