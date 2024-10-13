import { API_SERVER_URL, todolist, TodoType } from "@/app/_utils/data";
// import { API_SERVER_URL } from "../_utils/data";

// すべてのTODOの取得
export async function getAll() {
  // const todos = await fetch(API_SERVER_URL + "/tasks");
  return todolist;
}

// TODOの内容の更新
export async function update(todo: TodoType) {
  await fetch(API_SERVER_URL + "/tasks/" + String(todo.id));
}

// TODOの削除
export async function remove(todo: TodoType) {
  await fetch(API_SERVER_URL + "/tasks/" + String(todo.id));
}

// TODOの完了
export async function done() {}
