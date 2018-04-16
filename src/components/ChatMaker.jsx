import React from "react";
import EmojiPicker from "emoji-picker-react";
import ReactDOM from "react-dom";
import $ from "jquery";

class ContentEditable extends React.Component {
  componentWillReceiveProps(newProps) {
    newProps.html === "" ? ($(".ChatMakerInput").innerHTML = "") : null;
  }
  emitChange = () => {
    var html = $(".ChatMakerInput").innerHTML;
    console.log($(".ChatMakerInput").innerHTML);
    if (this.props.onChange && html !== this.lastHtml) {
      this.props.onChange({
        target: {
          value: html
        }
      });
    }
    this.lastHtml = html;
    this.props.onMessageChange(html);
  };
  shouldComponentUpdate(nextProps) {
    return nextProps.html !== $(".ChatMakerInput").innerHTML;
  }
  render() {
    return (
      <div>
        {$(".ChatMakerInput").innerHTML === "" ? <span /> : null}
        <div className="ChatMakerInput" onInput={this.emitChange} onBlur={this.emitChange} contentEditable dangerouslySetInnerHTML={{ __html: this.props.html }} />
      </div>
    );
  }
}

class ToggleSender extends React.Component {
  render() {
    return (
      <div className="ToggleSender">
        <div
          onClick={e => {
            this.props.senderClicked("s");
          }}
          className="ToggleSender_Send"
        >
          Send
        </div>
        <div className="ToggleSender_Border" />
        <div
          onClick={e => {
            this.props.senderClicked("r");
          }}
          className="ToggleSender_Receive"
        >
          Receive
        </div>
      </div>
    );
  }
}

export default class ChatMaker extends React.Component {
  render() {
    return (
      <div className="ChatMaker">
        <div>
          <ContentEditable onMessageChange={this.props.onMessageChange} message={this.props.message} html={this.props.message} />
          <EmojiPicker onEmojiClick={this.props.emojiPicked} />
        </div>
        <div>
          <ToggleSender senderClicked={this.props.senderClicked} />
        </div>
      </div>
    );
  }
}
