import React from 'react'

import './css/Login.css'

const InputField = ({className, propValue, onChange, placeholder}) => {
  return (
    <div className={className}>
      <input
        className="login-input"
        type="text"
        placeholder={placeholder}
        value={propValue}
        onChange={onChange}
        required
      />
    </div>
  )
}
export default InputField