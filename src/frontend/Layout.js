import React from 'react'
import PropTypes from 'prop-types'
import ShowActiveTodos from './components/ShowActiveTodos'
import ShowCompletedTodos from './components/ShowCompletedTodos'
import AddTodo from './components/AddTodo'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            todos : [],
            todoName : '',
        }
      }
    onSubmit = (event) => {
        event.preventDefault()
        this.setState(prevstate => {
            return (
                prevstate.todos.push({
                    name: prevstate.todoName,
                    created: new Date().toJSON(),
                    completed: false,
                })
                )
            }
        )
        this.setState({todoName:''})
        console.log(this.state.todos)
    }
    onChange = (event) => {
        this.setState({todoName: event.target.value})
    }
    onClickComplete = (index) => {
        // let filteredArray = this.state.todos.filter(item =>item !==this.state.todos[index])
        // this.setState({todos:filteredArray})
        this.setState((prevstate)=>{
            let newArray = prevstate.todos
            newArray[index].completed = !newArray[index].completed
            return {todos: newArray}
        })   
    }

    render() {
        return (
            <div>
                <AddTodo 
                    value = {this.state.todoName} 
                    onChange = {this.onChange} 
                    onClick = {this.onSubmit}/>
                <ShowActiveTodos todos = {this.state.todos} onClickComplete ={this.onClickComplete} />
                <ShowCompletedTodos todos = {this.state.todos} onClickComplete ={this.onClickComplete} />
            </div>
        )
    }       
}

export default Layout