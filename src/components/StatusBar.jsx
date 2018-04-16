import React from "react";
import { MdNetworkWifi, MdNetworkCell, MdAlarm } from "react-icons/lib/md";

export default class StatusBar extends React.Component {
  render() {
    return (
      <div className="StatusBar">
        <span>
          <MdAlarm size={18} style={{ color: "#606060" }} />
        </span>
        <span className="StatusBar_Item">
          <MdNetworkWifi size={18} style={{ color: "#606060" }} />
        </span>
        <span>
          <MdNetworkCell size={18} style={{ color: "#606060" }} />
        </span>
        <span className="StatusBar_Item StatusBar_Time">{this.props.currentTime}</span>
      </div>
    );
  }
}
