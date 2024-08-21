"use client";
import { ITodo } from "@/types";
import React, { useState } from "react";
import { Button, CreateTodo, Todo } from ".";

export const MainPage = ({ todos }: { todos: ITodo[] }) => {
  const [filter, setFilter] = useState("all");
  return (
    <>
      <h1 className="text-3xl">NextJS & MongoDB | Todos App</h1>
      <div className="flex my-5 space-x-3">
        <Button
          className={filter === "all" ? "border rounded" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          className={filter === "pending" ? "border rounded" : ""}
          onClick={() => setFilter("pending")}
        >
          Pending
        </Button>
        <Button
          className={filter === "completed" ? "border rounded" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </div>
      <CreateTodo />
      {todos.length > 0 && (
        <section className="mt-10 w-full md:max-w-screen-md">
          <h2 className="text-xl mb-3 md:mb-5">Todos</h2>
          {todos.map((todo) => {
            if (filter !== "all" && todo.status != filter) {
              return;
            } else {
              return <Todo key={todo._id.toString()} {...todo} />;
            }
          })}
        </section>
      )}
    </>
  );
};
