import React, { FC, ReactNode } from "react";

export const SectionButtons: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="space-x-3">{children}</div>;
};
