import React from 'react';
const Login = () => {
    return <>
        <h1>로그인</h1>
        <form>
            <div>
                <img src="" alt="" />
            </div>

            <div>
                <label htmlFor=""></label><b>Username</b><br/>   
                <input type="text" /><br/>

                <label htmlFor=""></label><b>Password</b><br/>
                <input type="text" /><br/>

                <button>Login</button><br/><br/>

                <label htmlFor="">
                    <input type="checkbox" /> Remember me
                </label>
            </div>

            <div>
                <button> cancel</button>
                <span><a></a></span>
            </div>
        </form>
    </>
}
export default Login