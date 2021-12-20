import React, { createContext, useState } from "react";

export const ActivityFeedContext = createContext(null);

export const ActivityFeedProvider = ({ children }) => {
  const [calls, setCalls] = useState([]);

  return (
    <ActivityFeedContext.Provider value={{ calls, setCalls }}>
      {children}
    </ActivityFeedContext.Provider>
  );
};
