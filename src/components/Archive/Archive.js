import React from "react";
import { useActivityFeed } from "../../hooks";
import { ActivityDetail } from "../";
import axios from "axios";

export const Archive = () => {
  const { calls, setCalls } = useActivityFeed();

  const archiveCall = (call) => {
    axios
      .post(`https://aircall-job.herokuapp.com/activities/${call.id}`, {
        is_archived: !call.is_archived,
      })
      .then((res) => {
        setCalls([...calls.filter((ele) => ele.id !== res.data.id), res.data]);
      });
  };

  return (
    <div>
      <p>Click on any call to unarchive the call.</p>
      {calls &&
        calls
          .sort((a, b) => (a.created_at < b.created_at ? 1 : -1))
          .map((call) => {
            if (call.is_archived === true) {
              return (
                <div key={call.id} onClick={() => archiveCall(call)}>
                  <ActivityDetail info={call} />
                </div>
              );
            }
          })}
    </div>
  );
};
