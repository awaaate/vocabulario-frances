import React from 'react';


import {StyledFormInput} from  './styled.components'
const FormInput = ({label, handleChange,value, ...otherProps}) => (
    <StyledFormInput value={value} className="form-control">
        <input onChange={handleChange} value={value} {...otherProps}/>
        <label>{label} </label>
    </StyledFormInput>
)

export default FormInput