import { useState } from "react"
import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx"

function App() {
  const [userInput,setUserInput]=useState({
    initialInvesment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
})

const inputIsValid=userInput.duration>=1

function handlechange(inputIdentifier,newValue){
  setUserInput(pervUserInput=>{
      return{
          ...pervUserInput,
          [inputIdentifier]:+newValue
      }
  });

}

  return (
    <>
        <Header/>
        <UserInput userInput={userInput} onChange={handlechange}/>
        {!inputIsValid &&( <p className="center"> Please enter a duration greater than Zero </p>)}
        {inputIsValid && <Results input={userInput}/>}
   </>
  )
} 

export default App
