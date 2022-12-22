import { DatePicker } from 'antd';
import moment from 'moment';
import React from 'react'
import { DateIcon } from '../../utils/utils';

const CommonDatePicker = (props) => {
    const { name, placeholder, style, onChange, format, label, showError, value, errorStatus, errorMessage, disabledDate } = props
    return (
        <>
            <div className='label'>{label}</div>
            <DatePicker
                suffixIcon={<DateIcon/>}
                disabledDate={disabledDate}
                onChange={(e) => onChange(name, e)}
                className={`field ${showError && errorStatus ? 'ErrorClass' : ''}`}
                placeholder={placeholder}
                style={{ ...style }}
                name={name}
                format={format}
                value={value ? moment(value) : ''}
            />
            {showError && errorStatus && <div className='error'>{errorMessage}</div>}
        </>
    )
}

export default CommonDatePicker;