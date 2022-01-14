import './App.css';
import { CharacterCounter } from '../WordCounter/CharactherCounter';
import { TodoList } from '../TodoList/Atom/TodoList';

export const App = () => {
  return (
    <div className="App">
      {/* <CharacterCounter /> */}
      <TodoList />
    </div>
  );
}

export default App;
