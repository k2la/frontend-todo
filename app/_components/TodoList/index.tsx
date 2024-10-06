import Todo from "@/app/_components/Todo";
import styles from "./index.module.css";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

type TodoType = {
  id: number;
  content: string;
};

type Props = {
  todolist: TodoType[];
};

export default function TodoList({ todolist }: Props) {
  const size = { xs: 6, md: 4, lg: 3 };

  return (
    <>
      <Box className={styles.todoList}>
        <Grid container spacing={{ xs: 1, md: 2, lg: 3 }} width="70%">
          {todolist.map((todo) => (
            <Grid size={size} key={todo.id}>
              <Todo id={todo.id} content={todo.content} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
