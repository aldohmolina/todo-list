import { getTodos } from "@/actions";
import { CreateTodo, Todo } from "@/components";

export default async function Home() {
  const todos = (await getTodos()) ?? [];
  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <h1 className="text-3xl">NextJS & MongoDB | Todos App</h1>
      <CreateTodo />
      {todos.length > 0 && (
        <section className="mt-10 w-full md:max-w-screen-md">
          <h2 className="text-xl mb-3 md:mb-5">Todos</h2>
          {todos.map((todo) => (
            <Todo key={todo._id.toString()} {...todo} />
          ))}
        </section>
      )}
    </main>
  );
}
