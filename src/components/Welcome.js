import React, { Component } from "react";

import "../styles/nav.css";

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <section class="main">
          <div class="colordiv">
            <div class="right"></div>
            <div class="left"></div>
          </div>
          <div class="maindisplay">
            <h1 class="title animated bounceIn slower">
              &#60;HELLO<span class="dot">.</span>/&#62;
            </h1>
            <p class="sub animated pulse">
              I am Izabayo Blaise,I'm an associate software engineer.
            </p>
          </div>
        </section>
      </div>
    );
  }
}
