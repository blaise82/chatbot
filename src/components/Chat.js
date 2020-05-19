import { connect } from "react-redux";
import { sendMessage } from "../redux/actions/chatAction";
import React, { Component } from "react";
import ChatIcon from "@material-ui/icons/Chat";
import "../styles/chat.css";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }
  onSubmit = async (e) => {
    e.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState({
      message: "",
    });
  };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { feed } = this.props;
    return (
      <div>
        <div className="chatWrap">
          <div className="chatBox">
            <div className="chatTitle">ChatBot</div>
            <div className="displayMessage">
              <div className="chatLogs">
                <div class="messagesContent">
                  {feed.map((entry) =>
                    entry.sender === "bot" ? (
                      <div className="message1 animate__animated animate__bounceIn">
                        {entry.text}
                      </div>
                    ) : (
                      <div className="message2 animate__animated animate__bounceIn">
                        {entry.text}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="chatInput">
              <form
                className="form"
                onSubmit={(e) => this.onSubmit(e)}
                aria-label="form"
              >
                <input
                  className="chatInput"
                  type="text"
                  autoComplete="off"
                  value={this.state.message}
                  name="message"
                  id=""
                  onChange={this.change}
                  onKeyDown={(e) => (e.keyCode === 13 ? this.onSubmit : null)}
                />
              </form>
            </div>
          </div>
          <div className="button">
            <ChatIcon />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateTopProps = (state) => ({
  feed: state,
});

export default connect(mapStateTopProps, { sendMessage })(Chat);
