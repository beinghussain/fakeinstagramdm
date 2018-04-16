import React from "react";
import { IoAndroidArrowBack } from "react-icons/lib/io";
import { MdInfoOutline } from "react-icons/lib/md";

export default class Toolbar extends React.Component {
  render() {
    return (
      <div className="Toolbar">
        <div className="ToolbarLeft">
          <div className="Toolbar_Backbutton">
            <IoAndroidArrowBack size={28} />
          </div>
          <div className="Toolbar_Username">{this.props.username}</div>
        </div>
        <div className="Toolbar_MoreInfo">
          <MdInfoOutline size={28} />
        </div>
      </div>
    );
  }
}
