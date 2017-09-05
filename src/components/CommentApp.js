

import React from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

//require('styles/index.css')
class CommentApp extends React.Component {

    constructor() {
        super();
        this.state = {
            comments: []
        }
    }

    componentWillMount(){
    	let comments = localStorage.getItem('comments');
    	if(comments){
    		comments=JSON.parse(comments);
    		this.setState({ comments : comments})
    	}
    }


    _handleSubmitComment(comment) {
        if(!comment) return ;
        if(!comment.username) return alert('请输入用户名');
        if(!comment.content)  return alert('请输入评论内容');
        const comments = this.state.comments;
        comments.push(comment)
        this.setState({
            comments: comments
        });

        localStorage.setItem('comments',JSON.stringify(comments))
    }


    handleDeleteComment(index){
     const comments = this.state.comments;
     comments.splice(index,1);
     this.setState({comments});
     localStorage.setItem('comments',JSON.stringify(comments));
    }


    render() {
        return (
      <div className='wrapper'>
       <CommentInput onSubmit={this._handleSubmitComment.bind(this)}/>
       <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)}/>
      </div>
        );
    }
}

CommentApp.defaultProps = {

};

export default CommentApp;
