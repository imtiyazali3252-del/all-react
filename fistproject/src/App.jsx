import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const name="Imtiyaz"
 const greet="Hello Everyone"
 let x=10;
 let y=30
function App(){
}
  function fun(){
    return "imtiyaz ali";
  }
function sum(a,b){
  return a+b;
}


 return(

  <div>
    <h1>project run</h1>
    <h2>value of variable{name}</h2>
    <h2>hgh</h2>
    <h3>{x+y}</h3>
    <h1>use a functon in jsx</h1>
    <h2>{fun()}</h2>
    <h3>use in parameterized at a function{sum(32,54)}</h3>
  </div>
 )
}

export default App
