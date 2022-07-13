import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import Carousel from "../components/carousel/Carousel";
import ShishaMenu from "../components/menu/shishas/ShishaMenu";
import ImageGallery from "../components/image-gallery/ImageGallery";
import LineBreak from "../components/layout/linebreak/LineBreak";
import ContactForm from "../components/form/contact/ContactForm";

import { homePageContent } from "../repository/content";
import { subGallery } from "../repository/gallery";

import "./styles/Home.css";

export const Home = () => {
  return (
    <div>
      <Carousel />
      <Header />
      <ShishaSection />
      <PricesSection />
      <ShishaMenu />
      <PhotoGallerySection />
      <GatheringSection />
      <EventsSection />
    </div>
  );
};

const Header = () => {
  return (
    <Container fluid="lg" className="home-header">
      <Row className="justify-content-center">
        <Col xs={12} lg={7} className="justify-content-center">
          <Row className="justify-content-center">
            <Col>
              <h1>{homePageContent.mainHeaderTitle}</h1>
              <LineBreak />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={7}>
              <p>{homePageContent.mainHeaderDescription}</p>
            </Col>
            <Col xs={5}>
              <Row>
                <Col>
                  <h3>
                    <AiOutlineFieldTime style={{ color: "#af9a7d" }} /> When
                  </h3>
                  <h6>Wednesday - Friday </h6>
                  <p>18:00 - 22:00</p>
                  <h6>Saturday</h6>
                  <p>12:00 - 22:00</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>
                    <GoLocation style={{ color: "#af9a7d" }} /> Where
                  </h3>
                  <h6>10 Manvers St Bath BA1 1JQ</h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          xs={12}
          md={8}
          lg={5}
          className="justify-content-center col-reservation-form"
        >
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

const ShishaSection = () => {
  return (
    <Container fluid className="home-shisha-section">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} className="home-shisha-section-col">
          <h1>{homePageContent.shishaSectionTitle}</h1>
          <div className="vertical-line-banner"></div>
          <p>{homePageContent.shishaSectionDescription}</p>
          <Link to="/the-terrace/">
            <button type="button" className="btn-primary-main">
              Our Flavours
            </button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

const PricesSection = () => {
  return (
    <Container fluid className="home-prices-section">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} className="home-prices-section-col">
          <h1>{homePageContent.pricesSectionTitle}</h1>
          <div className="vertical-line-banner"></div>
          <p>{homePageContent.pricesSectionDescription}</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={10} md={3} className="home-prices-section-col-drinks">
          <h3>Cocktails</h3>
          <h1>Two for £13</h1>
          <h6>One for £7</h6>
        </Col>
        <Col xs={10} md={3} className="home-prices-section-col-drinks">
          <h3>Shots</h3>
          <h1>Five for £12</h1>
          <h6>One for £3</h6>
        </Col>
        <Col xs={10} md={3} className="home-prices-section-col-drinks">
          <h3>Shishas</h3>
          <h1>Two Flavours for £25</h1>
          <h6>More flavours at an extra cost</h6>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={"auto"} className="prices-section-button">
          <Link to="/the-earl/">
            <button type="button" className="btn-primary-main">
              Drinks Menu
            </button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

const PhotoGallerySection = () => {
  return (
    <Container fluid className="home-gallery-section">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} className="home-prices-section-col">
          <h1>{homePageContent.gallerySectionTitle}</h1>
          <div className="vertical-line-banner"></div>
          <p>{homePageContent.gallerySectionDescription}</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={"auto"} className="home-gallery-section-button">
          <Link to="/gallery/">
            <button type="button" className="btn-primary-main">
              Gallery
            </button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <ImageGallery gallery={subGallery} />
        </Col>
      </Row>
    </Container>
  );
};

const GatheringSection = () => {
  return (
    <Container fluid className="home-group-hangout-section">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} className="home-group-hangout-section-col">
          <h1>{homePageContent.groupHangoutSectionTitle}</h1>
          <div className="vertical-line-banner"></div>
          <p>{homePageContent.groupHangoutSectionDescription}</p>
        </Col>
      </Row>
    </Container>
  );
};

const EventsSection = () => {
  return (
    <Container fluid className="home-gallery-section">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} className="home-prices-section-col">
          <h1>{homePageContent.ourEventsSectionTitle}</h1>
          <div className="vertical-line-banner"></div>
          <p>{homePageContent.ourEventsSectionDescription}</p>
        </Col>
      </Row>
      <Row className="footer-inner-row">
        <Col className="home-prices-section-col">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/bathshisha"
          >
            <FaFacebook style={{ fontSize: "2rem", color: "rgb(34,34,34)" }} />
          </a>{" "}
          Follow us on Facebook
        </Col>
      </Row>
      <Row className="footer-inner-row">
        <Col className="home-prices-section-col">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/explore/locations/520782010/the-earl-cocktail-bar-in-bath/"
          >
            <AiFillInstagram
              style={{ fontSize: "2rem", color: "rgb(34,34,34)" }}
            />
          </a>{" "}
          Follow us on Instagram
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(Home);
