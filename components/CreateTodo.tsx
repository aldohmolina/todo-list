"use client";
import { createTodo } from "@/actions";
import { FormEventHandler, useState } from "react";

export function CreateTodo() {
  const [text, setText] = useState("");

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    try {
      createTodo({ text });
      setText("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="md:mt-10 mt-5 border rounded md:p-5 p-2 flex flex-col items-center justify-center w-full md:max-w-screen-md">
      <h3 className="text-xl">Create Todo:</h3>
      <form onSubmit={handleSubmit} className="flex flex-col md:p-5 p-2 w-full">
        <label htmlFor="create-todo">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            name="todo-text"
            id="todo-text"
            className="text-black rounded w-full p-1"
          />
        </label>
        <button className="mt-2 hover:border hover:rounded">CREATE</button>
      </form>
    </div>
  );
}
