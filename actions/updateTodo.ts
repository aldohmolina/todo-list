"use server";
import { client } from "@/db";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

interface IUpdateTodo {
  text: string;
  id: string;
}

export const updateTodo = async ({ text, id }: IUpdateTodo) => {
  try {
    const result = await client
      .db("app-todos")
      .collection("todos")
      .findOneAndUpdate(
        { _id: ObjectId.createFromHexString(id) },
        { $set: { text } }
      );
    console.debug("updateTodo result:", result);
    revalidatePath("/");
  } catch (error) {
    console.error("updateTodo error:", error);
  }
};
