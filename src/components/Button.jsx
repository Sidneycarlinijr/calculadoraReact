import React from "react";
import './button.css'

export default function (props) {
    return (
        <button
            className={`defaultButton border-r border-b border-gray-100 ${props.span != null ? `col-span-2` : ''}
                ${props.row != null ? `row-span-2` : ''}
                ${props.bgColor != null ? `bg-${props.bgColor}` : 'bg-gray-100'}`
            }

        >{props.children}
        </button>
    )
}