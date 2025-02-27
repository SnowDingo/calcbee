
import "./App.css";
import {useEffect, useState} from "react";
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

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                checkExpressionandcalculate(operation);
            } else if (event.key === "Backspace") {
                setOperation(operation.substring(0, operation.length - 1));

            } else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
                setOperation(operation + event.key);
            } else if (event.key >= "0" && event.key <= "9") {
                setOperation(operation + event.key);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    },[operation]);


    return (
    <main className="container w-full h-full ">
        <h1>CalcBee!</h1>
        {/*Below here is the actual calculator*/}
        <div className="w-1/2 flex justify-center mr-auto ml-auto  flex-col ">
        <div className=" bg-white border-black  border-solid　 p-4 my-2 rounded-md">
            <input autoFocus className="font-bold w-full border-none focus:border-none p-2 text-2xl" type="text" value={operation} readOnly></input>
        </div>
            <div className="flex flex-row justify-center ">
        <div className="grid grid-cols-3 gap-none w-1/3  ">
            {Array.from({ length: 10 }, (_, i) => (
                <NumberButton key={9-i} value={(9-i).toString()} onClick={() => handleNumber((9-i).toString())} />
            ))}
            <OperationButton value={"="} onClick={()=> {checkExpressionandcalculate(operation)}} />
        </div>
        <div className="flex flex-col items-center text-center justify-center  ">
            {/* AC*/}
            {/*Dlt button*/}
            <OperationButton value={"⌫"}  onClick={() => {setOperation(operation.substring(0,operation.length-1))}} />
            {/*Other basic operations*/}
            <OperationButton value={"+"} onClick={() => handleOperation("+")} />
            <OperationButton value={"-"} onClick={() =>   {handleOperation("-")}} />
            <OperationButton value={"*"} onClick={() => {handleOperation("*")}} />
            <OperationButton value={"/"} onClick={() => {handleOperation("/")}} />
        </div>
                <div>
                    <OperationButton value={"AC"}  onClick={() => {setOperation("")}} />
                </div>
            </div>
        </div>
    </main>
  );
}

export default App;
