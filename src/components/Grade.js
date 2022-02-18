import React, { useState }  from "react";
import Layout from "../containers/Layout";
export default function Grade(){
    const [name, setName] = useState("")
    const [math, setMath] = useState(0)
    const [kr, setKr] = useState(0)
    const [en, setEn] = useState(0)

    const res=()=>{
        let name = document.getElementById('name').value
        let math = document.getElementById('math').value
        let kr = document.getElementById('kr').value
        let en = document.getElementById('en').value
        setName(name)
        setMath(math)
        setKr(kr)
        setEn(en)
    }

    return(<Layout>
        <h1>성적표</h1>
        <div>
        <label htmlFor="">이름</label>
        <input type="text" id = "name" /><br/>

        <label htmlFor="">수학점수</label>
        <input type="text" id = "math" /><br/>
        <label htmlFor="">국어점수</label>
        <input type="text" id = "kr" /><br/>
        <label htmlFor="">영어점수</label>
        <input type="text" id = "en" /><br/>
        <button onClick={()=>{res()}}>RUN</button>
        <div>이름 : {name} 수학점수 : {math} 국어점수 : {kr} 영어점수 : {en} </div>
        </div>
    </Layout>)
}
