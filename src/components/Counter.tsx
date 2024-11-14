interface CounterProps {
  todos: Todo[];  
}

export default function Counter({ todos }: CounterProps) {
  const completedTodos = todos.filter((todo) => todo.isCompleted).length; // Count completed tasks
  return (
    <div>
      <span>{completedTodos} of {todos.length} tasks completed</span>
    </div>
  );
}
