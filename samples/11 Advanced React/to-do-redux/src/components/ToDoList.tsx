import * as React from 'react';
import {IToDoItem} from "../types";

interface IToDoListProps {
    todos: IToDoItem[]
}

const ToDoList: React.SFC<IToDoListProps> = (props: IToDoListProps) => {
    const items = props.todos.map((todo) => {
        return <li key={todo.task}>{todo.task}</li>
    });

    return (
        <div id="ToDoList">
            <ul>{items}</ul>
        </div>
    );
};

export default ToDoList;