<div>
<section id="trustedby">
  <div className="firstColumned">
    <div>
        <p><span>“</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
        magna aliquam erat volutpat.<span>“</span></p>
        <label>-Jack Albert. CEO “globalinc”</label>
      </div>
      <div>
        <p><span>“</span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
        magna aliquam erat volutpat.<span>“</span></p>
        <label>-Jack Albert. CEO “globalinc”</label>
  </div>
  </div>
          <div className="trustedGrid">
            <ReactSVG path={withPrefix("/svg/clients/clientCocaCola.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientPepsico.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientChanel.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientBoss.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientPrada.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientKraft.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientSanofi.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientPfizer.svg")} />
            <VideoPlayer />
            <ReactSVG path={withPrefix("/svg/clients/clientNovartis.svg")} />
            <div>
              <ReactSVG
                wrapperClassName="hasDetailBox"
                path={withPrefix("/svg/clients/clientNike.svg")}
              />
              <p className="detailBox">
                NIKE. Insight and innovation exploration of running and female
                apparel. Identified winning concepts for future trends and
                business segments
              </p>
            </div>
            <ReactSVG path={withPrefix("/svg/clients/clientMoneyGram.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientCapitalOne.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientBaseF.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientAmigoinc.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientBMW.svg")} />
            <ReactSVG path={withPrefix("/svg/clients/clientCampbells.svg")} />
          </div>
</section>
<section id="engage">
          <ReactSVG
            wrapperClassName="engageLogo"
            path={withPrefix("/svg/layout/sportsDirect.svg")}
          />
          <h2>challenges welcome</h2>
          <div className="locationContact">
            <ul className="chooseList">
              <li>las vegas</li>
              <li>mexico city</li>
              <li>copenhaguen</li>
              <li>singapore</li>
            </ul>
            <p>universal number: +1-702 802 0200</p>
            <p>
              <a href="mailto:success@designsuccess.com">
                success@designsuccess.com
              </a>
            </p>
          </div>
          <ContactForm/>
          <ReactSVG
            wrapperClassName="locationMap"
            path={withPrefix("/svg/layout/locationMap.svg")}
          />
</section>
<footer>
          <div className="socialList">
            <ReactSVG
              wrapperClassName="socialIcon"
              path={withPrefix("/svg/social/facebook.svg")}
            />
            <ReactSVG
              wrapperClassName="socialIcon"
              path={withPrefix("/svg/social/vimeo.svg")}
            />
            <ReactSVG
              wrapperClassName="socialIcon"
              path={withPrefix("/svg/social/youtube.svg")}
            />
            <ReactSVG
              wrapperClassName="socialIcon"
              path={withPrefix("/svg/social/instagram.svg")}
            />
            <ReactSVG
              wrapperClassName="socialIcon"
              path={withPrefix("/svg/social/linkedin.svg")}
            />
            <ReactSVG
              wrapperClassName="socialIcon"
              path={withPrefix("/svg/social/twitter.svg")}
            />
          </div>
          <p>
            © design success international ds worldwide consulting llc. all
            rights reserved. <a>privacy of use</a> | <a>terms & conditions</a>
          </p>
</footer>
</div>
    );
  }
}

export default IndexPage;
