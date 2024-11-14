import DeleteButton from "./DeleteButton";

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface PropsTodos {
  todos: Todo[]; 
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; 
}

export default function Todolist({ todos, setTodos }: PropsTodos) {
  const setToCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo 
      )
    );
  };

  const deleteTask = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id)); 
  };

  return (
    <ul>
      {todos.length === 0 &&(
       <li className="h-full flex justify-center items-center font-bold ">Start by adding a todo</li>) }
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => setToCompleted(todo.id)} // Toggle completion on click
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[0.08]"
        >
          <span className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}>
            {todo.text}
          </span>
          <DeleteButton deleteTask={() => deleteTask(todo.id)} /> 
        </li>
      ))}
    </ul>
  );
}
