import { getTodos } from './getTodos';
import { saveTodos } from './saveTodos';

export async function removeTodo(id: string): Promise<boolean> {
  const todos = await getTodos();

  if (todos) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    const todosSaved = await saveTodos(filteredTodos);
    if (todosSaved) {
      return true;
    }
  }

  return false;
}
