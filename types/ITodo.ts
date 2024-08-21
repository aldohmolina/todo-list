import { ObjectId } from "mongodb";

export interface ITodo {
  text: string;
  _id: ObjectId;
}
