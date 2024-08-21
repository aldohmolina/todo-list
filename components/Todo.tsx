"use client";
import { deleteTodo, updateTodo } from "@/actions";
import { ITodo } from "@/types";
import { Checkbox } from "@/components";
import { MouseEventHandler, useState } from "react";
import {
  TrashIcon,
  PencilSquareIcon,
  ChatBubbleLeftEllipsisIcon,
  XCircleIcon,
  DocumentCheckIcon,
} from "@heroicons/react/16/solid";

interface TodoProps extends ITodo {
  id: string;
}

export function Todo({ text, id, status }: TodoProps) {
  const [showUpdateInput, setShowUpdateInput] = useState(false);
  const [newText, setNewText] = useState(text);
  const [newStatus, setNewStatus] = useState(status);

  const handleUpdate: MouseEventHandler = async (e) => {
    e.preventDefault();
    await updateTodo({ text: newText, id, status });
    setShowUpdateInput(!showUpdateInput);
  };

  return (
    <div className="border rounded-lg md:p-5 p-3 flex justify-between items-center md:mt-5 mt-3 w-full min-h-10 bg-opacity-20 bg-blue-gray-500 border-blue-gray-200">
      {/* STATUS TODO */}
      <Checkbox
        checked={newStatus === "completed"}
        color="green"
        onChange={async () => {
          setNewStatus(newStatus === "completed" ? "pending" : "completed");
          await updateTodo({
            text,
            id,
            status: newStatus,
          });
        }}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        crossOrigin={() => {}}
      />
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
            <XCircleIcon className="size-6 text-white" />
          </button>
        ) : (
          <button
            onClick={async () => await deleteTodo(id)}
            className="hover:border hover:rounded p-1"
          >
            <TrashIcon className="size-6 text-white" />
          </button>
        )}

        {/* SAVE BUTTON OR UPDATE BUTTON  */}
        {showUpdateInput ? (
          <button
            onClick={handleUpdate}
            className="hover:border hover:rounded p-1"
          >
            <DocumentCheckIcon className="size-6 text-white" />
          </button>
        ) : (
          <button
            onClick={() => setShowUpdateInput(!showUpdateInput)}
            className="hover:border hover:rounded p-1"
          >
            <PencilSquareIcon className="size-6 text-white" />
          </button>
        )}
      </div>
    </div>
  );
}
