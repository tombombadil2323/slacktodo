import React from 'react'
import PropTypes from 'prop-types'

const showActiveTodos = ({todos = [], onClickComplete}) => {
    return todos.length > 0 ?
    todos.map(({name, created, completed, tag}, index) => {
        return (
        !completed &&
         <div key={index} onClick={()=>onClickComplete(index)}>
            {name}, {created}, {tag}
        </div>)
    })
    : <div></div>
}

export default showActiveTodos