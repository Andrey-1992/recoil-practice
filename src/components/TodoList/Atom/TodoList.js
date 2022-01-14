import { useRecoilValue } from "recoil";
import { todoListState} from './Atom';
import { TodoItemCreator } from './TodoItemCreator';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const todolist = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}