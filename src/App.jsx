import './App.css';

import Button from './components/Button';
import Display from './components/Display';


export default function App() {
  return (
    <div className="box rounded">
    <Display></Display>

    <Button bgColor="blue-100">CE</Button>
    <Button >/</Button>
    <Button >*</Button>
    <Button >-</Button>
    <Button>7</Button>
    <Button>8</Button>
    <Button>9</Button>
    <Button row='2'>+</Button>
    <Button>4</Button>
    <Button>5</Button>
    <Button>6</Button>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button bgColor="blue-100" row='2'>=</Button>
    <Button span='2'>0</Button>
    <Button>,</Button>
  </div>
  );
}

