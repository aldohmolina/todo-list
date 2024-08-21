"use server";
import { client } from "@/db";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export const deleteSubtask = async (id: string | string[]) => {
  try {
    const colletion = client.db("app-todos").collection("sub-todo");
    let revalidate = false;
    if (!Array.isArray(id)) {
      id = [id];
      revalidate = true;
    }

    const result = colletion.deleteMany({
      _id: { $in: id.map((i) => ObjectId.createFromHexString(i)) },
    });

    console.debug("deleteSubstak result:", result);

    revalidate && revalidatePath("/");

    return result;
  } catch (error) {
    console.error("deleteSubstak error:", error);
  }
};
