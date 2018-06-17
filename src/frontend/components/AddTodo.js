import React from 'react'
import PropTypes from 'prop-types'

const addTodo = ({onClick, onChangeName, onChangeTag, name, tag, tags}) => {
    const disabled = name.length > 0 ? false:true
    let options = []
    if (Array.isArray(tags)){
            options = tags.map((tag, index)=><option key = {index}>{tag}</option>)
        }
    return(
    <div>
        <input type='text' value = {name} onChange = {onChangeName} placeholder='Todo' /> 
        <input list='tags' value = {tag} onChange = {onChangeTag} placeholder='Tag'/>
        <datalist id='tags' placeholder='Tag'>
            {options}
        </datalist>
        <button onClick = {onClick} disabled={disabled}>Add Todo</button>
    </div>
    )
}
export default addTodo