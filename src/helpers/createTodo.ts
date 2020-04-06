import { Todo } from './types';
import { getTodos } from './getTodos';
import { saveTodos } from './saveTodos';

export async function createTodo(todo: Todo): Promise<boolean> {
  const todos = await getTodos();

  if (todos) {
    todos.push(todo);

    const todosSaved = await saveTodos(todos);
    if (todosSaved) {
      return true;
    }
  }

  return false;
}
