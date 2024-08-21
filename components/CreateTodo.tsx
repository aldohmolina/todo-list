"use client";
import { FormEventHandler, useState } from "react";

export default function CreateTodo() {
  const [text, setText] = useState("");

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    try {
      console.log("creating todo...");
      setText("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="mt-10 border rounded p-5 flex flex-col items-center justify-center min-w-96">
      <div className="text-xl">Create Todo:</div>
      <form onSubmit={handleSubmit} className="flex flex-col p-5">
        <label htmlFor="create-todo">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            name="todo-text"
            id="todo-text"
            className="text-black rounded"
          />
        </label>
        <button className="mt-2 hover:border hover:rounded">CREATE</button>
      </form>
    </div>
  );
}
