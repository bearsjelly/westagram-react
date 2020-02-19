import React, {Component} from 'react';

class SidePush extends Component{
    render(){
        return(
            <div className="push-in">
            <div className="push-img">
                <a href="#"><img src={this.props.img} alt="프로필 이미지" /></a>
            </div>
            <div className="push-txt">
                <ul>
        <li><a href="#">{this.props.name}</a></li>
        <li><span>{this.props.user}</span> 팔로우 합니다</li>
                </ul>
                <a href="#">팔로우</a>
            </div>
            </div>
        );
    }
}

export default SidePush;