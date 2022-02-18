import React, { useState }  from 'react';
import Layout from '../containers/Layout';
export default function Login() {
    const [userName, setUserName] = useState("")
    const [pw, setPw] = useState("")

    const lin=()=>{
        let name = document.getElementById('name').value
        let pw = document.getElementById('pw').value
        console.log('이름 : ' + name)
        console.log('비번 : ' + pw)
        setUserName(name)
        setPw(pw)
    }
    return (<Layout>
        <h1>로그인</h1>

            <div>
                <label htmlFor=""></label><b>Username</b><br />
                <input type="text" id = "name"/><br />

                <label htmlFor=""></label><b>Password</b><br />
                <input type="text" id = "pw"/><br />

                <button onClick={()=>{lin()}}>Login</button><br /><br />

                <label htmlFor="">
                    <input type="checkbox" /> Remember me
                </label>
            </div>

            <div> 이름 : {userName} 비번 : {pw} </div>

            <div>
                <button> cancel</button>
            </div>
    </Layout>)
}
