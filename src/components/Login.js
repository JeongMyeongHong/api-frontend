import React, { useState } from 'react';
import Layout from '../containers/Layout';
import { memberLogin } from '../api';
export default function Login() {
    const [inputs, setInputs] = useState({})
    const { userId, pw } = inputs
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
        memberLogin({ userId, pw }).then(res => { setResult(res.data) })
                            .catch(err => { console.log(`에러 발생 :  ${err}`) })
    }


    return (<Layout>
        <h1>로그인</h1>

        <div>
            <label htmlFor=""></label><b>Username</b><br />
            <input type="text" onChange={onChange} name="userId" /><br />

            <label htmlFor=""></label><b>Password</b><br />
            <input type="text" onChange={onChange} name="pw" /><br />

            <button onClick={onClick}>Login</button><br /><br />

        </div>
        <div> 이름 : {userId} 비번 : {pw} <br/>{result}</div>

    </Layout>)
}
