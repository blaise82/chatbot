import React, { Component } from "react";
import "../styles/nav.css";
export default class CV extends Component {
  render() {
    return (
      <div>
        <section className="main">
          <div class="colordiv">
            <div class="right"></div>
            <div class="left"></div>
          </div>
          <div className="cvdisplay">
            <div className="left">
              <br />
              <br />
              <div className="wrap">
                <p className="cvhead white">IZABAYO BLAISE</p>
                <p>Rwanda – Kigali - Remera</p>
                <p>Telephone: +25 0788716213</p>
                <p>Email:izabayoblaise82@gmail.com</p>
                <br />
                <p className="cvhead white">EDUCATION</p>
                <p>Degree: Bachelor Of Computer Application</p>
                <p>University: Parul University</p>
                <p>Location: India, Gujarat ,Baroda</p>
                <p>Termination date: 2019 </p>
                <br />
                <br />
                <p className="cvhead white">LANGUAGES </p>
                <p>Kinyarwanda: Fluent</p>
                <p>English: Fluent</p>
                <p>Swahili: Fluent</p>
                <br />
                <br />
                <p className="cvhead white">SKILLS</p>
                <ul>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Javascript</li>
                  <li>node.js</li>
                  <li>React Js</li>
                  <li>SQL</li>
                  <li>php</li>
                  <li>Word press</li>
                  <li>Joomla </li>
                  <li>Data Structure</li>
                </ul>
              </div>
            </div>
            <div className="right">
              <br />
              <br />
              <div className="wrap">
                <p className="cvhead orange">HONORS AND AWARDS</p>
                <p className="cvhead">VISION 2050 – 1ST RANK / 12 MAY 2017</p>
                <p>
                  I received award for best VISION 2050 presentation and
                  creativity thinking.
                </p>
                <p>Three awards are given each year.</p>
                <br />
                <p className="cvhead">WEB DESIGN – 3RD RANK /28TH NOV 2016</p>
                <p>
                  Only three awards were provide to the bachelor computer
                  application (BCA) and Masters of computer application (MCA)
                  completion of web designing.
                </p>
                <br />
                <p className="cvhead">
                  “APPLIFEST-2019 – STATE LEVEL TECHNICAL EVENT” WEB MAGIC – 2RD
                  RANK
                </p>
                <p>
                  This is a state level event where different universities all
                  over Gujarat meet and compete into different events and only
                  three awards are given in each event
                </p>
                <br />
                <p className="cvhead blue">Experience </p>
                <p className="cvhead">ASSOCIATE SOFTWARE ENGINEER</p>
                <p>Campany: Andela Rwanda</p>
                <p>Dates: Jan 2020 - Present</p>
                <br />

                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
