import React from "react";
import moment from "moment";
import {
  BsFillTelephoneInboundFill,
  BsFillTelephoneOutboundFill,
  BsFillTelephoneXFill,
  BsVoicemail,
} from "react-icons/bs";
import "../../css/ActivityDetail.css";

export const ActivityDetail = ({ info }) => {
  return (
    <div className="activityDetail">
      <div className="phoneIcon">
        {(info.call_type === "missed" && <BsFillTelephoneXFill color="red" />) ||
          (info.call_type === "voicemail" && <BsVoicemail color="blue" />) ||
          (info.call_type === "answered" && info.direction === "outbound" && (
            <BsFillTelephoneOutboundFill color="green" />
          )) ||
          (info.call_type === "answered" && info.direction === "inbound" && (
            <BsFillTelephoneInboundFill color="green" />
          ))}
      </div>
      <div className="callDetails">
        <h2>{info.from}</h2>
        <h3>tried to call on {info.via}</h3>
      </div>
      <div className="callTime">
        <p>
          {moment(info.created_at).format("h:mm a")} <br />
          {moment(info.created_at).format("MMMM Do YYYY")}
        </p>
      </div>
    </div>
  );
};
