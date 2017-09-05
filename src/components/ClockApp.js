import React from 'react'

class ClockApp extends React.Component {
   constructor(){
   	super()
   	this.state={
   		date: new Date(),
        isShowClock:true
   	}
   }


    handleShowOrHide(){
    	this.setState({isShowClock:!this.state.isShowClock})
    }

   componentWillMount(){
   	this.timer= setInterval(()=>{this.setState({date:new Date()})},1000)
   }

   componentWillUnmount(){
   	clearInterval(this.timer)
   }

    render() {

        return (
    <div>
     <div>现在的时间是:</div>
     <p>{this.state.isShowClock? this.state.date.toLocaleTimeString() : null}</p>
     <button onClick={this.handleShowOrHide.bind(this)}>显示或隐藏始终</button>
    </div>
        );
    }
}

ClockApp.defaultProps = {

};

export default ClockApp;