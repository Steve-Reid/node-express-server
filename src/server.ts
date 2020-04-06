import express from 'express';
import cors from 'cors';
import { getTodos } from './helpers/getTodos';
import { Todo } from './helpers/types';
import { createTodo } from './helpers/createTodo';
import { removeTodo } from './helpers/removeTodo';
import { toggleTodo } from './helpers/toggleTodo';

const PORT = 7777;
const app = express();

app.options('*', cors());
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

app.get('/todos', cors(corsOptions), async (req, res) => {
  const todos = await getTodos();

  res.send(todos);
});

app.post('/create', cors(corsOptions), async (req, res) => {
  const todo: Todo = req.body;
  const savedTodo: boolean = await createTodo(todo);

  if (savedTodo) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

app.post('/toggle-complete', cors(corsOptions), async (req, res) => {
  const { id } = req.body;
  const toggledTodo: boolean = await toggleTodo(id);

  if (toggledTodo) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

app.delete('/delete', cors(corsOptions), async (req, res) => {
  const { id } = req.body;
  const removedTodo = await removeTodo(id);

  if (removedTodo) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
