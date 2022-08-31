import React from 'react'

const Question1Comp = ({ type, name, value, handleChange, labelText }) => {
    return (
        <div>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default Question1Comp