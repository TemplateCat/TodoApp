import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useTodo } from './hooks/useTodo';

const TodoApp = () => {
	const {
		todos,
		onNewTodo,
		onDeleteTodo,
		onToggleTodo,
		todosCount,
		todosPending,
	} = useTodo();

	return (
		<>
			<header className="bg-gradient-to-r from-fuchsia-400 to-indigo-800">
				<div className="container mx-auto py-10 px-4 lg:px-20">
					<h1 className="font-bold text-4xl text-slate-100 border-b pb-5">
						Todo App
					</h1>
					<AddTodo onNewTodo={onNewTodo} />
				</div>
			</header>

			<div className="container mx-auto py-10 px-4 lg:px-20">
				<h1 className="text-2xl font-bold text-gray-500 my-5">
					Tareas ({todosCount}) - Pendientes ({todosPending})
				</h1>
				<TodoList
					todos={todos}
					onDeleteTodo={onDeleteTodo}
					onToggleTodo={onToggleTodo}
				/>
			</div>
		</>
	);
};

export default TodoApp;
