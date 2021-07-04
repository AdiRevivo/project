import React from 'react'
//import one from 'my-app\src\images\one.jpg'
import one from '../../images/one.jpg'
export default function Child1(props)
{
    return(
        <div>
        <img src={one} style={{width:'500px', height:'500px' }}></img>
        </div>
        )
        
    }