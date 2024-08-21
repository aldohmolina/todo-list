import { getTodos } from "@/actions";
import { MainPage } from "@/components";

export default async function Home() {
  const todos = (await getTodos()) ?? [];

  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <MainPage todos={todos} />
    </main>
  );
}
