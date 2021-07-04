import React,{useState,useEffect} from 'react'
import Reset from '../Reset'

export default function Counter (props)
{
    const[count ,setCount]=useState(0);
    useEffect(()=>
    {
        alert(count)
    },[count])
    const add=()=>
    {
        setCount(count+1)
    }
    const  resetC=()=>
    {
        setCount(0)
    }
    return(
        <>
        <p>counter</p>
        <button onClick={add} >add</button>   
        <div>  {count}  </div>
        <Reset reset={resetC}></Reset>
        </>
        )
    }