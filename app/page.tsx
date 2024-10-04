import Title from "@/app/_components/Title";
import TodoList from "@/app/_components/TodoList";

const todolist = [
  {
    id: 1,
    content: "test1",
  },
  {
    id: 2,
    content: "test2",
  },
  {
    id: 3,
    content: "test3",
  },
];

export default function Home() {
  return (
    <>
      <Title />
      <TodoList todolist={todolist} />
    </>
  );
}
