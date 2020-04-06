import { getTodos } from './getTodos';
import { saveTodos } from './saveTodos';

export async function toggleTodo(id: string): Promise<boolean> {
  const todos = await getTodos();

  if (todos) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          id: todo.id,
          text: todo.text,
          isComplete: !todo.isComplete,
        };
      } else {
        return todo;
      }
    });

    const todosSaved = await saveTodos(updatedTodos);
    if (todosSaved) {
      return true;
    }
  }

  return false;
}
