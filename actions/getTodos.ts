"use server";
import { client } from "@/db";

export const getTodos = async () => {
  const todos = await client
    .db("app-todos")
    .collection("todos")
    .find()
    .toArray();
  return todos;
};
