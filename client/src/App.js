
import { CreateTodo } from './components/Todo/CreateTodo';
import ViewTodo from './components/Todo/ViewTodo';
import Header from './components/Head/Header';

function App() {
  return (
    <div >
      <Header/>
      <CreateTodo/>
      <ViewTodo/>
    </div>
  );
}

export default App;
