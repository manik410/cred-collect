import { Select } from 'antd';
import React from 'react';
const { Option } = Select;
const CommonSelect = (props) => {
    const { name, placeholder, style, options, onChange, label, showError,errorStatus, errorMessage } = props
    return (
        <>
            <div className='label'>{label}</div>
            <Select
                allowClear
                style={style}
                placeholder={placeholder}
                className={`field ${showError && errorStatus ? 'ErrorClass' : ''}`}
                name={name}
                onChange={(e) => onChange(name, e)}
            >
                {options.map((item) => <Option key={item?.id} value={item?.value}>{item?.value}</Option>)}
            </Select>
            {showError && errorStatus && <div className='error'>{errorMessage}</div>}
        </>
    )
}
export default CommonSelect;