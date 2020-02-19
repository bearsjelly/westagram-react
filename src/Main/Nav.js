import React, { Component } from 'react';

class Nav extends Component{
    render(){
        return(
            <nav>
                    <div id="gnb">
                    <ul>
                        <li className="logo">
                        <h1><a href="#">logo</a></h1>
                        <h1><a href="#">txtlogo</a></h1>
                        </li>
                        <li><input type="text" placeholder="검색" /></li>
                        <li>
                        <ul className="mypage">
                            <li><a href="#">나침반</a></li>
                            <li><a href="#">좋아요</a></li>
                            <li><a href="#">마이페이지</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </nav>
        );
    }
}

export default Nav;