"use server";
import { client } from "@/db";
import { ITodo } from "@/types";
import { ObjectId } from "mongodb";

import { revalidatePath } from "next/cache";
import { deleteSubtask } from "./deleteSubtask";

export const deleteTodo = async (id: string) => {
  const db = client.db("app-todos");
  const collectionTodos = db.collection("todos");
  const collectionSubTodos = db.collection("sub-todos");

  try {
    const todo = (await collectionTodos.findOne({
      _id: ObjectId.createFromHexString(id),
    })) as ITodo;
    let result;
    result = await deleteSubtask(
      todo.id,
      todo.subtasks.map((subtask) => subtask.id)
    );
    console.debug("delete subtask result:", result);
    result = await client
      .db("app-todos")
      .collection("todos")
      .findOneAndDelete({ _id: ObjectId.createFromHexString(id) });
    console.debug("deleteTodo result:", result);
    revalidatePath("/");
  } catch (error) {
    console.error("deleteTodo error:", error);
  }
};
