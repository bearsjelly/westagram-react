import React, {Component} from 'react';

class InnerComment extends Component{
    render(){
        return(
        <div className="com_txt_block">
            <span>jelly_je2</span>
            {this.props.comments}
        </div>
        );
    }
}

export default InnerComment;