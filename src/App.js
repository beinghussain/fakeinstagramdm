import React, { Component } from "react";
import "./App.css";
import StatusBar from "./components/StatusBar";
import Toolbar from "./components/Toolbar";
import ChatScreen from "./components/ChatScreen";
import ChatConfiguration from "./components/ChatConfiguration";
import ChatMaker from "./components/ChatMaker";

const emoji_link = "https://cdn.jsdelivr.net/emojione/assets/3.0/png/32/";

class App extends Component {
  state = {
    username: "default_user",
    currentTime: "3:30",
    message: "This is a message",
    userProfile: "",
    chats: [
      {
        time: new Date(),
        message: "hello",
        type: "r",
        mt: "message"
      },
      {
        time: new Date(),
        message: "hi",
        type: "s",
        mt: "message"
      },
      {
        time: new Date(),
        message: "hi",
        type: "s",
        mt: "nudge"
      },
      {
        time: new Date(),
        message: "hi",
        type: "r",
        mt: "nudge"
      }
    ]
  };
  usernameUpdated = e => {
    this.setState({
      username: e.target.value
    });
  };

  currentTimeUpate = e => {
    this.setState({
      current_time: e.target.value
    });
  };
  onMessageChange = e => {
    console.log(e);
    this.setState({
      message: e
    });
  };
  emojiPicked = e => {
    let message = this.state.message;
    let link = emoji_link + e + ".png";

    message += "<img class='Emojicone' src=" + link + " />";
    this.setState({
      message
    });
  };
  senderClicked = s => {
    if (this.state.message.length > 0) {
      let chats = this.state.chats;
      let item = {
        date: new Date(),
        type: s,
        message: this.state.message,
        mt: "message",
        onlyEmoticones: this.state.message.match("^<img") && this.state.message.match("/>$")
      };
      chats.push(item);
      this.setState({ chats, message: "" });
    }
  };

  imageChanged = image => {
    this.setState({
      image
    });
  };

  render() {
    return (
      <div className="App">
        <div className="MainContainer">
          <ChatConfiguration imageChanged={this.imageChanged} {...this.state} currentTimeUpate={this.currentTimeUpate} usernameUpdated={this.usernameUpdated} />
          <div className="PhoneScreenContainer">
            <div id="Screen" className="PhoneScreen">
              <StatusBar currentTime={this.state.currentTime} />
              <Toolbar username={this.state.username} />
              <ChatScreen userProfile={this.state.image} data={this.state.chats} />
            </div>
          </div>
          <ChatMaker emojiPicked={this.emojiPicked} message={this.state.message} onMessageChange={this.onMessageChange} senderClicked={this.senderClicked} />
        </div>
      </div>
    );
  }
}

export default App;
