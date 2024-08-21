import { ITodo } from "@/types";
import React, { FC } from "react";
import { useTodo } from "../hooks/useTodo";
import { XCircleIcon } from "@heroicons/react/16/solid";

export const ButtonHideComment: FC<{ handleOnShowComment: any }> = ({
  handleOnShowComment,
}) => {
  return (
    <button
      className="hover:border hover:rounded p-1"
      onClick={handleOnShowComment}
    >
      <XCircleIcon className="size-6 text-white" />
    </button>
  );
};
