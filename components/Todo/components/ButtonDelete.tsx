import { ITodo } from "@/types";
import React, { FC } from "react";
import { useTodo } from "../hooks/useTodo";
import { TrashIcon } from "@heroicons/react/16/solid";

export const ButtonDelete: FC<{ handleOnDeleteTodo: any }> = ({
  handleOnDeleteTodo,
}) => {
  return (
    <button
      onClick={handleOnDeleteTodo}
      className="hover:border hover:rounded p-1"
    >
      <TrashIcon className="size-6 text-white" />
    </button>
  );
};
