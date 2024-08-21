import { Card, CardBody, Collapse } from "@/components";
import React, { FC, ReactNode } from "react";
import { useTodo } from "../hooks";

export const SectionSubstak: FC<{
  children: ReactNode;
  showSubstak: boolean;
}> = ({ children, showSubstak }) => {
  return (
    <Collapse open={showSubstak}>
      <Card
        className="ml-auto w-11/12 bg-opacity-20 bg-blue-gray-500"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <CardBody
          className="flex flex-col"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {children}
        </CardBody>
      </Card>
    </Collapse>
  );
};
