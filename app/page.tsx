import CreateTodo from "@/components/CreateTodo";
import Todo from "@/components/Todo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <h1 className="text-3xl">NextJS & MongoDB | Todos App</h1>

      <CreateTodo />

      <section className="mt-10 w-full md:max-w-screen-md">
        <h2 className="text-xl mb-3 md:mb-5">Todos</h2>
        {Array.from([1, 2, 3]).map((todo) => (
          <Todo text={todo.toString()} key={todo} id={todo} />
        ))}
      </section>
    </main>
  );
}
