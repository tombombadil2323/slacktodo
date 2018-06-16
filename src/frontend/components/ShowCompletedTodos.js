import React from 'react'
import PropTypes from 'prop-types'

const showCompletedTodos = ({todos, onClickComplete}) => {
    todos = todos || []
    return todos.length > 0 ?
    todos.map(({name, created, completed}, index) => {
        return (
        completed &&
         <div key={index} onClick={()=>onClickComplete(index)} style={{textDecorationLine:"line-through"}}>
            {name}, {created}
        </div>)
    })
    : <div></div>
}

export default showCompletedTodos