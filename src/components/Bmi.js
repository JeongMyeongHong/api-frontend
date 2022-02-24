import axios from 'axios';
import React, { useState } from 'react';
import Layout from '../containers/Layout';
export default function Bmi() {

    const [inputs, setInputs] = useState(
        {name : '', height : 0.0, weight : 0.0}
    )
    const {name, height, weight} = inputs

    //const [inputs, setInputs] = useState({})
    //const {name, height, weight} = inputs//Object Destructuring 160p


    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target
        setInputs({
            ...inputs,//155p
            [name]: value
        })
    }

    const handleClick = (e) =>{
        e.preventDefault()
        const bmiRequest = {name, weight, height}
        alert(`사용자 이름 : ${JSON.stringify(bmiRequest)}`)
        
        /*axios.get(`http://localhost:8080/member/bmi/hong/180.5/80.5`)
            .then((res) =>{
                alert(`답장이 도착했습니다 [내용] ${JSON.stringify(res.data)}`)
            })
            .catch((error) =>{
                alert(`응답이 없습니다 [내용] ${error}`)
            })*/

    }


    return (<Layout>
        <form action="">
        <h1>BMI</h1>
        <div>
            <label htmlFor="">이름</label>
            <input type="text" name="name" onChange={handleChange}  /><br />

            <label htmlFor="">키</label>
            <input type="text" name ="height" onChange={handleChange} /><br />

            <label htmlFor="">몸무게</label>
            <input type="text" name ="weight" onChange={handleChange} /><br />

            <div>이름 : {inputs[`name`]} 키 : {inputs[`height`]} 몸무게 : {inputs[`weight`]} </div>

            <input type="button" onClick={handleClick} value="BMI 체크" /><br />

        </div>
        </form>
    </Layout>)
}


    /*const res = () => {
        let name = document.getElementById('name').value
        let height = document.getElementById('height').value
        let weight = document.getElementById('weight').value
        setName(name)
        setHeight(height)
        setWeight(weight)
    }*/