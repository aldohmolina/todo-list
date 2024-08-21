import { ITodo } from "@/types";
import React from "react";
import { useTodo } from "../hooks/useTodo";
import { PencilSquareIcon } from "@heroicons/react/16/solid";

export const ButtonEditInput = (todo: ITodo) => {
  const { handleOnShowUpdateInput } = useTodo(todo);
  return (
    <button
      onClick={async () => handleOnShowUpdateInput()}
      className="hover:border hover:rounded p-1"
    >
      <PencilSquareIcon className="size-6 text-white" />
    </button>
  );
};
