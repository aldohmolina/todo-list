import React, { FC, ReactNode } from "react";

export const SubtaskCard: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="border rounded-lg md:p-5 p-3 flex justify-between items-center md:mt-5 mt-3 w-full min-h-10 bg-opacity-20 bg-blue-gray-500 border-blue-gray-200">
      {children}
    </div>
  );
};
