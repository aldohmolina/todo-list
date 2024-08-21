import { ITodo } from "@/types";
import React from "react";
import { useTodo } from "../hooks/useTodo";
import { DocumentCheckIcon } from "@heroicons/react/16/solid";

export const ButtonSaveComment = (todo: ITodo) => {
  const { handleOnUpdateComment } = useTodo(todo);
  return (
    <button
      className="hover:border hover:rounded p-1 ml-auto"
      onClick={async () => await handleOnUpdateComment()}
    >
      <DocumentCheckIcon className="size-6 text-white" />
    </button>
  );
};
