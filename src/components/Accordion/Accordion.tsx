import React, { Children, useState } from 'react'
import './Accordion.css'
type Props = {
  title: string
  isOpen: boolean
  children: any
  handleOnClick: () => void
  classes?: {
    accordionBody?: string,
    accordionHead?: string,
    accordionTitle?: string,
    accordionContainer?: string,
    accordionIcon?: string,
    
  },
  upIcon?: string,
  downIcon?: string
}

const Accordion = (props: Props) => {
  
  // const [accordionState, setAccordionState] = useState(false)
  return (
    <div
      className={props.classes?.accordionContainer || `accordion-container`}
    >
      {/* heading */}
      <div
        className={props.classes?.accordionHead || `accordion-head`}
        onClick={props.handleOnClick}
      >
        <span
          className={props.classes?.accordionTitle || `accordion-title-style`}
        >{props.title}</span>
        <span
          className={props.classes?.accordionIcon || `accordion-icon-style`}
        >
          {props.isOpen ? props.upIcon || '\u2212': props.downIcon || '\u002B'}
        </span>
      </div>
      
      {props.isOpen && (
        <div
          className={props.classes?.accordionBody || `accordion-body`}
        >
          {props.children}
        </div>
      )}
    </div>
  )
}

export default Accordion