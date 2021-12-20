import { useContext } from "react";
import { ActivityFeedContext } from "../../contexts";

export const useActivityFeed = () => useContext(ActivityFeedContext);
