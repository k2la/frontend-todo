"use client";

import { ListItem, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

type Props = {
  api: {
    add(title: string): Promise<void>;
  };
};

export default function TodoForm({ api }: Props) {
  const [title, setTitle] = useState("");
  const add = async () => {
    try {
      await api.add(title);
    } catch (e) {
      throw new Error();
    }
  };
  return (
    <>
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <TextField
          variant="standard"
          onChange={(e) => setTitle(e.target.value)}
        />
        <IconButton>
          <AddIcon onClick={add} />
        </IconButton>
      </ListItem>
    </>
  );
}
