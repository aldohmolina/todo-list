import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/16/solid";
import React from "react";
import { useTodo } from "../hooks/useTodo";
import { ITodo } from "@/types";

export const ButtonShowComment = (todo: ITodo) => {
  const { handleOnShowComment } = useTodo(todo);
  return (
    <button
      className="hover:border hover:rounded p-1"
      onClick={() => handleOnShowComment()}
    >
      <ChatBubbleLeftEllipsisIcon className="size-6 text-white" />
    </button>
  );
};
