import React from "react";
import {Box, Paper, Typography, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {Todo} from "../../App";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EditIcon from '@mui/icons-material/Edit';

interface ITodoItemProps {
	todo: Todo;
	onDeleteTodo: (id: Todo['id']) => void;
	onCheckedTodo: (id: Todo['id']) => void;
	onEdit: (id: Todo['id']) => void;
}

export const TodoItem = ({todo, onDeleteTodo, onCheckedTodo, onEdit} : ITodoItemProps): JSX.Element => {
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
				opacity: todo.checked ? 0.5 : 1
			}}>
			<Box>
				<Typography
					onClick={() => onCheckedTodo(todo.id)}
					sx={{ fontSize: 30,
						cursor: 'pointer',
						textDecoration: todo.checked ? 'line-through' : 'none'}}
					variant="h5"
					component="div"
					gutterBottom
					textAlign='left'>
					{todo.name}
				</Typography>
				<Typography
					width='450px'
					sx={{ fontSize: 15 }}
					variant="body1"
					component="div"
					gutterBottom
					textAlign='left'>
					{todo.description}
				</Typography>
			</Box>
			<Box display='flex' alignItems='center' justifyContent='right'  width='100px' gap='5px'>
				{!todo.checked && <EditIcon color='primary' aria-label="edit" onClick={() => onEdit(todo.id)}/>}
				{todo.checked && <CheckBoxIcon color='success' aria-label="checked" />}
				<IconButton
					aria-label="delete"
					size="large"
					color="error"
					onClick={() => onDeleteTodo(todo.id)}>
					<DeleteIcon />
				</IconButton>
			</Box>
		</Paper>
	)
}