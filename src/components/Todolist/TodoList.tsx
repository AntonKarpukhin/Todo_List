import {Box} from "@mui/material";
import {TodoItem} from "../TodoItem/TodoItem";
import {Todo} from "../../App";
import {EditTodoItem} from "./editTodoItem";

interface ITodoList {
	editTodoId: Todo['id'] | null;
	todoList: Todo[];
	onDeleteTodo: (id: Todo['id']) => void;
	onCheckedTodo: (id: Todo['id']) => void;
	onEdit: (id: Todo['id']) => void;
	onChangeTodo: ({name, description}: Omit<Todo, 'id' | 'checked'>) => void;
}


export const TodoList = ({todoList, onDeleteTodo, onCheckedTodo, onEdit, editTodoId, onChangeTodo}: ITodoList) => {

	return (
		<Box>
			{todoList.map(item => {
				if (item.id === editTodoId)
					return (
						<EditTodoItem
							key={item.id}
							todo={item}
							onChangeTodo={onChangeTodo}
						/>
					)
				return (
				<TodoItem
					key={item.id}
					todo={item}
					onDeleteTodo={onDeleteTodo}
					onCheckedTodo={onCheckedTodo}
					onEdit={onEdit}
				/>
				);
			})};
		</Box>
	)
}

