import useForm from '../hooks/useForm';

const AddTodo = ({ onNewTodo }) => {
	const { description, onInputChange, onResetForm } = useForm({
		description: '',
	});

	const onFormSubmit = (e) => {
		e.preventDefault();

		if (description.trim().length <= 0) return;

		const newTodo = {
			id: new Date().getTime(),
			done: false,
			description: description,
		};

		onNewTodo(newTodo);

		onResetForm();
	};

	return (
		<form className="flex my-5" onSubmit={onFormSubmit}>
			<input
				type="text"
				placeholder="Agregar tarea"
				name="description"
				value={description}
				onChange={onInputChange}
				autoComplete="off"
				className="bg-slate-500/50 border-2 border-slate-100/50 text-white rounded-tl-lg rounded-bl-lg outline-none p-2 min-w-[250px] transition-all duration-500 placeholder:text-white focus:border-fuchsia-400"
			/>
			<button className="bg-white/30 font-semibold rounded-tr-lg rounded-br-lg text-white py-2 px-3 transition-all duration-500 hover:bg-white/50">
				Agregar
			</button>
		</form>
	);
};

export default AddTodo;
