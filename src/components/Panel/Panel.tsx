import {Paper, TextField, Button, Box} from "@mui/material";
import {ChangeEvent, useState} from "react";
import SendIcon from '@mui/icons-material/Send';
import {Todo} from "../../App";


interface IPanel {
	onAddTodo: ({name, description}: Omit<Todo, 'id' | 'checked'>) => void;
}

const DEFAULT_TODO = { name: '', description: '' };

export const Panel = ({onAddTodo}: IPanel) => {
	const [todo, setTodo] = useState(DEFAULT_TODO);

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const {value, name} = event.target;
		setTodo({...todo, [name]: value});
	}

	const onClick = () => {
		if (todo.name !== '' && todo.description !== '' ) {
			onAddTodo(todo);
			setTodo(DEFAULT_TODO);
		}
	}
	

	return (
		<Paper elevation={5}
			   sx={{padding:'15px 30px', borderRadius: '10px', display: 'flex', justifyContent:'space-between', alignContent: 'center', gap: '5px', width: '100%'}}>
			<TextField
				value={todo.name}
				name= "name"
				onChange={onChange}
				id="outlined-basic" 
				label="Задача"
				variant="outlined" />
			<TextField
				value={todo.description}
				name='description'
				onChange={onChange}
				id="outlined-basic" 
				label="Описание"
				variant="outlined" />
			<Box display='flex' alignItems="center">
				<Button
					endIcon={<SendIcon />}
					onClick={onClick}
					variant="outlined">
					Добавить
				</Button>
			</Box>
		</Paper>
	)
}