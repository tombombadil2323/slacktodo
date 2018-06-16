import React from 'react'
import PropTypes from 'prop-types'

const addTodo = ({onClick, onChange, value}) => {
    const disabled = value.length > 0 ? false:true
    return(
    <div>
        <input type='text' value = {value} onChange = {onChange} /> 
        <button onClick = {onClick} disabled={disabled}>Add Todo</button>
    </div>
    )
}
export default addTodo