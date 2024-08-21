import { Card, CardBody, Collapse } from "@/components";
import React, { FC, ReactNode } from "react";

export const SectionComment: FC<{
  children: ReactNode;
  showComment: boolean;
}> = ({ children, showComment }) => {
  return (
    <Collapse open={showComment}>
      <Card
        className="my-4 mx-auto w-8/12 bg-opacity-20 bg-blue-gray-500"
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
