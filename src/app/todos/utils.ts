import { Todo } from './todo';



export function filterTodos(todos: Todo[], filter: string): Todo[] {
  if (filter === 'ALL') {
    return todos;
  }
  if (filter === 'CHECKED') {
    return todos.filter(t => t.checked === true);
  }
  if (filter === 'NOT_CHECKED') {
    return todos.filter(t => t.checked === false);
  }
}
export function filterSearchTodos(todos: Todo[], regex: RegExp): Todo[] {
  return regex ? todos.filter(t => regex.test(t.name)) : todos;
}
