

import React from 'react'


import {connect} from 'react-redux'

function mapStateToProps(state)
{
    
    return{
        
        userName:state.userReducer.users.name,
        LastName:state.userReducer.users.lastName,
        age:state.userReducer.users.age
        
    };
} 
export default connect(mapStateToProps) (function company(props)
{
    const {userName,LastName,age}=props;
    
    // function calc (str) {
    //     let arr=str.split('')
    //     if(arr[1]=='+')
    //     return Number( arr[0]) +Number(arr[2])
    //     else
    //     return arr[0]-arr[2]
    // }
    // let str=('90-2');
    // alert(calc(str))
    return(
        <>
        <h1>company</h1>
        <p>hellow  {userName+"  "+LastName+"  "+age}</p>
        </>
        ) ;
    });