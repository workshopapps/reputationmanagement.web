import React from "react";
import "./specialOffers.css";
import card1 from "../../assets/specialoffers1.png";
import card1Web from "../../assets/specialoffers-web1.png";
import card2 from "../../assets/specialoffers2.png";
import card2Web from "../../assets/specialoffers-web2.png";
import card3 from "../../assets/specialoffers3.png";
import card3Web from "../../assets/specialoffers-web3.png";
import arrow from "../../assets/right-arrow.png";
const SpecialOffers = () => {
  return (
    <section
      className="container-xxl mx-xxl-auto text-center"
      id="special_offers_section"
    >
      <p className="hwfi-title">SERVICES</p>

      <p className="hwfi-subtitle">Special Offers</p>

      <div className="card card-special-offers">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img
              src={card1}
              className="card-img-top img-fluid d-lg-none"
              alt="title card"
            />
            <img
              src={card1Web}
              className="card-img-top img-fluid d-none d-lg-flex"
              alt="title card"
            />
          </div>
          <div className="col-12 col-lg-6 position-relative">
            <div className="special-offers-center">
              <div className="card-body text-start card-body-special-offers ">
                <h5 className="card-title card-title-special-offers">
                  Remove Negative Google Reviews
                </h5>
                <p className="card-text card-text-special-offers">
                  You can remove troll comments that defame your brand and
                  business either on the play store or any other google review
                  enabled platforms
                </p>
                <a href="#?" className="special-offers-learn-more">
                  Learn More
                  <img
                    src={arrow}
                    className="d-inline img-fluid special-offers-learn-more-arrow"
                    alt="right-arrow"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-special-offers">
        <div className="row">
          <div className="col-12 col-lg-6 d-lg-none">
            <img
              src={card2}
              className="card-img-top img-fluid"
              alt="title card"
            />
          </div>
          <div className="col-12 col-lg-6 position-relative">
            <div className="special-offers-center">
              <div className="card-body text-start card-body-special-offers-middle-card">
                <h5 className="card-title card-title-special-offers">
                  Reliable Google Search Removal
                </h5>
                <p className="card-text card-text-special-offers">
                  Remove bad google search results about your business from the
                  internet, our expert service got you covered.
                </p>
                <a href="#?" className="special-offers-learn-more">
                  Learn More
                  <img
                    src={arrow}
                    className="d-inline img-fluid special-offers-learn-more-arrow"
                    alt="right-arrow"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-none d-lg-block ">
            <img
              src={card2Web}
              className="card-img-top img-fluid d-none d-lg-flex"
              alt="title card"
            />
          </div>
        </div>
      </div>
      <div className="card card-special-offers card-special-offers-last">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img
              src={card3}
              className="card-img-top img-fluid d-lg-none"
              alt="title card"
            />
            <img
              src={card3Web}
              className="card-img-top img-fluid d-none d-lg-flex"
              alt="title card"
            />
          </div>
          <div className="col-12 col-lg-6 position-relative">
            <div className="special-offers-center">
              <div className="card-body text-start card-body-special-offers ">
                <h5 className="card-title card-title-special-offers">
                  Remove Bad Glassdoor Reviews
                </h5>
                <p className="card-text card-text-special-offers">
                  We can also help to remove bad reviews on the Glassdoor
                  platform about your business.
                </p>
                <a href="#?" className="special-offers-learn-more">
                  Learn More
                  <img
                    src={arrow}
                    className="d-inline img-fluid special-offers-learn-more-arrow"
                    alt="right-arrow"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
