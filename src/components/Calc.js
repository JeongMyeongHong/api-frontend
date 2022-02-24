import React, { useState }  from "react";
import Layout from "../containers/Layout";
export default function Calc(){
    /*const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [opcode, setOpcode] = useState("")
    const [result, setResult] = useState(0)*/

    const [inputs, setInputs] = useState({})
    const {num1, num2, opcode, result} = inputs

    const onChange = (e) =>{
        e.preventDefault()
        const {value, id} = e.target
        setInputs({
            ...inputs,
            [id] : value
        })
    }
    
    const onClick = (e) =>{
        e.preventDefault()
        const res = {num1, opcode, num2}
        alert(`사용자 이름 : ${JSON.stringify(res)}`)
    }
    /*const res =()=>{  

        let num1 = document.getElementById('num1').value
        console.log('숫자 1: '+num1)
        let num2 = document.getElementById('num2').value
        
        let opcode = document.getElementById('opcode').value
        setNum1(num1)
        setNum2(num2)
        setOpcode(opcode)
        switch(opcode){
            case "+": setResult(Number(num1)+Number(num2)); break;
            case "-": setResult(Number(num1)-Number(num2)); break;
            case "*": setResult(Number(num1)*Number(num2)); break;
            case "/": setResult(Number(num1)/Number(num2)); break;
            case "%": setResult(Number(num1)%Number(num2)); break;
            default:
        }
    }*/

    return (<Layout>
        <h1>계산기</h1>
        <form action="">

        <label htmlFor="">num1</label>
        <input id ="num1" type="text" onChange={onChange} /> <br/>

        <label htmlFor="">연산자</label>
        <select id="opcode" onChange={onChange} >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
        </select><br/>

        <label htmlFor="">num2</label>
        <input id = "num2" type="text" onChange={onChange} /><br/>


        <button onClick={onClick}>계산하기</button>
        </form>
        
        <div>결과 : {num1} {opcode} {num2} = {result} </div>

    </Layout>)
}