import { ITodo } from "@/types";
import React from "react";
import { useTodo } from "../hooks/useTodo";
import { DocumentCheckIcon } from "@heroicons/react/16/solid";

export const ButtonSave = (todo: ITodo) => {
  const { handleOnUpdateText } = useTodo(todo);
  return (
    <button
      onClick={async () => {
        await handleOnUpdateText();
      }}
      className="hover:border hover:rounded p-1"
    >
      <DocumentCheckIcon className="size-6 text-white" />
    </button>
  );
};
