import Counter from "./Counter"
import Logo from "./Logo"

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

interface PropsTodos {
  todos: Todo[]; 
}

export default function Header({ todos }: PropsTodos) {
  return (
    <header className="flex justify-between items-center px-[24px] col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08]">
      <Logo />
      <Counter todos={todos} />
    </header>
  );
}
