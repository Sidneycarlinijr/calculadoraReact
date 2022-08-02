import React from "react";
import './button.css'

export default function (props) {
    return (
        <button
            onClick={e => props.click(props.children)}
            className={`defaultButton border-gray-100 hover:bg-gray-300
                ${props.span ? `col-span-2` : ''}
                ${props.row ? `row-span-2` : ''}
                ${props.bgColor ? `bg-blue-100 hover:bg-blue-400` : 'bg-gray-100'}`
            }
        >{props.children}
        </button>
    )
}