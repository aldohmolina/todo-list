import { createSubtask, deleteTodo, updateTodo } from "@/actions";
import { ISubtask, ITodo } from "@/types";
import {
  ChangeEventHandler,
  EventHandler,
  MouseEventHandler,
  useState,
} from "react";

export const useTodo = (todo: ITodo) => {
  const [showUpdateInput, setShowUpdateInput] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newStatus, setNewStatus] = useState(todo.status);
  const [newComment, setNewComment] = useState(todo.comment);
  const [showComment, setShowComment] = useState(false);
  const [showSubtask, setShowSubtask] = useState(false);
  const [newSubtask, setNewSubtask] = useState("");
  const [showCreateSubtask, setShowCreateSubtask] = useState(false);
  const [newSubtasks, setNewSubtasks] = useState<ISubtask[]>(todo.subtasks);
  const id = todo.id;

  const handleOnUpdateText: MouseEventHandler = async () => {
    setShowUpdateInput(!showUpdateInput);
    await updateTodo({
      text: newText,
      status: newStatus,
      comment: newComment,
      subtasks: newSubtasks,
      id,
    });
  };

  const handleOnUpdateStatus = async () => {
    setNewStatus((state) => (state !== "completed" ? "completed" : "pending"));
    await updateTodo({
      comment: newComment,
      text: newText,
      subtasks: newSubtasks,
      status: newStatus !== "completed" ? "completed" : "pending",
      id,
    });
  };

  const handleOnUpdateComment: MouseEventHandler = async () => {
    await updateTodo({
      text: newText,
      status: newStatus,
      subtasks: newSubtasks,
      comment: newComment,
      id,
    });
    setShowComment(!showComment);
  };

  const handleOnChangeText: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewText(e.target.value);
  };

  const handleOnDeleteTodo: MouseEventHandler = async () => {
    await deleteTodo(id);
  };

  const handleOnCreateSubtask: MouseEventHandler = async () => {
    await createSubtask(id, { text: newSubtask });
    setNewSubtask("");
    setShowCreateSubtask(!showCreateSubtask);
  };

  const handleOnShowCreateSubtask: MouseEventHandler = () => {
    setShowCreateSubtask(!showCreateSubtask);
  };

  const handleOnShowComment: MouseEventHandler = () => {
    setShowComment(!showComment);
  };

  const handleOnShowUpdateInput: MouseEventHandler<HTMLButtonElement> = () => {
    setShowUpdateInput(!showUpdateInput);
  };

  const handleOnChangeCommnet: ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    setNewComment(e.target.value);
  };

  const handleOnChangeNewSubtask: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setNewSubtask(e.target.value);
  };

  return {
    showUpdateInput,
    newText,
    newStatus,
    newComment,
    showComment,
    showSubtask,
    newSubtask,
    showCreateSubtask,
    handleOnUpdateText,
    handleOnUpdateStatus,
    handleOnUpdateComment,
    handleOnChangeText,
    handleOnDeleteTodo,
    handleOnCreateSubtask,
    handleOnShowCreateSubtask,
    handleOnShowComment,
    handleOnChangeCommnet,
    handleOnShowUpdateInput,
    handleOnChangeNewSubtask,
  };
};
