import React, {Component} from 'react';

class SideStory extends Component{
 
    render(){
        // var lists =[];
        // var data = this.props.data;
        // var i =0;
        // while(i<data.length){
        //     lists.push(
        //     <div className="story-in" key={data[i].id}>
        //         <div className="story-play">
        //             <div className="story-img">
        //                 <a hre f="#">
        //                 <img src={data[i].img} alt="프로필 이미지" /></a>
        //             </div>
        //             <div className="story-txt">
        //                 <ul>
        //                     <li><a href="#">{data[i].name}</a></li>
        //                     <li><span>{data[i].time}</span></li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        //     )
        // i = i+1;
        // }
        return(
            <div className="story-in">
                <div className="story-in" key={this.props.id}>
                <div className="story-play">
                    <div className="story-img">
                        <a hre f="#">
                        <img src={this.props.img} alt="프로필 이미지" /></a>
                    </div>
                    <div className="story-txt">
                        <ul>
                            <li><a href="#">{this.props.name}</a></li>
                            <li><span>{this.props.time}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default SideStory;