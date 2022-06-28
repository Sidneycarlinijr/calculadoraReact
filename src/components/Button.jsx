import React from "react";
import './button.css'

export default function (props) {

    return (
        <button 
            className={`defaultButton ${ props.span != null ? `col-span-${props.span}` : ''}
                ${props.row != null ? `row-span-2` : ''}`
        }
            
            >{props.children}
        </button>
    )
}