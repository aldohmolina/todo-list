"use server";
import { client } from "@/db";
import { ISubtask, ITodo } from "@/types";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export const createSubtask = async (
  todoId: string,
  { text = "", status = "pending" }: Partial<ISubtask>
) => {
  let result;
  try {
    result = await client
      .db("app-todos")
      .collection("sub-todo")
      .insertOne({ text, status });

    console.debug("createSubtask result:", result);

    const todo = (await client
      .db("app-todos")
      .collection("todos")
      .findOne({ _id: ObjectId.createFromHexString(todoId) })) as ITodo;
    console.debug("createSubtask todo:", todo);

    const todoSubtasks = todo.subtasks ?? [];
    todoSubtasks.push({
      subtask_id: result.insertedId,
      id: result.insertedId.toString(),
      text,
      status,
    });

    result = await client
      .db("app-todos")
      .collection("todos")
      .findOneAndUpdate(
        { _id: ObjectId.createFromHexString(todoId) },
        { $set: { subtasks: todoSubtasks } }
      );
    console.debug("createSubtask result:", result);
    revalidatePath("/");

    return result;
  } catch (error) {
    console.error("createSubtask error:", error);
  }
};
