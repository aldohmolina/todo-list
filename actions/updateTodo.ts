"use server";
import { client } from "@/db";
import { ITodo } from "@/types";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export const updateTodo = async ({
  text = "",
  id = "",
  status = "pending",
  comment = "",
}: Partial<ITodo>) => {
  try {
    const result = await client
      .db("app-todos")
      .collection("todos")
      .findOneAndUpdate(
        { _id: ObjectId.createFromHexString(id) },
        { $set: { text, status, comment } }
      );
    console.debug("updateTodo result:", result);
    revalidatePath("/");
  } catch (error) {
    console.error("updateTodo error:", error);
  }
};
