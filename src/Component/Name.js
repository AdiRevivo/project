import React , {Component} from 'react'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }      
    }
    render()
    {
        return(
            <>
            new name is: <div> {this.props.name} </div>
            </>
            )
            
        }
    }   