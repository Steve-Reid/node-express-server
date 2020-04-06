import { readFileSync } from 'fs';
import { Todo } from './types';

export async function getTodos(): Promise<Todo[] | undefined> {
  try {
    const data = await readFileSync('src/data/todoData.json', {
      encoding: 'utf8',
    });
    return JSON.parse(data);
  } catch (err) {}
}
