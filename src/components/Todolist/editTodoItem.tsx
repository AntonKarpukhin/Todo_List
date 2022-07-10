import React, {ChangeEvent, useState} from "react";
import {Box, Paper, TextField, Button} from "@mui/material";
import {Todo} from "../../App";
import EditIcon from '@mui/icons-material/Edit';

interface IEditTodoItem {
	todo: Todo;
	onChangeTodo: ({name, description}: Omit<Todo, 'id' | 'checked'>) => void;
}

export const EditTodoItem = ({todo, onChangeTodo} : IEditTodoItem): JSX.Element => {
	const [editTodo, setEditTodo] = useState({name: todo.name, description: todo.description});

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const {value, name} = event.target;
		setEditTodo({...editTodo, [name]: value});
	}

	const onClick = () => {
		onChangeTodo(editTodo);
	}

	return (
		<Paper
			elevation={5}
			sx={{
				marginTop: '20px',
				padding:'15px 30px',
				borderRadius: '10px',
				display: 'flex',
				justifyContent:'space-between',
				alignContent: 'center',
				gap: '5px',
				width: '100%',
			}}>
			<TextField
				value={editTodo.name}
				name= "name"
				onChange={onChange}
				id="outlined-basic"
				label="Задача"
				variant="outlined" />
			<TextField
				value={editTodo.description}
				name='description'
				onChange={onChange}
				id="outlined-basic"
				label="Описание"
				variant="outlined" />
			<Box display='flex' alignItems="center">
				<Button
					endIcon={<EditIcon />}
					onClick={onClick}
					variant="outlined">
					Изменить
				</Button>
			</Box>
		</Paper>
	)
}