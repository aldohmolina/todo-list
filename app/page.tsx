import CreateTodo from "@/components/CreateTodo";
import Todo from "@/components/Todo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl">NextJS & MongoDB | Todos App</h1>

      <CreateTodo />

      <section className="mt-20">
        <div>Todos</div>

        <div>
          {Array.from([1, 2, 3]).map((todo) => (
            <Todo text={todo.toString()} key={todo} id={todo} />
          ))}
        </div>
      </section>
    </main>
  );
}
