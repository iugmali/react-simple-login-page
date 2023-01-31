import classes from "./Input.module.css";
import React, {useImperativeHandle, useRef} from "react";

const Input = React.forwardRef(({type, value, isValid, label, id, onChange, onBlur}, ref) => {

  const inputRef = useRef()
  const activate = () => {
    inputRef.current.focus()
  }
  useImperativeHandle(ref, () => {
    return {
      focus: activate
    }
  })

  return (
    <div
      className={`${classes.control} ${
        {isValid} === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        ref={inputRef}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
})

export default Input