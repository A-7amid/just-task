import React, { useState } from "react";
import clsx from "clsx";
const ManageTabs = ({ groups }) => {
  const [tab, setTab] = useState(
    groups ? groups[0].groupTabs[0] : (groups = [])
  );
  const [tabName, setTabName] = useState(tab.title);

  return (
    <div className="flex flex-col gap-4 mt-3 h-full w-full">
      <div className="flex">
        {groups.map((group, gruopIndex) => (
          <div className="flex flex-col text-sm" key={gruopIndex}>
            <span className="text-zinc-400 mb-1">{group.groupTitle}</span>
            <div className=" bg-zinc-100 rounded-sm text-zinc-500 cursor-pointer">
              <div className="px-1 py-1 flex gap-x-3">
                {group.groupTabs.map((tab, tabIndex) => (
                  <div
                    key={tabIndex}
                    onClick={() => {
                      setTab(tab);
                      setTabName(tab.title);
                    }}
                  >
                    <span
                      className={clsx(
                        "rounded-sm flex font-semibold text-sm items-center gap-x-2 px-3 py-1",
                        {
                          "bg-white text-black": tabName === tab.title,
                        }
                      )}
                    >
                      {tab.img}
                      {tab.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex">{tab?.component}</div>
    </div>
  );
};

export default ManageTabs;
