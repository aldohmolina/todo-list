"use server";
import { client } from "@/db";
import { ITodo } from "@/types";
import { ObjectId } from "mongodb";

import { revalidatePath } from "next/cache";

export const deleteTodo = async (id: string) => {
  try {
    const result = await client
      .db("app-todos")
      .collection("todos")
      .findOneAndDelete({ _id: ObjectId.createFromHexString(id) });
    console.debug("deleteTodo result:", result);
    revalidatePath("/");
  } catch (error) {
    console.error("deleteTodo error:", error);
  }
};
