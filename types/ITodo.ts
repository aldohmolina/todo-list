import { ObjectId } from "mongodb";

export interface ITodo {
  text: string;
  status: "pending" | "completed";
  _id: ObjectId;
}
