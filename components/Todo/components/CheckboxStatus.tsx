import { Checkbox as _Checkbox } from "@/components";
import { useTodo } from "../hooks/useTodo";
import { ITodo } from "@/types";

export const Checkbox = (todo: ITodo) => {
  const { newStatus, handleOnUpdateStatus } = useTodo(todo);
  return (
    <_Checkbox
      checked={newStatus === "completed"}
      color="green"
      onChange={async () => {
        await handleOnUpdateStatus();
      }}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      crossOrigin={() => {}}
    />
  );
};
