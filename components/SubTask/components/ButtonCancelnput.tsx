import React, { FC } from "react";
import { XCircleIcon } from "@heroicons/react/16/solid";

export const ButtonCancelInput: FC<{
  handleOnShowUpdateInput: any;
}> = ({ handleOnShowUpdateInput }) => {
  return (
    <button
      onClick={handleOnShowUpdateInput}
      className="hover:border hover:rounded p-1"
    >
      <XCircleIcon className="size-6 text-white" />
    </button>
  );
};
