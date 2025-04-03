import React from "react";

const Patients = () => {
  return (
    <div className="flex flex-col gap-y-5 border border-zinc-200 rounded-lg px-5 py-5 w-[70%]">
      <div>
        <h3 className="font-semibold text-2xl">Patients</h3>
        <span className="font-medium text-sm text-zinc-500">
          View and manage patient information.
        </span>
      </div>

      <span className="text-sm font-medium">
        Patient management content will appear here.
      </span>
    </div>
  );
};

export default Patients;
