import React, { useState } from 'react'
import Button from './Button'
import Display from './Display'

export default function Calculator() {

    var [num, setNum] = useState(0)

    function calc(e){
        console.log(e)
        setNum(num + e)
    }
    
    return (
        <div className="box rounded">
            <Display num={num}></Display>

            <Button click={calc} bgColor="blue-100">CE</Button>
            <Button click={calc}  >/</Button>
            <Button click={calc}  >*</Button>
            <Button click={calc}  >-</Button>
            <Button click={calc} >7</Button>
            <Button click={calc} >8</Button>
            <Button click={calc} >9</Button>
            <Button click={calc} row='2'>+</Button>
            <Button click={calc} >4</Button>
            <Button click={calc} >5</Button>
            <Button click={calc} >6</Button>
            <Button click={calc} >1</Button>
            <Button click={calc} >2</Button>
            <Button click={calc} >3</Button>
            <Button click={calc} bgColor='blue-100' row='2'>=</Button>
            <Button click={calc} span='2'>0</Button>
            <Button click={calc} >,</Button>
        </div>
    )
}