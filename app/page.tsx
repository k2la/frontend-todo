import Title from "@/app/_components/Title";
import TodoList from "@/app/_components/TodoList";
import { todolist } from "./_utils/data";

export default function Home() {
  return (
    <>
      <Title />
      <TodoList todolist={todolist} />
    </>
  );
}
