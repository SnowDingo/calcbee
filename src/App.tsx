
import "./App.css";
import {useState} from "react";
import NumberButton from "./components/NumberButton.tsx"
import OperationButton from "./components/OperationButton.tsx";

import { evaluate} from "mathjs"

function App() {
    const [operation, setOperation] = useState("");

    const handleNumber = (num:string) => {
        setOperation(operation+num);
    }
    const handleOperation = (num:string) => {
        setOperation(operation+num);
    }

    // validate if the expression is only the allowed characters
    function checkExpressionandcalculate(num:string) {
       try{
            var result = evaluate(num);
            setOperation(result);
       } catch {
       setOperation("ERROR")
    }
    }


    return (
    <main className="container w-full h-full ">
        <h1>CalcBee!</h1>
        {/*Below here is the actual calculator*/}
        <div className="w-1/2 flex justify-center mr-auto ml-auto  flex-col ">
        <div className=" bg-white border-black  border-solid　 p-4 my-2 rounded-md">
            <input className="font-bold w-full border-none focus:border-none p-2 text-2xl" type="text" value={operation} readOnly></input>
        </div>
            <div className="flex flex-row justify-center ">
        <div className="grid grid-cols-3 gap-none w-1/3  ">
            {Array.from({ length: 10 }, (_, i) => (
                <NumberButton key={9-i} value={(9-i).toString()} onClick={() => handleNumber((9-i).toString())} />
            ))}
        </div>
        <div>
            {/*Dlt button*/}
            <OperationButton value={"⌫"}  onClick={() => {setOperation(operation.substring(0,operation.length-1))}} />
            {/*Other basic operations*/}
            <OperationButton value={"+"} onClick={() => handleOperation("+")} />
            <OperationButton value={"-"} onClick={() =>   {handleOperation("-")}} />
            <OperationButton value={"*"} onClick={() => {handleOperation("*")}} />
            <OperationButton value={"/"} onClick={() => {handleOperation("/")}} />
            <OperationButton value={"="} onClick={()=> {checkExpressionandcalculate(operation)}} />
        </div>
            </div>
        </div>
    </main>
  );
}

export default App;
