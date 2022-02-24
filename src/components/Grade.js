import React, { useState }  from "react";
import Layout from "../containers/Layout";
export default function Grade(){
    /*const [name, setName] = useState("")
    const [math, setMath] = useState(0)
    const [kr, setKr] = useState(0)
    const [en, setEn] = useState(0)*/

    const [inputs, setInputs] = useState({})
    const {name, math, kr, en} = inputs

    /*const res=()=>{
        let name = document.getElementById('name').value
        let math = document.getElementById('math').value
        let kr = document.getElementById('kr').value
        let en = document.getElementById('en').value
        setName(name)
        setMath(math)
        setKr(kr)
        setEn(en)
    }*/
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
        const res = {name, math, kr, en}
        alert(`사용자 이름 : ${JSON.stringify(res)}`)
    }

    return(<Layout>
        <h1>성적표</h1>
        <div>
        <label htmlFor="">이름</label>
        <input type="text" onChange={onChange} id = "name" /><br/>

        <label htmlFor="">수학점수</label>
        <input type="text" onChange={onChange} id = "math" /><br/>
        <label htmlFor="">국어점수</label>
        <input type="text" onChange={onChange} id = "kr" /><br/>
        <label htmlFor="">영어점수</label>
        <input type="text" onChange={onChange} id = "en" /><br/>
        <button onClick={onClick}>RUN</button>
        <div>이름 : {name} 수학점수 : {math} 국어점수 : {kr} 영어점수 : {en} </div>
        </div>
    </Layout>)
}
