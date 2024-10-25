"use client";
import { ListItem, TextField } from "@mui/material";
import styles from "./index.module.css";
import { TodoType } from "@/app/_utils/data";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";

type Props = {
  todo: TodoType;
  api: {
    update(todo: TodoType): Promise<void>;
    remove(id: number): Promise<void>;
    complete(id: number): Promise<void>;
  };
};

export default function Todo({ todo, api }: Props) {
  const [todoItem, setTodoItem] = useState(todo);
  const handleChange = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newTodo = {
      id: todoItem.id,
      title: e.target.value,
      done: todoItem.done,
    };
    setTodoItem(newTodo);
  };
  const handleBlur = async () => {
    await api.update(todoItem);
  };
  const remove = async () => {
    await api.remove(todoItem.id);
  };

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            sx={{ bgcolor: todo.done ? "green" : "grey" }}
            onClick={() => api.complete(todo.id)}
          >
            <CheckIcon />
          </Avatar>
        </ListItemAvatar>
        <TextField
          variant="standard"
          value={todoItem.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <IconButton aria-label="delete">
          <DeleteIcon onClick={remove} />
        </IconButton>
      </ListItem>
    </>
  );
}
