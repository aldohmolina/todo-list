"use server";
import { client } from "@/db";
import { ITodo } from "@/types";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export const deleteSubtask = async (idTodo: string, id: string | string[]) => {
  try {
    console.log("idTodo", idTodo);
    const todo = (await client
      .db("app-todos")
      .collection("todos")
      .findOne({
        _id: ObjectId.createFromHexString(idTodo),
      })) as ITodo;

    console.debug("todo to delete substasks", todo);
    const colletion = client.db("app-todos").collection("sub-todo");

    if (!Array.isArray(id)) {
      id = [id];
    }

    let result;
    result = await colletion.deleteMany({
      _id: { $in: id.map((i) => ObjectId.createFromHexString(i)) },
    });

    console.debug("deleteSubstak result:", result);

    result = await client
      .db("app-todos")
      .collection("todos")
      .findOneAndUpdate(
        { _id: ObjectId.createFromHexString(idTodo) },
        {
          $set: {
            ...todo,
            subtasks: (todo.subtasks ?? []).filter((st) => !id.includes(st.id)),
          },
        }
      );

    console.debug("deleteTodoSubstak result:", result);

    revalidatePath("/");

    return result;
  } catch (error) {
    console.error("deleteSubstak error:", error);
  }
};
