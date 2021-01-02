import React from 'react'
import "./FormsContainer.css"

const FormsContainer = (props) => {
    var {children,style} = props
    return (
        <div className = "forms-container" style = {{...style}}>
            <div className="form-logo">
               

            </div>
            {children}
        </div>
    )
}

export default FormsContainer
