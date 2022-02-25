import React, { useState } from "react";
import Layout from "../containers/Layout";
import { memberGrade } from "../api";
export default function Grade() {
    const [inputs, setInputs] = useState({})
    const { name, math, kr, en } = inputs
    const [result, setResult] = useState(``)

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
        await memberGrade({ name, math, kr, en }).then(res => { setResult(res.data) })
                            .catch(err => { console.log(`에러 발생 :  ${err}`) })
    }

    return (<Layout>
        <h1>성적표</h1>
        <div>
            <label htmlFor="">이름</label>
            <input type="text" onChange={onChange} name="name" /><br />

            <label htmlFor="">수학점수</label>
            <input type="text" onChange={onChange} name="math" /><br />
            <label htmlFor="">국어점수</label>
            <input type="text" onChange={onChange} name="kr" /><br />
            <label htmlFor="">영어점수</label>
            <input type="text" onChange={onChange} name="en" /><br />
            <button onClick={onClick}>RUN</button>
            <div>이름 : {name} 수학점수 : {math} 국어점수 : {kr} 영어점수 : {en} 결과 : {result} </div>
        </div>
    </Layout>)
}
