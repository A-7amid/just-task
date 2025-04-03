import React, { useState } from "react";
import clsx from "clsx";
const ManageTabs = ({ groups }) => {
  const [tab, setTab] = useState(
    groups ? groups[0].groupTabs[0] : (groups = [])
  );
  const [tabName, setTabName] = useState(tab.title);

  return (
    <div className=" mt-3 h-full">
      <div className="flex gap-7">
        {groups.map((group, gruopIndex) => (
          <div className="flex flex-col text-sm" key={gruopIndex}>
            <span className="text-zinc-300 mb-1">{group.groupTitle}</span>
            <div className="flex gap-x-3">
              {group.groupTabs.map((tab, tabIndex) => (
                <div
                  key={tabIndex}
                  onClick={() => {
                    setTab(tab);
                    setTabName(tab.title);
                  }}
                >
                  <div className="font-semibold text-sm cursor-pointer border py-2 px-0.5 border-zinc-200 rounded-md transition duration-200 ease-in">
                    <span
                      className={clsx("rounded-md px-5 py-2", {
                        "bg-cyan-600 text-white": tabName == tab.title,
                      })}
                    >
                      {tab.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full font-medium text-2xl h-full">
        {tab?.component}
      </div>
    </div>
  );
};

export default ManageTabs;
