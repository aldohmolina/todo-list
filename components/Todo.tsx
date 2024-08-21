"use client";
import { deleteTodo, updateTodo } from "@/actions";
import { ITodo } from "@/types";
import { MouseEventHandler, useState } from "react";

interface TodoProps extends ITodo {
  id: string;
}

export function Todo({ text, id }: TodoProps) {
  const [showUpdateInput, setShowUpdateInput] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleUpdate: MouseEventHandler = async (e) => {
    e.preventDefault();
    await updateTodo({ text: newText, id });
    setShowUpdateInput(!showUpdateInput);
  };

  return (
    <div className="border rounded md:p-5 p-3 flex justify-between items-center md:mt-5 mt-3 w-full min-h-10 ">
      {/* TODO TEXT  */}
      {!showUpdateInput && <div className="flex">{text}</div>}

      {/* UPDATE TODO INPUT  */}
      {showUpdateInput && (
        <input
          className="text-black mx-2 rounded  p-1 flex-1"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          type="text"
        />
      )}

      {/* CANCEL BUTTON OR DELETE BUTTON */}
      <div className="space-x-5">
        {showUpdateInput ? (
          <button
            onClick={() => setShowUpdateInput(!showUpdateInput)}
            className="hover:border hover:rounded p-1"
          >
            CANCEL
          </button>
        ) : (
          <button
            onClick={async () => await deleteTodo(id)}
            className="hover:border hover:rounded p-1"
          >
            DELETE
          </button>
        )}

        {/* SAVE BUTTON OR UPDATE BUTTON  */}
        {showUpdateInput ? (
          <button
            onClick={handleUpdate}
            className="hover:border hover:rounded p-1"
          >
            SAVE
          </button>
        ) : (
          <button
            onClick={() => setShowUpdateInput(!showUpdateInput)}
            className="hover:border hover:rounded p-1"
          >
            UPDATE
          </button>
        )}
      </div>
    </div>
  );
}
