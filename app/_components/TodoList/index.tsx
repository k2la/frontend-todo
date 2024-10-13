"use client";

import Todo from "@/app/_components/Todo";
import styles from "./index.module.css";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { TodoType } from "@/app/_utils/data";

type Props = {
  todolist: TodoType[];
};

export default function TodoList({ todolist }: Props) {
  const size = { xs: 6, md: 4, lg: 3 };
  const onUpdate = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newTitle: string = e.target.value;
    console.log(newTitle);
  };

  return (
    <>
      <Box className={styles.todoList}>
        <Grid container spacing={{ xs: 1, md: 2, lg: 3 }} width="70%">
          {todolist.map((todo) => (
            <Grid size={size} key={todo.id}>
              <Todo todo={todo} update={onUpdate} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
