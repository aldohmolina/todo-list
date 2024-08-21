import client from "@/db";

const db = client.db("app-todos");

export const getTodos = async () => {
  const todos = await db.collection("todos").find().toArray();
  return todos;
};
