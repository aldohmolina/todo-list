import { ObjectId } from "mongodb";

export interface ITodo {
  _id: ObjectId;
  text: string;
  status: "pending" | "completed";
  id: string;
  comment: string;
  subtasks: Array<ISubtask>;
}

export interface ISubtask {
  text: string;
  status: "pending" | "completed";
  subtask_id: ObjectId;
  id: string;
}
