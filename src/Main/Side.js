import React, {Component} from 'react';
import SideStory from './SideStory';
import SidePush from './SidePush';
import { 
    data,
    pushdata
 } from './data';

class Side extends Component{

    render(){
        return(
            <div className="fix">
                    <div className="main-right">
                        <div className="right-profile">
                        <div className="pro_img">
                            <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/68686927_358086835140340_1912180329930555392_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=ycT5hBzs1jYAX_X7bFi&oh=fe7dc5182bb5379aa5feb29569614b9b&oe=5ED3D691" alt="프로필 사진" />
                        </div>
                        <div className="pro_txt">
                            <div><a href="#">jelly_je2</a></div>
                            <div>콩젤리</div>
                        </div>
                        </div>
                        <div className="story right-wrap">
                        <div className="story-top right-top">
                            <p>스토리</p>
                            <a href="#">모두 보기</a>
                        </div>
                        <div className="story-scroll">
                            {data.map(el=><SideStory id={el.id} name={el.name} img={el.img} time={el.time} />)}
                        </div>
                        </div>
                        <div className="push right-wrap">
                        <div className="right-top">
                            <p>회원님을 위한 추천</p>
                            <a href="#">모두 보기</a>
                        </div>
                        <div className="push-wrap">
                           {pushdata.map(el=><SidePush id={el.id}
                           name={el.name} user={el.user} img={el.img} />)}
                        </div>
                        
                        </div>
                        <div class="footer">
                        <div>
                            <ul>
                            <li>
                                <a href="#">Instagram 정보<span>&middot;</span></a>
                            </li>
                            <li><a href="#">지원<span>&middot;</span></a></li>
                            <li><a href="#">홍보 센터<span>&middot;</span></a></li>
                            <li><a href="#">API<span>&middot;</span></a></li>
                            <li><a href="#">채용 정보<span>&middot;</span></a></li>
                            <li><a href="#">개인정보처리방침<span>&middot;</span></a></li>
                            <li><a href="#">약관<span>&middot;</span></a></li>
                            <li><a href="#">디렉터리<span>&middot;</span></a></li>
                            <li><a href="#">프로필<span>&middot;</span></a></li>
                            <li><a href="#">해시태그<span>&middot;</span></a></li>
                            <li><a href="#">언어<span>&middot;</span></a></li>
                            </ul>
                        </div>
                        <div>
                            <p>
                            &copy;2020 INSTAGRAM
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
        );
    }
}
export default Side;