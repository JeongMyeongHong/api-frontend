import React from 'react';
import Layout from '../containers/Layout';
export default function Bmi(){
    return(<Layout>
        <h1>BMI</h1>
        <form action="">
            <div>
            <label htmlFor="">이름</label>
            <input type="text" /><br/>

            <label htmlFor="">키</label>
            <input type="text" /><br/>

            <label htmlFor="">몸무게</label>
            <input type="text" /><br/>
            <button>확인하기</button><br/><br/>
            <label htmlFor="">BMI 지수</label>

            </div>
        
        </form>
    </Layout>)
}