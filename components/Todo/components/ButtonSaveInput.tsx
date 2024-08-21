import { ITodo } from "@/types";
import React, { FC } from "react";
import { useTodo } from "../hooks/useTodo";
import { DocumentCheckIcon } from "@heroicons/react/16/solid";

export const ButtonSaveInput: FC<{
  handleOnUpdateText: any;
}> = ({ handleOnUpdateText }) => {
  return (
    <button
      onClick={handleOnUpdateText}
      className="hover:border hover:rounded p-1"
    >
      <DocumentCheckIcon className="size-6 text-white" />
    </button>
  );
};
