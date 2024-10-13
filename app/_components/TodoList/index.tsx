"use client";

import Todo from "@/app/_components/Todo";
import { List } from "@mui/material";
import { TodoType } from "@/app/_utils/data";
import { TASKS } from "@/app/_api/tasks";

type Props = {
  todolist: TodoType[];
};

export default function TodoList({ todolist }: Props) {
  const add = async (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    await TASKS.add(e.target.value);
  };

  const update = async (
    todo: TodoType,
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    await TASKS.update({
      id: todo.id,
      title: e.target.value,
      done: todo.done,
    });
  };

  const remove = async (id: number) => {
    console.log("remove");
    await TASKS.remove(id);
  };

  const complete = async (id: number) => {
    console.log("complete");
    await TASKS.complete(id);
  };

  const api = { add, update, remove, complete };

  return (
    <>
      <List>
        {todolist.map((todo) => (
          <Todo key={todo.id} todo={todo} api={api} />
        ))}
      </List>
    </>
  );
}
