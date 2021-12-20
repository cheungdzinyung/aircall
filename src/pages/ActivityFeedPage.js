import React, { useEffect } from "react";
import { Tabs } from "../components";
import { useFetch, useActivityFeed } from "../hooks";
import loading from "../assets/images/loading.gif";

export const ActivityFeedPage = () => {
  const { calls, setCalls } = useActivityFeed();
  const { data, isLoading } = useFetch(
    "https://aircall-job.herokuapp.com/activities",
    !calls || calls.length === 0
  );

  useEffect(() => {
    setCalls(data);
  }, [data, setCalls]);

  return (
    <div>
      {isLoading && (
        <div className="loading">
          <img src={loading} alt="loading" />
        </div>
      )}
      {calls && calls.length > 0 && <Tabs />}
    </div>
  );
};
