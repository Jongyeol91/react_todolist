import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import uuid from 'uuid/v4'

class TodoList extends Component {
    
    state = {
        todoList: []
    }

    addTodo = (todo) => {
        this.setState(st => ({
            todoList: [...st.todoList, {task: todo.task, id: uuid()}]
        }))
    }

    remove = (id) => {
        console.log(id)
        this.setState(st => ({
            todoList: st.todoList.filter(cv => cv.id !== id)
        }))
    }
    
    render() {
        const todos = this.state.todoList.map((cv) => {
            return <Todo task={cv.task} id={cv.id} key={cv.id} remove={this.remove}/>
        })
        
        return(
            <div>
                <NewTodoForm addTodo={this.addTodo} />
                <ul>
                    {todos }
                </ul>
            </div>
        )
    }
}

export default TodoList