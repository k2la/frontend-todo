import { Typography } from "@mui/material";
import styles from "./index.module.css";

export default function Title() {
  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        className={styles.title}
      >
        Todo List
      </Typography>
    </>
  );
}
