import React from "react";
import ManageTabs from "./components/ManageGroups/ManageTabs";
import Patients from "./components/ManageGroups/Patients";
import Orders from "./components/ManageGroups/Orders";
import Doctors from "./components/ManageGroups/Doctors";
import { GoPerson } from "react-icons/go";
import { HiOutlineClipboardList } from "react-icons/hi";
import Navbar from "./components/Navbar";
import { MdPeopleOutline } from "react-icons/md";
import { BsPeople } from "react-icons/bs";

const firstGroup = [
  {
    title: `Orders`,
    component: <Orders />,
    img: <HiOutlineClipboardList className="size-4" />,
  },
];

const secondGroup = [
  {
    title: `Doctors`,
    component: <Doctors />,
    img: <GoPerson className="size-4" />,
  },
  {
    title: "Patients",
    component: <Patients />,
    img: <BsPeople className="size-5" />,
  },
];

const groups = [
  { groupTitle: "Resources", groupTabs: firstGroup },
  { groupTitle: "People", groupTabs: secondGroup },
];

function App() {
  return (
    <div className="min-h-screen max-h-full flex flex-col">
      <Navbar />
      <div className="min-w-screen h-[1px] bg-zinc-200"></div>

      <div className="mx-auto container mt-3 flex flex-col">
        <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
        <p className="mb-2 text-zinc-500 text-sm font-medium">
          Manage your medical resources and personnel.
        </p>
        <ManageTabs groups={groups} />
      </div>
    </div>
  );
}

export default App;
