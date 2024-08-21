"use server";
import { client } from "@/db";
import { ISubtask, ITodo } from "@/types";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export const updateSubtask = async (
  idTodo: string,
  { id, ...subtask }: Partial<ISubtask>
) => {
  try {
    console.log("subtask to update", { subtask });
    let result;
    result = await client
      .db("app-todos")
      .collection("sub-todo")
      .findOneAndUpdate(
        { _id: ObjectId.createFromHexString(id as string) },
        {
          $set: { id, ...subtask },
        }
      );

    console.debug("updateSubtask result:", result);

    const todo = (await client
      .db("app-todos")
      .collection("todos")
      .findOne({ _id: ObjectId.createFromHexString(idTodo) })) as ITodo;

    result = await client
      .db("app-todos")
      .collection("todos")
      .findOneAndUpdate(
        { _id: ObjectId.createFromHexString(idTodo) },
        {
          $set: {
            ...todo,
            subtasks: (todo.subtasks ?? []).map((st) =>
              st.id === id
                ? {
                    id,
                    ...subtask,
                  }
                : st
            ),
          },
        }
      );

    console.debug("updateTodo result: ", result);

    revalidatePath("/");

    return result;
  } catch (error) {
    console.error("updateSubtask error:", error);
  }
};
