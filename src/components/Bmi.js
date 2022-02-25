import React, { useState } from 'react';
import Layout from '../containers/Layout';
import { memberBmi } from '../api'
export default function Bmi() {

    const [inputs, setInputs] = useState({})
    const { name, height, weight } = inputs //구조분해할당
    const [result, setResult] = useState(``)

    const onChange = (e) => {
        e.preventDefault() //Default를 막는다.(바닐라스크립트가 디폴트다.)
                            //그래서 이게 없으면 바닐라스크립트로써 먼저 인식을 하게 된다.
                            //우리는 리액트 라이브러리를 원하므로 해준다
        const { value, name } = e.target
        setInputs({ ...inputs, [name]: value })//155p 
    }

    const onClick = async (e) => {
        e.preventDefault()
        await memberBmi({ name, weight, height }).then(res => { setResult(res.data) })
                            .catch(err => { console.log(`에러 발생 :  ${err}`) })
    }

    //return 이하 부분을 jsx라고 한다.
    return (<Layout>
        <form action="">
            <h1>BMI</h1>
            <div>
                <label htmlFor="">이름</label>
                <input type="text" name="name" onChange={onChange} /><br />

                <label htmlFor="">키</label>
                <input type="text" name="height" onChange={onChange} /><br />

                <label htmlFor="">몸무게</label>
                <input type="text" name="weight" onChange={onChange} /><br />

                <div>이름 : {inputs[`name`]} 키 : {inputs[`height`]} 몸무게 : {inputs[`weight`]} </div>

                <input type="button" onClick={onClick} value="BMI 체크" /><br />

            </div>
        </form>
        <div> 결과 : {result}</div>
    </Layout>)
}