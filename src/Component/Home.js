import React , {Component} from 'react'
import Name from '../Component/Name'
export default class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"adi"
        }
        
    }
    ChangeName= (name)=>{
        this.setState({name:name});
    }
    render()
    {
        const {name}=this.state
        return(
            <>
            enter name:<input type="text"  value={this.state.name} onChange={(e)=>this.ChangeName(e.target.value)}></input>
            <div>{this.state.name}</div>
            <Name name={name}></Name>
            </>
            )
            
            
        }
    }   