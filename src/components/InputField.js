import React from 'react'

const InputField = ({value, name, placeholder, type, onChange}) => {
  return (
    <div className="form-container">
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}
export default InputField