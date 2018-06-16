import React from 'react'
import PropTypes from 'prop-types'

const addTodo = ({onClick, onChange, value}) => {
    return(
    <div>
        <input type='text' value = {value} onChange = {onChange} /> 
        <button onClick = {onClick}>Add Todo</button>
    </div>
    )
}
export default addTodo