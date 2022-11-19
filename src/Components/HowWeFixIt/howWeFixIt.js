import React from "react";
import "./howWeFixIt.css";
import connector from "../../assets/Connector.png";
import step1 from "../../assets/step1icon.png";
import connectorWeb1 from "../../assets/ConnectorWeb1.png";
import connectorWeb2 from "../../assets/ConnectorWeb2.png";
import Section from "../styles/Section.style";
import Div from "../styles/Div.style";
import Img from "../styles/Img.style";
import P from "../styles/P.style";
import Button from "../styles/Button.style";
const HowWeFixIt = () => {
  return (
    <Section
      className="container-xxl mx-xxl-auto text-center"
      id="how_we_fix_it_section"
    >
      <P className="hwfi-title">GETTING STARTED</P>

      <P className="hwfi-subtitle">How We Fixit</P>

      <Div id="steps_with_button" className="container mx-auto">
        <Div className="row">
          <Div className="card card-hwfi col-lg-4 ">
            <Div>
              <p className="hwfi-card-title">#1 Lodge Complaint</p>
              <p className="hwfi-card-text">
                Fill a request form with details of the negative review and the
                reviewer.
              </p>
            </Div>
            <Div className="position-absolute top-0 start-0 translate-middle">
              <Img src={step1} alt="step1 icon" />
            </Div>
          </Div>
        </Div>
        <Div>
          <Img
            src={connector}
            className="connector-mobile"
            alt="dotted-connector"
          />
          <Img
            src={connectorWeb1}
            className="connector-web"
            alt="dotted-connector"
          />
        </Div>
        <Div className="row justify-content-lg-end">
          <Div className="card card-hwfi col-lg-4 ">
            <Div>
              <p className="hwfi-card-title">#2 Case Gets Assigned</p>
              <p className="hwfi-card-text">
                A legal practitioner or lawyer in our professional pool gets
                assigned your case and then liaises with the reviewer.
              </p>
            </Div>
            <Div className="position-absolute top-0 start-100 translate-middle">
              <Img src={step1} alt="step1 icon" />
            </Div>
          </Div>
          <Div>
            <Img
              src={connector}
              className="connector-mobile"
              alt="dotted-connector"
            />
            <Img
              src={connectorWeb2}
              className="connector-web"
              alt="dotted-connector"
            />
          </Div>
        </Div>
        <Div className="row">
          <Div className="card card-hwfi col-lg-4">
            <Div>
              <p className="hwfi-card-title">#3 Monitor Progress</p>
              <p className="hwfi-card-text">
                Here, there is an opportunity to see how far your case has
                gotten, from your dashboard. You can also discuss with our
                lawyer on the options you can consider.
              </p>
            </Div>
            <Div className="position-absolute top-0 start-0 translate-middle">
              <Img src={step1} alt="step1 icon" />
            </Div>
          </Div>
          <Div>
            <Img
              src={connector}
              className="connector-mobile"
              alt="dotted-connector"
            />
            <Img
              src={connectorWeb1}
              className="connector-web"
              alt="dotted-connector"
            />
          </Div>
        </Div>
        <Div className="row justify-content-lg-end">
          <Div className="card card-hwfi col-lg-4">
            <Div>
              <p className="hwfi-card-title">#4 Make Payment</p>
              <p className="hwfi-card-text">
                Payment is made only after the negative review has been taken
                down.
              </p>
            </Div>
            <Div className="position-absolute top-0 start-100 translate-middle">
              <Img src={step1} alt="step1 icon" />
            </Div>
          </Div>
        </Div>
        <Div></Div>
      </Div>
      <Button type="button" className="btn btn-primary get-started">
        Get Started
      </Button>
    </Section>
  );
};
export default HowWeFixIt;
