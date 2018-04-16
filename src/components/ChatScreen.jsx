import React from "react";
import { IoIosHeart } from "react-icons/lib/io";
import icon from "../icon.png";
import gallery from "../gallery.png";
import heart from "../heart.png";
import Moment from "react-moment";

const img = "https://instagram.famd4-1.fna.fbcdn.net/vp/85a71057eda691f852fd50e569902c68/5B63117A/t51.2885-19/s150x150/30084545_192449024893125_2750856699739897856_n.jpg";

export default class ChatScreen extends React.Component {
  state = {};

  offset = el => {
    if (el) {
      var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
  };

  getPosition = id => {
    var div = document.getElementById("div_" + id);
    var divOffset = this.offset(div);
    return "divOffset";
  };

  render() {
    return (
      <div>
        <div className="ChatScreen">
          {this.props.data.map((i, idx) => {
            return (
              <div id={"div_" + idx} onClick={() => this.setState({ ["open_" + idx]: this.state["open_" + idx] ? false : true })} key={idx}>
                <div className={i.type === "s" ? "SendOption" : "ReceiveOption"} style={{ display: this.state["open_" + idx] ? "block" : "none" }}>
                  {this.getPosition(idx)}
                </div>
                {idx === 0 ? (
                  <span className="ChatScreen_TimeHeader">
                    <Moment format="MMM D, hh:mm a">{this.props.data[0].time}</Moment>
                  </span>
                ) : null}
                {
                  <div key={idx} className={"ChatItem " + (i.type === "s" ? "Send" : "Receive")}>
                    {(i.type === "r" && this.props.data[idx + 1] && this.props.data[idx + 1].type !== "r") || (idx === this.props.data.length - 1 && i.type !== "s") ? (
                      <span className="ChatItem_ImageContainer">
                        <img alt="chat" className="ChatItem_Image" src={this.props.userProfile || img} />
                      </span>
                    ) : (
                      <span className="ChatItem_ImageContainerPlaceholder" />
                    )}
                    {i.mt === "message" && <span dangerouslySetInnerHTML={{ __html: i.message }} className={"ChatItemText " + (i.onlyEmoticones ? "EmoticonesMessage" : "")} />}
                    {i.mt === "nudge" && <IoIosHeart style={{ color: "#FF5653" }} size={42} className="ChatItem_Nudge" />}
                  </div>
                }
              </div>
            );
          })}
        </div>
        <div className="ChatScreen_Chatbar">
          <div className="ChatScreen_Chatbar_IconContainer">
            <img alt="chat" className="ChatScreen_Chatbar_Icon" src={icon} />
          </div>
          <div className="ChatScreen_Chatbar_InputContainerMain">
            <div className="ChatScreen_Chatbar_InputContainer">
              <input placeholder="Write a message" className="ChatScreen_Chatbar_Input" />
              <img alt="chat" src={gallery} />
              <img alt="chat" src={heart} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
