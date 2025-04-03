import React from "react";

const Doctors = () => {
  return (
    <div className="flex flex-col gap-y-5 border border-zinc-200 rounded-lg px-5 py-5 w-full">
      <div>
        <h3 className="font-semibold text-2xl">Doctors</h3>
        <span className="font-medium text-sm text-zinc-500">
          Manage your medical staff and specialists.
        </span>
      </div>

      <span className="text-sm font-medium">
        Doctor management content will appear here.
      </span>
    </div>
  );
};

export default Doctors;
