import { ITodo } from "@/types";
import React from "react";
import { useTodo } from "../hooks/useTodo";
import { TrashIcon } from "@heroicons/react/16/solid";

export const ButtonCancelInput = (todo: ITodo) => {
  const { handleOnShowUpdateInput } = useTodo(todo);
  return (
    <button
      onClick={async () => handleOnShowUpdateInput()}
      className="hover:border hover:rounded p-1"
    >
      <TrashIcon className="size-6 text-white" />
    </button>
  );
};
