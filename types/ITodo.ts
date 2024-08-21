import { ObjectId } from "mongodb";

export interface ITodo {
  _id: ObjectId;
  text: string;
  status: "pending" | "completed";
  id: string;
  comment: string;
  subtask: Array<ITodo>;
}
