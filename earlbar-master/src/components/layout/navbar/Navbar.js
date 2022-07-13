import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";

import logo from "../../../images/logos/earl-bar-logo.png";

import "./Navbar.css";

class Navbar extends Component {
  pageNames = {
    home: "/home",
    theEarl: "/the-earl/",
    theTerrace: "/the-terrace/",
    gallery: "/gallery/",
    contactUs: "/contact-us/",
  };

  state = {
    isOpen: false,
    currentActive: window.location.pathname,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  swapPage = (page) => {
    this.setState({ currentActive: page });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <div className="nav-logo-container">
                <img src={logo} alt="Earlbar" className="nav-logo" />
              </div>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li onClick={this.state.isOpen ? this.handleToggle : null}>
              <Link
                className={
                  this.state.currentActive === this.pageNames.home
                    ? "nav-links-li-active"
                    : null
                }
                to="/home"
                onClick={() => this.swapPage(this.pageNames.home)}
              >
                Home
              </Link>
            </li>
            <li onClick={this.state.isOpen ? this.handleToggle : null}>
              <Link
                className={
                  this.state.currentActive === this.pageNames.theEarl
                    ? "nav-links-li-active"
                    : null
                }
                to="/the-earl/"
                onClick={() => this.swapPage(this.pageNames.theEarl)}
              >
                The Earl Cocktail Bar
              </Link>
            </li>
            <li onClick={this.state.isOpen ? this.handleToggle : null}>
              <Link
                className={
                  this.state.currentActive === this.pageNames.theTerrace
                    ? "nav-links-li-active"
                    : null
                }
                to="/the-terrace/"
                onClick={() => this.swapPage(this.pageNames.theTerrace)}
              >
                The Terrace Shisha Bar
              </Link>
            </li>
            <li onClick={this.state.isOpen ? this.handleToggle : null}>
              <Link
                className={
                  this.state.currentActive === this.pageNames.gallery
                    ? "nav-links-li-active"
                    : null
                }
                to="/gallery/"
                onClick={() => this.swapPage(this.pageNames.gallery)}
              >
                Gallery
              </Link>
            </li>
            <li onClick={this.state.isOpen ? this.handleToggle : null}>
              <Link
                className={
                  this.state.currentActive === this.pageNames.contactUs
                    ? "nav-links-li-active"
                    : null
                }
                to="/contact-us/"
                onClick={() => this.swapPage(this.pageNames.contactUs)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
