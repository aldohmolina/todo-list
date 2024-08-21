import { ITodo } from "@/types";
import React, { FC } from "react";
import { useTodo } from "../hooks/useTodo";
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
