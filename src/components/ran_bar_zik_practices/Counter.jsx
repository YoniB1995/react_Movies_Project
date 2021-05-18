
import * as React from 'react'
import Button from '@material-ui/core/Button';


class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = { count:0};
        this.moveUp = this.moveUp.bind(this);
        this.moveDown = this.moveDown.bind(this);
        this.resetNum = this.resetNum.bind(this);
        
    }

    moveUp(){
        const newCount = this.state.count + 1;
        this.setState({count: newCount});
    }
    moveDown(){
        const newCount = this.state.count - 1;
        this.setState({count: newCount});
    }
    resetNum(){
        this.setState({count: 0});
    }


    render(){
        return ( 
            <div>
                <p>The number is : {this.state.count}</p>
                <Button variant="contained" color="secondary"  onClick={this.moveUp} >Up</Button>
                <Button variant="contained" color="secondary"  onClick={this.moveDown} >Down</Button>
                <Button variant="contained" color="secondary"  onClick={this.resetNum} >Reset</Button>

                
            </div>

        )
    }
}

export default Counter;

// הדרך הרגילה להשמה של קומפוננטה
// function Counter(){
    
//     const [num , SetUpNum] = useState(0);
//     useEffect(()=>{
//         console.log('Re-rendered',num)
//     })
//     function moveUp(){
//         SetUpNum(num + 1);
//     }
//     function moveDown(){
//         SetUpNum(num - 1);
//     }
//     function resetNum(){
//         SetUpNum(0)
//     }

//     return(
//         <div>
//             <p>The number is : {num}</p>
//             <button onClick={moveUp}>UpNum</button>
//             <button onClick={moveDown}>DownNum</button>
//             <button onClick={resetNum}>RESET</button>
//         </div>
//     )
// }

// export default Counter;