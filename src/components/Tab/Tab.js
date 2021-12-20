import React, { useState } from "react";
import { ActivityFeed, Archive } from "..";
import "../../css/Tab.css"

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Recent");

  const handleRecent = () => {
    setActiveTab("Recent");
  };
  const handleArchive = () => {
    setActiveTab("Archive");
  };

  return (
    <div className="tabs">
      <ul className="tabsNav">
        <li
          className={activeTab === "Recent" ? "active" : ""}
          onClick={handleRecent}
        >
          Recent
        </li>
        <li
          className={activeTab === "Archive" ? "active" : ""}
          onClick={handleArchive}
        >
          Archive
        </li>
      </ul>
      <div className="tabContent">
        {activeTab === "Recent" ? <ActivityFeed /> : <Archive />}
      </div>
    </div>
  );
};
