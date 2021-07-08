import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newToDo:''
        }
    }

    handleChanges = (e) => {
     const { name, value } = e.target;
     this.setState ({
         [name]: value,
     });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.newToDo);
        this.setState({
            newToDo: "",
        });
         };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="todo-input">New Task </label>
                <input 
                id="todo-input" 
                name="newToDo"
                value={this.state.newToDo} 
                type="text" 
                todo="todo" 
                onChange={this.handleChanges} />
                <button>Add Task</button>
            </form>
        );
    }
}

export default TodoForm;