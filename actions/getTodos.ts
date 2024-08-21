"use server";
import { client } from "@/db";
import { ITodo } from "@/types";

export const getTodos = async () => {
  const todos = (
    await client.db("app-todos").collection("todos").find().toArray()
  ).map((todo) => ({
    ...todo,
    id: todo._id.toString(),
  })) as ITodo[];
  console.debug("todos:", todos);
  return todos;
};
