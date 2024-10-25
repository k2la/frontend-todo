"use client";
import Todo from "@/app/_components/Todo";
import { List } from "@mui/material";
import { TodoType } from "@/app/_utils/data";
import { TASKS } from "@/app/_libs/tasks";
import TodoForm from "../TodoForm";
import { useState } from "react";
type Props = {
  todolist: TodoType[];
};

export default function TodoList({ todolist }: Props) {
  const [list, setList] = useState<TodoType[]>(todolist);
  const add = async (title: string) => {
    try {
      const newTodo: TodoType = await TASKS.add(title);
      setList([...list, newTodo]);
      console.log(newTodo);
    } catch (e) {}
  };

  const update = async (todo: TodoType) => {
    try {
      console.log("update");
      await TASKS.update({
        id: todo.id,
        title: todo.title,
        done: todo.done,
      });
    } catch (e) {}
  };

  const remove = async (id: number) => {
    try {
      await TASKS.remove(id);
    } catch (e) {}
    setList(list.filter((todo) => todo.id !== id));
  };

  const complete = async (id: number) => {
    try {
      console.log("complete");
      await TASKS.complete(id);
      setList(
        list.map((todo) =>
          todo.id === id
            ? { ...todo, title: todo.title, done: !todo.done }
            : todo
        )
      );
    } catch (e) {}
  };

  const api = { add, update, remove, complete };

  return (
    <>
      <List>
        {list.map((todo) => (
          <Todo key={todo.id} todo={todo} api={api} />
        ))}
        <TodoForm api={api} />
      </List>
    </>
  );
}
