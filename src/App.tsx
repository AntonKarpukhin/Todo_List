import React, {useState} from 'react';
import './App.css';
import {Header, Panel, TodoList} from "./components";
import {Box} from "@mui/material";

export type Todo =  {
	id: number,
	name: string,
	description: string,
	checked: boolean
}

function App() {

	const [editTodoId, setEdiTodoId] = useState<number | null>(null);
	const [todoList, setTodoList] = useState([
		{id: 1, name: 'Задача 1', description: 'fdsf', checked: false},
		{id: 2, name: 'Задача 2', description: 'fdsf fsfs dfs fs', checked: false},
		{id: 3, name: 'Задача 3', description: 'fdsf fds vcxs dsf fsdfsdf sd f fdsf fds vcxs dsf fsdfsdf sd ffdsf fds vcxs dsf fsdfsdf sd f', checked: true}
	])


	const onAddTodo = ({name, description}: Omit<Todo, 'id' | 'checked'>) => {
		setTodoList([...todoList, {id: todoList[todoList.length - 1].id + 1, description, name, checked: false}])
	}

	const onDeleteTodo = (id: Todo['id']) => {
		setTodoList(todoList.filter(item => item.id !== id))
	}

	const onCheckedTodo = (id: Todo['id']) => {
		setTodoList(todoList.map(item => {
			if (item.id === id) {
				return {...item, checked: !item.checked}
			}
			return item
		}));

	}

	const onEdit = (id: Todo['id']) => {
		setEdiTodoId(id);
	}

	const onChangeTodo = ({name, description}: Omit<Todo, 'id' | 'checked'>) => {
		setTodoList(todoList.map(item => {
			if (item.id === editTodoId) {
				return {...item, name, description}
			}
			return item
		}));
		setEdiTodoId(null);
	}

	return (
	  <div className="App">
		<Box display='flex' flexDirection='column' width='600px'>
			<Header/>
			<Panel onAddTodo={onAddTodo} />
			<TodoList
				editTodoId={editTodoId}
				todoList={todoList}
				onDeleteTodo={onDeleteTodo}
				onCheckedTodo={onCheckedTodo}
				onEdit={onEdit}
				onChangeTodo={onChangeTodo}
			/>
		</Box>
	  </div>
  );
}

export default App;
