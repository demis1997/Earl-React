import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

import ContactForm from "../components/form/contact/ContactForm";
import Banner from "../components/layout/banner/Banner";
import LineBreak from "../components/layout/linebreak/LineBreak";

import "./styles/ContactUs.css";

export const ContactUs = () => {
  return (
    <Container fluid className="contact-us-container">
      <Row>
        <Banner
          title="Contact Us"
          subtitle="Reach out to us or make a booking for a night out"
        />
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={3}>
          <Row>
            <Col className="contact-information-col">
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
        <Col xs={12} md={3}>
          <ContactForm />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <LineBreak />
      </Row>
    </Container>
  );
};

export default ContactUs;
