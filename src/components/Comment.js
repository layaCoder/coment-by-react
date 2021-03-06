

import React from 'react'

class Comment extends React.Component {
    constructor(){
      super();
      this.state={timeString : ''}
    }


    componentWillMount(){
      this._updateTimeString();
      this._timer = setInterval(
      this._updateTimeString.bind(this),
      5000
    )
    }


     componentWillUnmount () {
    clearInterval(this._timer)
  }

    _updateTimeString(){
      const comment=this.props.comment;
      const duration = (+Date.now() - comment.createTime) /1000;
      this.setState({timeString:duration > 60 
                    ? `${Math.round(duration / 60)} 分钟前`
                    : `${Math.round(Math.max(duration, 1))} 秒前`});
    }


    _handleDeleteComment(){
      if(this.props.onDeleteComment){
        this.props.onDeleteComment(this.props.index)
      }
    }
  
    render() {
         return (
      <div className='comment'>
        <div className='comment-username'>
          <span>{this.props.comment.username} </span>：
        </div>
        <p>{this.props.comment.content}</p>
         <span className='comment-createdtime'>
           {this.state.timeString}
         </span>
         <span className='comment-delete' onClick={this._handleDeleteComment.bind(this)}> 
           删除
         </span>
      </div>
    )
    }
}

Comment.defaultProps = {

};

export default Comment;
