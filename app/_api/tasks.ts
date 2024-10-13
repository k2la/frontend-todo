import { API_SERVER_URL, todolist, TodoType } from "@/app/_utils/data";
// import { API_SERVER_URL } from "../_utils/data";

// すべてのTODOの取得
async function getAll() {
  // const todos = await fetch(API_SERVER_URL + "/tasks");
  return todolist;
}

async function add(title: string) {
  await fetch(API_SERVER_URL + `/tasks/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
    }),
  });
}

// TODOの内容の更新
async function update(todo: TodoType) {
  await fetch(API_SERVER_URL + `/tasks/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: todo.title,
      // done: todo.done,
    }),
  });
}

// TODOの削除
async function remove(id: number) {
  await fetch(API_SERVER_URL + `/tasks/${id}`, {
    method: "DELETE",
  });
}

// TODOの完了
async function complete(id: number) {
  await fetch(API_SERVER_URL + `/tasks/${id}/done`, {
    method: "PUT",
  });
}

export const TASKS = {
  getAll,
  add,
  update,
  remove,
  complete,
};
