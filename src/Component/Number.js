import React , {Component} from 'react'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        
    }
    add1=()=>
    {
        this.setState({count:this.state.count +1}) 
        
        
    }
    
    render()
    {
        return(
            <>
            <button onClick={()=>this.add1()}>Add1</button>
            <div>{this.state.count}</div> 
            </>
            )
            
            
        }
    }   