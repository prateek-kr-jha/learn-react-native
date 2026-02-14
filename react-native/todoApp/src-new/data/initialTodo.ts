import { Todo } from '../types/todo.ts';

const currentDate: Date = new Date();

export const initialTodo: Todo[] = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget varius tellus, sit amet efficitur diam. Phasellus pharetra lacus quis magna scelerisque consectetur tristique eu dui. Duis molestie velit tortor.eat',
    completed: false,
    created_dt: currentDate,
    due_dt: currentDate,
  },
  {
    id: 2,
    text: 'kill cockroaches',
    completed: false,
    created_dt: currentDate,
    due_dt: currentDate,
  },
  {
    id: 3,
    text: 'cook',
    completed: true,
    created_dt: currentDate,
    due_dt: currentDate,
  },
  {
    id: 4,
    text: 'bath',
    completed: true,
    created_dt: currentDate,
    due_dt: currentDate,
  },
];
