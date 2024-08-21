import React from "react";
import { DocumentCheckIcon } from "@heroicons/react/16/solid";

export const ButtonSaveComment = ({ handleOnUpdateComment }: any) => {
  return (
    <button
      className="hover:border hover:rounded p-1 ml-auto"
      onClick={handleOnUpdateComment}
    >
      <DocumentCheckIcon className="size-6 text-white" />
    </button>
  );
};
