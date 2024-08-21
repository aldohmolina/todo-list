import { Checkbox } from "@/components";
import { FC } from "react";

export const CheckboxStatus: FC<{
  newStatus: any;
  handleOnUpdateStatus: any;
}> = ({ newStatus, handleOnUpdateStatus }) => {
  return (
    <Checkbox
      checked={newStatus === "completed"}
      color="green"
      onChange={async () => {
        await handleOnUpdateStatus();
      }}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      crossOrigin={() => {}}
    />
  );
};
