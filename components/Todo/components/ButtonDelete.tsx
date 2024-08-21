import { ITodo } from "@/types";
import React from "react";
import { useTodo } from "../hooks/useTodo";
import { TrashIcon } from "@heroicons/react/16/solid";

export const ButtonDelete = (todo: ITodo) => {
  const { handleOnDeleteTodo } = useTodo(todo);
  return (
    <button
      onClick={async () => await handleOnDeleteTodo()}
      className="hover:border hover:rounded p-1"
    >
      <TrashIcon className="size-6 text-white" />
    </button>
  );
};
