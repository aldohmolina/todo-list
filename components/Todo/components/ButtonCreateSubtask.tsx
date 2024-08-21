import { ITodo } from "@/types";
import React, { FC } from "react";
import { useTodo } from "../hooks";
import { SquaresPlusIcon } from "@heroicons/react/16/solid";

export const ButtonCreateSubtask: FC<{ handleOnShowCreateSubtask: any }> = ({
  handleOnShowCreateSubtask,
}) => {
  return (
    <button
      className="hover:border hover:rounded p-1"
      onClick={handleOnShowCreateSubtask}
    >
      <SquaresPlusIcon className="size-6 text-white" />
    </button>
  );
};
