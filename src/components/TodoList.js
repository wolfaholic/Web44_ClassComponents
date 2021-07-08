import React from "react";
import Todo from "./Todo"

export default function TodoList(props) {
    return (
        <div>
            {props.todo.map(todo => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    )
};