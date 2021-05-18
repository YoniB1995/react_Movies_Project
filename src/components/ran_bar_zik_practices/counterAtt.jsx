import * as React from 'react'

class CounterAtt extends React.Component{
    constructor(props){
        super(props)
        this.state = {numCyberAtt : 1000};
        this.upEveryTen = this.upEveryTen.bind(this);
        this.makeThisWork = this.makeThisWork.bind(this);
    }
    upEveryTen(){
        const newCount = this.state.numCyberAtt + 10;
        this.setState({numCyberAtt: newCount})
        if(this.state.numCyberAtt == 1050){
            this.setState({numCyberAtt:0})
            clearInterval(this.upEveryTen);
        }
        
    }
    makeThisWork(){
        setInterval(this.upEveryTen,5000);
    }
    
    render(){
        return(<>
        <p>{this.state.numCyberAtt}</p>
        <button onClick={this.makeThisWork}>GO</button>
        </>)
    }
}

export default CounterAtt;