import React, { useState } from "react";
import { memberSort } from "../api";
import Layout from "../containers/Layout";

export default function Sort() {
    const [inputs, setInputs] = useState([])
    
    const [result, setResult] = useState(``)


    const creatNum = (e) => {
        e.preventDefault()
        const arr = []
        for (let i = 0; i < 6; i++) {
            arr[i] = Math.floor((Math.random() * 45) + 1)
            console.log(arr[i])
        }
        setInputs(arr)
    }
    const onClick = (e) => {
        e.preventDefault()
        memberSort(inputs)
            .then(res => setResult(res.data))
            .catch(err => { console.log(`에러 발생 :  ${err}`) })
    }

    return (
        <Layout>
            <form action="">
                <h1>Sort</h1>
                <div>
                    <button onClick={creatNum}>숫자 생성</button><br />
                    <label htmlFor="">자동생성된 숫자.</label>
                    <div>{inputs[0]} {inputs[1]} {inputs[2]} {inputs[3]} {inputs[4]} {inputs[5]}</div>
                    <div> {result} </div>
                    <button onClick={onClick}>전송하기</button>
                </div>
            </form>
        </Layout>
    )

}