import Title from "@/app/_components/Title";
import TodoList from "@/app/_components/TodoList";
import { TASKS } from "./_libs/tasks";

export default async function Home() {
  const todolist = await TASKS.getAll();
  return (
    <>
      <Title />
      <TodoList todolist={todolist} />
    </>
  );
}
