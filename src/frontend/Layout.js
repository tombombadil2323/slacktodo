import React from 'react'
import PropTypes from 'prop-types'
import ShowActiveTodos from './components/ShowActiveTodos'
import ShowCompletedTodos from './components/ShowCompletedTodos'
import AddTodo from './components/AddTodo'
import firebase, { auth, provider} from '../database/Firebase/Firebase'
import Header from './components/Header/Header'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            todos : [],
            todoName : '',
            user : null,
            todoTag: '',
            tags:[],
        }
      }

      componentDidMount =()=> {
        //picks up the login promise after redirect login
        auth.getRedirectResult().then((result) => {
          if (result.user !==null){
            const user = result.user;          
            this.setState({user})
          }
        })
        //sets the user if logged in
        auth.onAuthStateChanged((user) => {
            if (user) {
              this.setState({user})
            } 
        })
      }
      componentDidUpdate = () => {
        if (this.state.todos.length === 0) {
            const rootRef = firebase.database().ref(`user/${this.state.user.uid}/todos`)
            rootRef.on('value', snapshot => {
                const todoArray = snapshot.val()
                if (Array.isArray(todoArray)){
                    this.setState({todos: todoArray}) 
                }
                               
            })
        }
    }

      //redirects to google login and sets user 
      loginHandler = () => {
        auth.signInWithRedirect(provider);    
      }
      //logs out and updates user:null
      logoutHandler = ()=> {
          auth.signOut()
            .then(() => {
              this.setState({
                user: null,
              });
            });
        }
    onSubmit = (event) => {
        event.preventDefault()
        const rootRef = firebase.database().ref(`user/${this.state.user.uid}/todos`)
        this.setState(prevstate => {
            return (
                prevstate.todos.push({
                    name: prevstate.todoName,
                    tag: prevstate.todoTag,
                    created: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
                    completed: false,
                })
                )
            }, () => rootRef.set(this.state.todos)
        )
        this.setState({todoName:'', todoTag:''})
        this.setState({tags:this.state.todos.map((todo)=>todo.tag).filter((tag,index,tags)=>tags.indexOf(tag)=== index)})
    }
    onChangeName = (event) => {
        this.setState({todoName: event.target.value})
    }
    onChangeTag = (event) => {
        this.setState({todoTag: event.target.value})
    }
    onClickComplete = (index) => {
        const rootRef = firebase.database().ref(`user/${this.state.user.uid}/todos`)
        this.setState((prevstate)=>{
            let newArray = prevstate.todos
            newArray[index].completed = !newArray[index].completed
            return {todos: newArray}
        }, () => rootRef.set(this.state.todos))   
    }

    render() {
        return (
            <div>
                <Header 
                        user={this.state.user} 
                        loginHandler={this.loginHandler} 
                        logoutHandler={this.logoutHandler}
                    />
                <AddTodo 
                    name = {this.state.todoName} 
                    tag = {this.state.todoTag}
                    onChangeName = {this.onChangeName} 
                    onChangeTag = {this.onChangeTag} 
                    onClick = {this.onSubmit}
                    tags = {this.state.todos.map((todo)=>todo.tag).filter((tag,index,tags)=>tags.indexOf(tag)=== index)}                 
                    />
                <ShowActiveTodos todos = {this.state.todos} onClickComplete ={this.onClickComplete} />
                <ShowCompletedTodos todos = {this.state.todos} onClickComplete ={this.onClickComplete} />
            </div>
        )
    }       
}

export default Layout