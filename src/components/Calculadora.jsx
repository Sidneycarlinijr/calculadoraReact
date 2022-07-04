import React, { useState } from 'react'
import Button from './Button'
import Display from './Display'

export default function Calculator() {

    function setNumber(e) {
        console.log(e)
    }

    return (
        <div className="box rounded">
            <Display></Display>

            <Button click={setNumber} bgColor="blue-100">CE</Button>
            <Button click={setNumber}  >/</Button>
            <Button click={setNumber}  >*</Button>
            <Button click={setNumber}  >-</Button>
            <Button click={setNumber} >7</Button>
            <Button click={setNumber} >8</Button>
            <Button click={setNumber} >9</Button>
            <Button click={setNumber} row='2'>+</Button>
            <Button click={setNumber} >4</Button>
            <Button click={setNumber} >5</Button>
            <Button click={setNumber} >6</Button>
            <Button click={setNumber} >1</Button>
            <Button click={setNumber} >2</Button>
            <Button click={setNumber} >3</Button>
            <Button click={setNumber} bgColor='blue-100' row='2'>=</Button>
            <Button click={setNumber} span='2'>0</Button>
            <Button click={setNumber} >,</Button>
        </div>
    )
}