import Todo from "@/app/_components/Todo";

type TodoType = {
  id: number;
  content: string;
};

type Props = {
  todolist: TodoType[];
};

export default function TodoList({ todolist }: Props) {
  return (
    <>
      {todolist.map((todo) => (
        <div key={todo.id}>
          <Todo id={todo.id} content={todo.content} />
        </div>
      ))}
    </>
  );
}
