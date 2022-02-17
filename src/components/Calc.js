import React from "react";
import Layout from "../containers/Layout";
export default function Calc(){
    return (<Layout>
        <h1>계산기</h1>
        <label htmlFor="">숫자1</label>
        <input type="text" />
        <label htmlFor="">연산자</label>
        <input type="text" />
        <label htmlFor="">숫자1</label>
        <input type="text" />
        <button>계산하기</button><br />

        <label htmlFor="">결과값</label>

    </Layout>)
}