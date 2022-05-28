import React from "react";
import Tab from "./Tab";
import {useSelector} from "react-redux";

export default function TopBar () {

  const tabs = useSelector(state => state.newr.tabs);
  const activeTab = useSelector(state => state.newr.activeTab);

  return (
    <div className="top-bar">
      {tabs.map(t => {
        return (
          <Tab
            key={t.id}
            id={t.id}
            color={t.color}
            isActive={t.id === activeTab}
            name={t.name}
          />
        );
      })}
    </div>
  );
}
