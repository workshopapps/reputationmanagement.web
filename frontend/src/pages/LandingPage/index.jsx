import React from "react";
import PageLayout from "../../layout/pageLayout";
import {
  HeroSection,
  HowDoesItWork,
  StyledLandingPage,
} from "./LandingPage.styled";

const LandingPage = () => {
  return (
    <PageLayout>
      <StyledLandingPage>
        <HeroSection>
          <h1>
            We help you maintain your <span>brand’s</span> reputation
          </h1>
          <p>
            Get your business to the next level, by removing every bad review
            that is getting in the way, our lawyers are here to help you
            maintain your brand’s reputation.
          </p>

          <div className="hero-button">Get a quote</div>
        </HeroSection>

        <HowDoesItWork>
          <h1>How does it work?</h1>
        </HowDoesItWork>
      </StyledLandingPage>
    </PageLayout>
  );
};

export default LandingPage;
