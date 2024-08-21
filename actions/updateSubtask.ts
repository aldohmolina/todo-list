"use server";
import { client } from "@/db";
import { ISubtask } from "@/types";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export const updateSubtask = async (
  id: string,
  { text, status }: Partial<ISubtask>
) => {
  try {
    const result = await client
      .db("app-todos")
      .collection("sub-todo")
      .findOneAndUpdate(
        { _id: ObjectId.createFromHexString(id) },
        { $set: { text, status } }
      );

    console.debug("updateSubtask result:", result);
    revalidatePath("/");

    return result;
  } catch (error) {
    console.error("updateSubtask error:", error);
  }
};
