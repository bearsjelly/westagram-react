import React, { Component } from 'react';
import './Login.css'; 
import LoginWrap from './LoginWrap';


class Login extends Component{
    render(){
        return(
            <div className="wrap">
                <div className="logo auto">
                    <h1>instagram</h1>
                </div>
                <LoginWrap />
                <div className="rePw auto">
                    <a href="#">비밀번호를 잊으셨나요?</a>
                </div>
            </div>
        );
    }
}

export default Login;