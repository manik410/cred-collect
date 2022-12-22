import React from "react";
import { Select } from 'antd';
import './CommonDropDown.scss'
const { Option } = Select;


const CommonDropDown = (props) => {

    return (<>


        <div className='label'>{props?.label}</div>
        <Select name={props?.name} value={props?.value} onChange={(e) => props.handleChange(props?.name, e)}>
            {props?.dropdownValue?.map((item, index) => <React.Fragment key={`dorp_down-value${index}`}>
                <Option value={item?.key}>{item?.value}</Option>
            </React.Fragment>)
            }

        </Select>
        {props?.showError && props?.errorStatus && <div className='error'>{props?.errorMessage}</div>}

    </>)
}

export default CommonDropDown
