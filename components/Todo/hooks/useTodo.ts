import { createSubtask, deleteTodo, updateTodo } from "@/actions";
import { ITodo } from "@/types";
import { ChangeEventHandler, useState } from "react";

export const useTodo = ({ id, text, status, comment }: ITodo) => {
  const [showUpdateInput, setShowUpdateInput] = useState(false);
  const [newText, setNewText] = useState(text);
  const [newStatus, setNewStatus] = useState(status);
  const [newComment, setNewComment] = useState(comment);
  const [showComment, setShowComment] = useState(false);
  const [showSubtask, setShowSubtask] = useState(false);
  const [newSubtask, setNewSubtask] = useState("");
  const [showCreateSubtask, setShowCreateSubtask] = useState(false);

  const handleOnUpdateText = async () => {
    await updateTodo({
      text: newText,
      id,
    });
    setShowUpdateInput(!showUpdateInput);
  };

  const handleOnUpdateStatus = async () => {
    const _newStatus = newStatus === "completed" ? "pending" : "completed";
    setNewStatus(_newStatus);
    await updateTodo({
      status: _newStatus,
      id,
    });
  };

  const handleOnUpdateComment = async () => {
    await updateTodo({
      comment: newComment,
      id,
    });
    setShowComment(!showComment);
  };

  const handleOnChangeText: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewText(e.target.value);
  };

  const handleOnDeleteTodo = async () => {
    await deleteTodo(id);
  };

  const handleOnCreateSubtask = async () => {
    await createSubtask(id, { text: newSubtask });
    setNewSubtask("");
    setShowCreateSubtask(!showCreateSubtask);
  };

  const handleOnShowCreateSubtask = () => {
    setShowCreateSubtask(!showCreateSubtask);
  };

  const handleOnShowComment = () => {
    setShowComment(!showComment);
  };

  const handleOnShowUpdateInput = () => {
    setShowUpdateInput(!showUpdateInput);
  };

  const handleOnChangeCommnet: ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    setNewComment(e.target.value);
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
  };
};
