"use client";
import { createSubtask, deleteTodo, updateTodo } from "@/actions";
import { ITodo } from "@/types";
import {
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Collapse,
  Dialog,
  DialogBody,
  Textarea,
} from "@/components";
import { MouseEventHandler, useState } from "react";
import {
  TrashIcon,
  PencilSquareIcon,
  ChatBubbleLeftEllipsisIcon,
  XCircleIcon,
  DocumentCheckIcon,
  SquaresPlusIcon,
} from "@heroicons/react/16/solid";

interface TodoProps extends ITodo {
  id: string;
}

export function Todo({ text, id, status, comment }: TodoProps) {
  const [showUpdateInput, setShowUpdateInput] = useState(false);
  const [newText, setNewText] = useState(text);
  const [newStatus, setNewStatus] = useState(status);
  const [newComment, setNewComment] = useState(comment);
  const [showComment, setShowComment] = useState(false);
  const [showSubtask, setShowSubtask] = useState(false);
  const [newSubtask, setNewSubtask] = useState("");
  const [showCreateSubtask, setShowCreateSubtask] = useState(false);

  const handleUpdate: MouseEventHandler = async (e) => {
    e.preventDefault();
    await updateTodo({
      text: newText,
      id,
      status: newStatus,
      comment: newComment,
    });
  };

  return (
    <>
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
        {!showUpdateInput && <div className="flex">{newText}</div>}

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
        <div className="space-x-3">
          <button
            onClick={async () =>
              showUpdateInput
                ? setShowUpdateInput(!showUpdateInput)
                : await deleteTodo(id)
            }
            className="hover:border hover:rounded p-1"
          >
            {showUpdateInput ? (
              <XCircleIcon className="size-6 text-white" />
            ) : (
              <TrashIcon className="size-6 text-white" />
            )}
          </button>

          {/* SAVE BUTTON OR UPDATE BUTTON  */}
          <button
            onClick={async () => {
              showUpdateInput && (await updateTodo({ text: newText, id }));
              setShowUpdateInput(!showUpdateInput);
            }}
            className="hover:border hover:rounded p-1"
          >
            {showUpdateInput ? (
              <DocumentCheckIcon className="size-6 text-white" />
            ) : (
              <PencilSquareIcon className="size-6 text-white" />
            )}
          </button>

          {!showUpdateInput && (
            <button
              className="hover:border hover:rounded p-1"
              onClick={() => setShowComment(!showComment)}
            >
              {showComment ? (
                <XCircleIcon className="size-6 text-white" />
              ) : (
                <ChatBubbleLeftEllipsisIcon className="size-6 text-white" />
              )}
            </button>
          )}
          {!showUpdateInput && (
            <button
              className="hover:border hover:rounded p-1"
              onClick={() => setShowCreateSubtask(!showCreateSubtask)}
            >
              <SquaresPlusIcon className="size-6 text-white" />
            </button>
          )}
        </div>
      </div>
      <Collapse open={showComment}>
        <Card
          className="my-4 mx-auto w-8/12 bg-opacity-20 bg-blue-gray-500"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <CardBody
            className="flex flex-col"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Textarea
              variant="static"
              className="text-white mx-2 rounded p-1 flex-1"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              placeholder="Add a comment"
            />
            <button
              className="hover:border hover:rounded p-1 ml-auto"
              onClick={async () => {
                await updateTodo({
                  id,
                  comment: newComment,
                });
              }}
            >
              <DocumentCheckIcon className="size-6 text-white" />
            </button>
          </CardBody>
        </Card>
      </Collapse>
      <Dialog
        className="bg-opacity-20 bg-blue-gray-500"
        open={showCreateSubtask}
        handler={() => setShowCreateSubtask(!showCreateSubtask)}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <DialogBody
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <input
            value={newSubtask}
            onChange={(e) => setNewSubtask(e.target.value)}
            type="text"
            placeholder="Create a subtask"
            className="text-black rounded w-full p-1"
          />
          <button
            onClick={async () => {
              await createSubtask(id, { text: newSubtask });
              setNewSubtask("");
              setShowCreateSubtask(false);
            }}
            className="mt-5 hover:border-white hover:rounded border rounded border-blue-gray-200 w-min py-1 px-3 place-self-center"
          >
            CREATE
          </button>
        </DialogBody>
      </Dialog>
    </>
  );
}
