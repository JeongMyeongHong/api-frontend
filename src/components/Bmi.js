import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import Layout from '../containers/Layout';
export default function Bmi() {
    const [name, setName] = useState("")
    const [height, setHeight] = useState(0.0)
    const [weight, setWeight] = useState(0.0)
    const [bmi, setBmi] = useState(0.0)
    const res = () => {
        let name = document.getElementById('name').value
        let height = document.getElementById('height').value
        let weight = document.getElementById('weight').value
        setName(name)
        setHeight(height)
        setWeight(weight)
        setBmi(weight*10000/height/height)
    }

    return (<Layout>
        <h1>BMI</h1>
        <div>
            <label htmlFor="">이름</label>
            <input type="text" id ="name" /><br />

            <label htmlFor="">키</label>
            <input type="text" id = "height"/><br />

            <label htmlFor="">몸무게</label>
            <input type="text" id = "weight"/><br />

            <div>이름 : {name} 키 : {height} 몸무게 : {weight} </div>

            <button onClick={()=>{res()}}>확인하기</button><br /><br />
            <label htmlFor="">BMI 지수 : {bmi}</label>

        </div>
    </Layout>)
}