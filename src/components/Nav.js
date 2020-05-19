import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/nav.css";
import image from "../images/head.jpg";
export default class Nav extends Component {
  render() {
    return (
      <nav className="animated fadeIn slower delay-1s">
        <ul>
          <div className="navWrap">
            <li>
              <div className="profile">
                <img src={image} alt="me" />
              </div>
              <Link to="/"> blaiserwanda</Link>
            </li>
            <div class="right">
              <li>
                <Link to="/CV" className="cv">
                  C.V
                </Link>
              </li>
            </div>
          </div>
        </ul>
      </nav>
    );
  }
}
