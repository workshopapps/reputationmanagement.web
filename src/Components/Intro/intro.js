import React from "react";
import imageWeb from "../../assets/intro-image-web.png";
import star from "../../assets/shooting-star.png";
import starWeb from "../../assets/shooting-star-web.png";
import Row from "../styles/Row.style";
import Col from "../styles/Col.style";
import PositionRelative from "../styles/PositionRelative.style";
import IntroCenter from "../styles/IntroCenter.style";
import IntroTitle from "../styles/IntroTitle.styles";
import IntroSub from "../styles/IntroSub.style";
import IntroTitleSpecial from "../styles/IntroTitleSpecial.style";
import IntroSection from "../styles/IntroSection.style";
import Hero from "../styles/Hero.style";
import Container from "../styles/Container.style";
import TextAlignLG from "../styles/TextAlignLG.style";
import Button from "../styles/Button.style";
import IntroImg from "../styles/IntroImg.style";
import Img from "../styles/Img.style";
const Intro = () => {
  return (
    <IntroSection>
      <Container>
        <Row>
          <Hero>
            <Col>
              <PositionRelative>
                <IntroTitle>
                  Get rid of negative comments
                  <IntroTitleSpecial> today</IntroTitleSpecial>
                </IntroTitle>
                <IntroSub>
                  We offer services that improve your brand’s image; they
                  include reviewing and sorting negative comments about your
                  business.
                </IntroSub>
                <PositionRelative>
                  <TextAlignLG align="left">
                    <Button
                      type="button"
                      className="btn btn-primary learn-more"
                    >
                      Learn More
                    </Button>

                    <Img
                      src={star}
                      alt="shooting-star"
                      className="img-fluid d-lg-none position-absolute"
                      id="shooting_star"
                    />
                    <Img
                      src={starWeb}
                      alt="shooting-star"
                      className="img-fluid d-none d-lg-inline-block position-absolute"
                      id="shooting_star_web"
                    />
                  </TextAlignLG>
                  
                </PositionRelative>
              </PositionRelative>
            </Col>
            <Col>

              <IntroImg>
               
                <Img
                  src={imageWeb}
                  alt="smiling-girl"
                  className="img-fluid"
                />

              </IntroImg>
              </Col>
          </Hero>
        </Row>
      </Container>
    </IntroSection>
  );
};

export default Intro;
