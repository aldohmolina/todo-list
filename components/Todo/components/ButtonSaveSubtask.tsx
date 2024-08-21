import React, { FC } from "react";

export const ButtonSaveSubtask: FC<{ handleOnCreateSubtask: any }> = ({
  handleOnCreateSubtask,
}) => {
  return (
    <button
      className="mt-5 hover:border-white hover:rounded border rounded border-blue-gray-200 w-min py-1 px-3 place-self-center"
      onClick={handleOnCreateSubtask}
    >
      CREATE
    </button>
  );
};
