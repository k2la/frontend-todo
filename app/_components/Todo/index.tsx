import styles from "./index.module.css";
import { Box, TextField } from "@mui/material";
import DeleteOutlineRounded from "@mui/icons-material/DeleteOutlineRounded";
import { TodoType } from "@/app/_utils/data";

type Props = {
  todo: TodoType;
  update(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void;
};

export default function Todo({ todo, update }: Props) {
  const boxStyle = {
    width: "80%", // 親の幅に依存させる
    height: "80%",
    aspectRatio: "16 / 9", // アスペクト比を指定
    backgroundColor: "lightblue", // 背景色を設定して可視化
  };
  const textFieldRows = 5;

  return (
    <>
      <Box sx={boxStyle} p={2}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          multiline
          fullWidth
          minRows={textFieldRows}
          maxRows={textFieldRows}
          value={todo.title}
          onBlur={update}
        />
        <Box className={styles.icons}>
          <DeleteOutlineRounded />
        </Box>
      </Box>
    </>
  );
}
