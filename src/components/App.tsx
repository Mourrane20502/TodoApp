import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Todolist from "./TodoList";

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="flex justify-center items-center font-sans bg-[#f1d4b3] min-h-screen">
      <main className="w-[972px] h-[636px] bg-white rounded-[10px] shadow-lg grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header todos={todos} />
        <Todolist todos={todos} setTodos={setTodos} />
        <Sidebar todos={todos} setTodos={setTodos} />
      </main>
    </div>
  );
}

export default App;
