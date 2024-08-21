import React, { FC } from "react";
import { TrashIcon } from "@heroicons/react/16/solid";

export const ButtonDelete: FC<{ handleOnDelete: any }> = ({
  handleOnDelete,
}) => {
  return (
    <button onClick={handleOnDelete} className="hover:border hover:rounded p-1">
      <TrashIcon className="size-6 text-white" />
    </button>
  );
};
