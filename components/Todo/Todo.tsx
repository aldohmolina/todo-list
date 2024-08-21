"use client";
import { ISubtask, ITodo } from "@/types";
import { Dialog, DialogBody, Textarea } from "@/components";
import { useTodo } from "./hooks";
import {
  ButtonCancelInput,
  ButtonCreateSubtask,
  ButtonDelete,
  ButtonEditInput,
  ButtonHideComment,
  ButtonSaveComment,
  ButtonSaveInput,
  ButtonShowComment,
  CheckboxStatus,
  SectionButtons,
  SectionComment,
  SectionSubstak,
  TodoCard,
} from "./components";
import { ButtonSaveSubtask } from "./components/ButtonSaveSubtask";
import { SubTask } from "../SubTask";

interface TodoProps extends ITodo {
  id: string;
}

export function Todo(todo: TodoProps) {
  const {
    showUpdateInput,
    newText,
    showComment,
    newComment,
    showCreateSubtask,
    newSubtask,
    newStatus,
    handleOnUpdateStatus,
    handleOnShowCreateSubtask,
    handleOnChangeNewSubtask,
    handleOnChangeText,
    handleOnChangeCommnet,
    handleOnShowUpdateInput,
    handleOnUpdateText,
    handleOnDeleteTodo,
    handleOnShowComment,
    handleOnUpdateComment,
    handleOnCreateSubtask,
  } = useTodo(todo);

  return (
    <>
      <TodoCard>
        {/* STATUS TODO */}
        <CheckboxStatus
          newStatus={newStatus}
          handleOnUpdateStatus={handleOnUpdateStatus}
        />
        {/* TODO TEXT  */}
        {!showUpdateInput && <div className="flex">{newText}</div>}

        {/* UPDATE TODO INPUT  */}
        {showUpdateInput && (
          <input
            className="text-black mx-2 rounded  p-1 flex-1"
            value={newText}
            onChange={handleOnChangeText}
            type="text"
          />
        )}

        <SectionButtons>
          {showUpdateInput ? (
            <>
              <ButtonCancelInput
                handleOnShowUpdateInput={handleOnShowUpdateInput}
              />
              <ButtonSaveInput handleOnUpdateText={handleOnUpdateText} />
            </>
          ) : (
            <>
              <ButtonDelete handleOnDeleteTodo={handleOnDeleteTodo} />
              <ButtonEditInput
                handleOnShowUpdateInput={handleOnShowUpdateInput}
              />
              {showComment ? (
                <ButtonHideComment handleOnShowComment={handleOnShowComment} />
              ) : (
                <ButtonShowComment handleOnShowComment={handleOnShowComment} />
              )}
              <ButtonCreateSubtask
                handleOnShowCreateSubtask={handleOnShowCreateSubtask}
              />
            </>
          )}
        </SectionButtons>
      </TodoCard>
      <SectionComment showComment={showComment}>
        <Textarea
          variant="static"
          className="text-white mx-2 rounded p-1 flex-1"
          value={newComment}
          onChange={handleOnChangeCommnet}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          placeholder="Add a comment"
        />
        <ButtonSaveComment handleOnUpdateComment={handleOnUpdateComment} />
      </SectionComment>
      <SectionSubstak
        showSubstak={todo?.subtasks && todo?.subtasks?.length > 0}
      >
        {todo?.subtasks &&
          todo?.subtasks?.map((st) => (
            <SubTask idTodo={todo.id} key={st.id} {...st} />
          ))}
      </SectionSubstak>
      <Dialog
        className="bg-opacity-20 bg-blue-gray-500"
        open={showCreateSubtask}
        handler={handleOnShowCreateSubtask}
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
            onChange={handleOnChangeNewSubtask}
            type="text"
            placeholder="Create a subtask"
            className="text-black rounded w-full p-1"
          />
          <ButtonSaveSubtask handleOnCreateSubtask={handleOnCreateSubtask} />
        </DialogBody>
      </Dialog>
    </>
  );
}
