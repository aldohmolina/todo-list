import { ITodo } from "@/types";
import React from "react";
import { useTodo } from "../hooks/useTodo";
import { XCircleIcon } from "@heroicons/react/16/solid";

export const ButtonHideComment = (todo: ITodo) => {
  const { handleOnShowComment } = useTodo(todo);
  return (
    <button
      className="hover:border hover:rounded p-1"
      onClick={() => handleOnShowComment()}
    >
      <XCircleIcon className="size-6 text-white" />
    </button>
  );
};
