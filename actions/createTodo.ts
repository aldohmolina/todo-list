"use server";
// import { db } from "@/db";
import { client } from "@/db";
import { ITodo } from "@/types";
import { revalidatePath } from "next/cache";

export const createTodo = async ({ text }: Partial<ITodo>) => {
  const newTodo = await client
    .db("app-todos")
    .collection("todos")
    .insertOne({ text });
  console.log("newTODO created:", newTodo);
  revalidatePath("/");
};
