import { writeFile } from 'fs';
import { Todo } from './types';

export async function saveTodos(todos: Todo[]): Promise<boolean> {
  const data = JSON.stringify(todos, null, 2);

  writeFile('src/data/todoData.json', data, (err) => {
    if (err) {
      console.error(err);
      return false;
    }
  });

  return true;
}
