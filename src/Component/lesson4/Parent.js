import React, { useState } from 'react'


export default function Parent(props)
{
    const [currentPage,setcurrentPage]=useState(0)
    const numerOfPage=React.Children.count(props.children)
    
    function PageComponent(pageIndex)
    {
        const child=React.Children.toArray(props.children)[pageIndex]
        return React.cloneElement(child)
    }
    return(
        <>
        <button disabled={currentPage>=numerOfPage-1}
        onClick={()=>setcurrentPage(v=>v+1)}
        >next</button> 
        
        <button disabled={currentPage===0}
        onClick={()=>setcurrentPage(v=>v-1)}
        >prev</button>
        {PageComponent(currentPage)}
        </>
        )
        
        
    }