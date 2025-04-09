import React, { ReactNode } from 'react'

interface ButtonProp{
    children: ReactNode;
    //makes optional, have as set options
    color?: 'primary' | 'secondary' | 'danger' | 'warning';
    onClick: () => void;
}
const Button = ({children, onClick, color= 'primary'}: ButtonProp) => {
  return (
    <button className={"btn btn-"+color} onClick={onClick}>{children}</button>
  )
}

export default Button