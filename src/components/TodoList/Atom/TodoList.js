import { useRecoilValue } from "recoil";
import { todoListState } from './Atom';
import { TodoItemCreator } from './TodoItemCreator';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState); // Use RecoilValue beacuse it only reads the value is not going to change it.

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