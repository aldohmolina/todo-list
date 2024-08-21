"use server";
// import { db } from "@/db";
import { client } from "@/db";
import { ITodo } from "@/types";
import { revalidatePath } from "next/cache";

export const createTodo = async ({
  text,
  status = "pending",
}: Partial<ITodo>) => {
  const newTodo = await client
    .db("app-todos")
    .collection("todos")
    .insertOne({ text, status });
  console.debug("newTODO created:", newTodo);
  revalidatePath("/");
};
