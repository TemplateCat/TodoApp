const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
	return (
		<li
			className={`flex items-center justify-between bg-white rounded ${
				todo.done ? 'opacity-50' : ''
			}`}
		>
			<span
				className={`text-slate-600 p-5 w-full first-letter:uppercase ${
					todo.done ? 'line-through' : ''
				}`}
				onClick={() => onToggleTodo(todo.id)}
			>
				{todo.description}
			</span>
			<button className="p-5" onClick={() => onDeleteTodo(todo.id)}>
				<i className="bi bi-x-circle text-red-500 text-2xl"></i>
			</button>
		</li>
	);
};

export default TodoItem;
