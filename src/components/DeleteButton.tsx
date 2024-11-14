interface DeleteButtonProps {
  deleteTask: () => void;
}

export default function DeleteButton({ deleteTask }: DeleteButtonProps) {
  
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    deleteTask();
  };

  return (
    <button onClick={handleDelete} className="text-red-500">
      ❌
    </button>
  );
}
