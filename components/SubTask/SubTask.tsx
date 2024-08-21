import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import {
  ButtonCancelInput,
  ButtonDelete,
  ButtonEditInput,
  ButtonSaveInput,
  SectionButtons,
  CheckboxStatus,
  SubtaskCard,
} from "./components";
import { ISubtask } from "@/types";
import { deleteSubtask, updateSubtask } from "@/actions";

interface IProps extends ISubtask {
  idTodo: string;
}

export const SubTask = ({ idTodo, ...subtask }: IProps) => {
  const [newStatus, setNewStatus] = useState(subtask.status);
  const [newText, setNewText] = useState(subtask.text);
  const [showUpdateInput, setShowUpdateInput] = useState(false);

  const handleOnChangeText: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setNewText(e.target.value);
  };

  const handleOnUpdateStatus: MouseEventHandler = async () => {
    const _newStatus = newStatus !== "completed" ? "completed" : "pending";
    setNewStatus(_newStatus);
    await updateSubtask(idTodo, {
      ...subtask,
      status: _newStatus,
    });
  };

  const handleOnUpdateText: MouseEventHandler = async () => {
    await updateSubtask(idTodo, {
      ...subtask,
      text: newText,
    });
    setShowUpdateInput(!setShowUpdateInput);
  };

  const handleOnShowUpdateInput: MouseEventHandler = () => {
    setShowUpdateInput(!showUpdateInput);
  };

  const handleOnDelete: MouseEventHandler = async () => {
    await deleteSubtask(idTodo, subtask.id);
  };

  return (
    <SubtaskCard>
      <CheckboxStatus
        newStatus={newStatus}
        handleOnUpdateStatus={handleOnUpdateStatus}
      />
      {!showUpdateInput ? (
        <div className="flex">{newText}</div>
      ) : (
        <input
          className="text-black mx-2 rounded  p-1 flex-1"
          value={newText}
          onChange={handleOnChangeText}
          type="text"
        />
      )}
      <SectionButtons>
        {!showUpdateInput ? (
          <>
            <ButtonEditInput
              handleOnShowUpdateInput={handleOnShowUpdateInput}
            />
            <ButtonDelete handleOnDelete={handleOnDelete} />
          </>
        ) : (
          <>
            <ButtonSaveInput handleOnUpdateText={handleOnUpdateText} />
            <ButtonCancelInput
              handleOnShowUpdateInput={handleOnShowUpdateInput}
            />
          </>
        )}
      </SectionButtons>
    </SubtaskCard>
  );
};
