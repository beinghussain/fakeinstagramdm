import React from "react";
import { IoGearA, IoImage } from "react-icons/lib/io";
import $ from "jquery";
import html2canvas from "html2canvas";

export default class ChatConfiguration extends React.Component {
  state = {
    config: false
  };

  constructor(props) {
    super(props);
    let that = this;
    $(document).ready(function() {
      $("#user_profile").change(function() {
        var input = this;
        var url = $(this).val();
        var ext = url.substring(url.lastIndexOf(".") + 1).toLowerCase();
        if (input.files && input.files[0] && (ext === "gif" || ext === "png" || ext === "jpeg" || ext === "jpg")) {
          var reader = new FileReader();
          reader.onload = function(e) {
            that.props.imageChanged(e.target.result);
          };
          reader.readAsDataURL(input.files[0]);
        }
      });
    });
  }

  screenShot = () => {
    html2canvas(document.getElementById("Screen")).then(function(canvas) {
      var link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.download = "ss.png";
      document.body.appendChild(link);
      link.click();
    });
  };

  render() {
    return (
      <div className="ConfigurationContainer">
        <div className="Configuration">
          <div className="Configuration_Div" style={{ padding: this.state.config === true ? "15px" : "0px", height: this.state.config === true ? "200px" : "0px", width: this.state.config === true ? "300px" : "0px" }}>
            <div className="Configuration_UserName">
              <span>Username:</span>
              <input value={this.props.username} onChange={this.props.usernameUpdated} placeholder="Other person's name" />
            </div>
            <div className="Configuration_UserName">
              <span>Current time:</span>
              <input value={this.props.currentTime} onChange={this.props.currentTimeUpate} placeholder="Other person's name" />
            </div>
            <div className="Configuration_UserName">
              <span>User profile</span>
              <input id="user_profile" type="file" onChange={this.props.currentTimeUpate} placeholder="Other person's name" />
            </div>
          </div>
          <button onClick={() => this.setState({ config: !this.state.config })} className="ChatConfiguration_FloatingButton">
            <IoGearA size={32} />
          </button>
          <button className="ChatConfiguration_FloatingButton_Screenshot" onClick={this.screenShot}>
            <IoImage size={32} />
          </button>
        </div>
      </div>
    );
  }
}
