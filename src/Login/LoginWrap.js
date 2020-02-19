import React, { Component } from 'react';

class LoginWrap extends Component{
    constructor(){
        super();
        this.state = {
            id : '',
            pw : ''
        }
    }

    idChange = e => {
        this.setState({id: e.target.value})
    }

    pwChange = e =>{
        this.setState({pw: e.target.value})
    }

    render(){
        return(
            <div className="logIn auto">
                <div className="inputWrap">
                    <input 
                        type="text" 
                        className="ID" 
                        placeholder="전화번호, 사용자 이름 또는 이메일"
                        onChange={this.idChange}
                    />
                </div>
                <div className="inputWrap">
                    <input 
                        type="password" 
                        className="PW" 
                        placeholder="비밀번호" 
                        onChange={this.pwChange}
                    />
                </div>
                <div className="auto">
                {/* {this.state.id.length > 0 && this.state.pw.length > 0 
                ?(<button className="btn2" >로그인</button>)
                :(<button className="btn" >로그인</button>)} */}
                    <button 
                        className={
                            this.state.id.length > 0 && this.state.pw.length > 0 
                            ? "btn2" 
                            : "btn"
                    }>
                        로그인
                    </button>
                </div> 
            </div>
        );
    }
}

export default LoginWrap;