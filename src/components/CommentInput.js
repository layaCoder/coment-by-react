
import React from 'react'

class CommentInput extends React.Component {
     
     constructor(){
        super();
        this.state={
            username:'',
            content:''
        }
     }


  _handleUsernameOnChange(event){
    this.setState({username: event.target.value})
  }

  _handleCommentOnChange(event){
    this.setState({content:event.target.value})
  }


  _handleSubmit(){  //想上级组件传递数据
    if(this.props.onSubmit){
        //const{username,content} = this.state;
        this.props.onSubmit({username: this.state.username, //用户名
                             content: this.state.content,  //评论内容
                             createTime: +new Date()});   //创建时间
    }
    this.setState({content:''});
  }

  _handleUsernameBlur(event){
    localStorage.setItem('username',event.target.value);
  }


  
  componentWillMount(){
    const username=localStorage.getItem('username');
    if(username){
        this.setState({username:username})
    }
  }


  componentDidMount(){
    this.textarea.focus();
  }

    render() {
        return (
      <div className='comment-input'>
       <div className='comment-field'>
        <span className='comment-field-name'>用户名:</span>
         <div className='comment-field-input'>
             <input value={this.state.username} onChange={this._handleUsernameOnChange.bind(this)} onBlur={this._handleUsernameBlur.bind(this)}/>
         </div>
       </div>
       <div className='comment-field'>
           <span className='comment-field-name'>评论内容：</span>
           <div className='comment-field-input'>
             <textarea value={this.state.content} onChange={this._handleCommentOnChange.bind(this)} ref={(testarea)=>this.textarea=testarea}/>
           </div>
       </div>
       <div className='comment-field-button' >
           <button onClick={this._handleSubmit.bind(this)}>
            发布
           </button>
       </div>

      </div>
        );
    }
}

CommentInput.defaultProps = {

};

export default CommentInput;
