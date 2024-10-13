import Title from "@/app/_components/Title";
import TodoList from "@/app/_components/TodoList";
import { getAll } from "./_api/todo";

export default async function Home() {
  const todolist = await getAll();
  return (
    <>
      <Title />
      <TodoList todolist={todolist} />
    </>
  );
}
