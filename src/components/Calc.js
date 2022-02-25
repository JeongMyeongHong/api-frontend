import React, { useState } from "react";
import Layout from "../containers/Layout";
import { memberCalc } from "../api";
export default function Calc() {

    const [inputs, setInputs] = useState({opcode: "+"})
    const [result, setResult] = useState(``)
    const { num1, num2, opcode} = inputs

    const onChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onClick = async (e) => {
        e.preventDefault()
        await memberCalc({ num1, num2, opcode }).then(res => setResult(res.data))
                            .catch(err => { console.log(`에러 발생 :  ${err}`) })
    }

    return (<Layout>
        <h1>계산기</h1>
        <form action="">

            <label htmlFor="">num1</label>
            <input name="num1" type="text" onChange={onChange} /> <br />

            <label htmlFor="">연산자</label>
            <select name="opcode" onChange={onChange} >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select><br />

            <label htmlFor="">num2</label>
            <input name="num2" type="text" onChange={onChange} /><br />

            <button onClick={onClick}>계산하기</button>
        </form>

        <div>결과 : {result} </div>

    </Layout>)
}