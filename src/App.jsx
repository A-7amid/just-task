import React from "react";
import ManageTabs from "./components/ManageGroups/ManageTabs";
import Patients from "./components/ManageGroups/Patients";
import Orders from "./components/ManageGroups/Orders";
import Doctors from "./components/ManageGroups/Doctors";

const firstGroup = [{ title: "Orders", component: <Orders /> }];

const secondGroup = [
  { title: "Doctors", component: <Doctors /> },
  { title: "Patients", component: <Patients /> },
];

const groups = [
  { groupTitle: "Resources", groupTabs: firstGroup },
  { groupTitle: "People", groupTabs: secondGroup },
];

function App() {
  return (
    <div className="h-screen mx-8 overflow-y-hidden">
      <ManageTabs groups={groups} />
    </div>
  );
}

export default App;
