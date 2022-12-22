import { Input } from 'antd';
import React from 'react'
const CommonInput = (props) => {
    const { name, placeholder, prefix, onChange, label, showError, value, errorStatus, errorMessage } = props
    return (
        <>
            <div className='label'>{label}</div>
            <Input
                prefix={prefix?.length > 0 ? prefix : ''}
                placeholder={placeholder}
                className={`field ${showError && errorStatus ? 'ErrorClass' : ''}`}
                name={name}
                onChange={(e) => onChange(name, e.target.value)}
                value={value}
            />
            {showError && errorStatus && <div className='error'>{errorMessage}</div>}
        </>
    )
}

export default CommonInput;