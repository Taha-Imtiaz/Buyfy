import React from 'react'
import "./Button.css"
import Paragraph from '../Paragaraph/Paragraph'

const Button = (props) => {
var {children, fontSize =12, backgroundColor = '#4287f5', color = "black" , style, ...restProps} = props

    return (
        <button {...restProps} style = {{...style, background: backgroundColor}} className = "button-container">
           <Paragraph fontColor = {color} style = {{letterSpacing:"0.2rem"}} fontSize = {fontSize}>{children}</Paragraph> 
        </button>
    )
}

export default Button
