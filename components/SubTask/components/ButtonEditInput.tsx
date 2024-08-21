import React, { FC } from "react";
import { PencilSquareIcon } from "@heroicons/react/16/solid";

export const ButtonEditInput: FC<{ handleOnShowUpdateInput: any }> = ({
  handleOnShowUpdateInput,
}) => {
  return (
    <button
      onClick={handleOnShowUpdateInput}
      className="hover:border hover:rounded p-1"
    >
      <PencilSquareIcon className="size-6 text-white" />
    </button>
  );
};
