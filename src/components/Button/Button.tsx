import React from 'react'
import './Button.css'

export interface ButtonProps {
  label?: string,
  children?: any,
  classes: string,
  isLoading?: boolean,
  isDisabled?: boolean,
  handleOnClick?: () => void
}

/*
  classes: string // primary-color, outline, contain, small, medium,
  isLoading: boolean
  isDisabled: boolean
*/

const Button = (props: ButtonProps) => {
  const { label, classes, isLoading, isDisabled, handleOnClick, children, ...rest} = props
  return (
    <button
      className={`${classes}`}
      disabled={isDisabled || isLoading}
      onClick={handleOnClick}
      {...rest}
    >

      {isLoading && <div className='button-loader' ></div>}
      <div
        className={`${isLoading ? 'button-content-hidden' : 'button-content'}`}
      >
        {label || children}
      </div>
      
    </button>
  )
}

export default Button
