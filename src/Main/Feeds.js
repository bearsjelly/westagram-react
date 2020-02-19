import React, { Component } from 'react';
//import InnerComment from './InnerComment.js';
import profile from "./MainImage/rjy.jpg";

class Feeds extends Component{
    constructor(props){
        super(props);
        this.state={
            comment: "",
            comments:[]
        }
    }
    
    inputValue = e =>{
        this.setState({ comment: e.target.value })
        console.log("this.state.comment", this.state.comment)
        // console.log("comment", e.target.value)
    }

    clickBtn = e => {
        // console.log('hi!')
        this.state.comments.push(
            {
                ID:"jelly_je2",
                comA: this.state.comment
            }
        )
        this.setState({comment: ""})
        // console.log({comA:this.state.comment});
    }

    render(){
        const commentList = this.state.comments.map(
            (el,index) => {
                return (
                    <div className="com_txt_block" key={index}>
                        <p>
                            <span>{el.ID}</span>
                            {el.comA}
                        </p>
                    </div>
                )
            }
        )

        return(
            <div className="feeds">
                    <article>
                        <section id="top" className="pad">
                        <ul>
                            <li className="picture">
                            <a href="#">
                                <img
                                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/68686927_358086835140340_1912180329930555392_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=ycT5hBzs1jYAX_X7bFi&oh=fe7dc5182bb5379aa5feb29569614b9b&oe=5ED3D691"
                                alt="프로필사진" />
                            </a>
                            </li>
                            <li className="userId">
                            <div>
                                <a href="#">jelly_je2</a>
                                <a href="#">위코드</a>
                            </div>
                            </li>
                            <li className="more">
                            <a href="#">더보기</a>
                            </li>
                        </ul>
                        </section>
                        <section id="img">
                        <div>
                            <ul>
                            <li>
                                <img
                                src="https://mimgnews.pstatic.net/image/109/2016/10/26/201610260736778723_580fdef616743_99_20161026074003.jpg?type=w540"
                                alt="img1" /></li>
                            </ul>
                        </div>
                        </section>
                        <section id="text" className="pad">
                        <div id="icon">
                            <ul>
                            <li>
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="좋아요" />
                            </li>
                            <li>
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" alt="댓글" />
                            </li>
                            <li>
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" alt="공유" />
                            </li>
                            <li>
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" alt="북마크" />
                            </li>
                            </ul>
                        </div>
                        <div className="like txt">
                            <p>
                            <img src={profile} alt="프로필사진" />
                            <span>aineworld</span>님 외 <span>여러 명</span>이 좋아합니다
                            </p>
                        </div>
                        <div className="inside txt">
                            <p>
                            <span>jelly_je2</span>류준열 좋아요&#x1F60D;
                            </p>
                            <div class="com_txt_block">
                            </div>
                            <p class="time">
                            46분 전
                            </p>
                            <div>{commentList}</div>
                        </div>
                        </section>
                        <section className="comment">
                            <input 
                                type="textarea" 
                                className="com_txt" 
                                placeholder="댓글 달기..." 
                                value={this.state.comment}
                                onChange={this.inputValue}
                            />
                            <button 
                                className="btn"
                                onClick={this.clickBtn}
                            >게시</button>
                        </section>
                    </article>
                    </div>
        );
    }
}

export default Feeds;