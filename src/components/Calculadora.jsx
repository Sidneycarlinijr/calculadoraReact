import React, { useState } from 'react'
import Button from './Button'
import Display from './Display'

export default function Calculator() {
    var [num, setNum] = useState(0)
    var [oldNum, setOldNum] = useState(0)
    var [operator, setOperator] = useState('')

    function display(e) {
        num === 0 ? setNum(e) : setNum(num + e);         //valida primeiro numero - se 0 substitui
    }

    function clear() {
        setNum(0)
        setOldNum(0)
    }

    function operatorHandler(e) {
        setOperator(e)
        setOldNum(num)
        setNum(0)
    }

    function calc() {
        var dividir = 0
        switch (operator) {
            case '/': (setNum ((parseFloat(oldNum) / parseFloat(num)).toFixed(10)))
                break;
            case '*': (setNum ((parseFloat(oldNum) * parseFloat(num)).toFixed(10)))
                break;
            case '-': (setNum ((parseFloat(oldNum) - parseFloat(num)).toFixed(10)))
                break;
            case '+': (setNum ((parseFloat(oldNum) + parseFloat(num)).toFixed(10)))
                break;
        }
    }

    return (
        <div className="box rounded">
            <Display num={num}></Display>

            <Button click={clear} bgColor="blue-100">C</Button>
            <Button click={operatorHandler}  >/</Button>
            <Button click={operatorHandler}  >*</Button>
            <Button click={operatorHandler}  >-</Button>
            <Button click={display} >7</Button>
            <Button click={display} >8</Button>
            <Button click={display} >9</Button>
            <Button click={operatorHandler} row='2'>+</Button>
            <Button click={display} >4</Button>
            <Button click={display} >5</Button>
            <Button click={display} >6</Button>
            <Button click={display} >1</Button>
            <Button click={display} >2</Button>
            <Button click={display} >3</Button>
            <Button click={calc} bgColor='blue-100' row='2'>=</Button>
            <Button click={display} span='2'>0</Button>
            <Button click={display} >.</Button>
        </div>
    )
}