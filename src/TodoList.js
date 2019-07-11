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
            todoList: [...st.todoList, {task: todo.task, id: uuid(), completed: false}]
        }))
    }

    remove = (id) => {
        console.log(id)
        this.setState(st => ({
            todoList: st.todoList.filter(cv => cv.id !== id)
        }))
    }

    update = (id, updatedTask) => {
        let updatedTodoList = this.state.todoList.map(cv => {
            if (cv.id === id) {
                return {task: updatedTask, id: cv.id};
            }
            return cv;
        })
        this.setState({
            todoList: updatedTodoList
        })
    }

    toggleCompletion = (id) => {
        let updatedTodoList = this.state.todoList.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        })
        this.setState({
            todoList: updatedTodoList
        })
    }
    
    render() {
        const todos = this.state.todoList.map(cv => {
            return <Todo
                task={cv.task}
                completed={cv.completed}
                toggleCompletion={this.toggleCompletion}
                id={cv.id}
                key={cv.id} 
                remove={this.remove} 
                update={this.update}
                />
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