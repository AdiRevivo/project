import React,{useState,useEffect,useRef} from 'react'
import Reset from '../Reset'


export default function Product (props)
{
    const[Product ,setProduct]=useState([{name:'milk',qty:5},{name:'bird',qty:2},{name:'choclata',qty:3}]);
    const ref = useRef()
    
    const addQty=(qty,index)=>
    {
        
        let newP=Product[index]
        newP.qty = qty+1
        // setProduct[index]=newP[index]
        // alert(newP.qty)
        alert(Product[index].qty)
    }
    const update=(e)=>
    {
        let newP=Product.name
        alert(ref.current.value)
        
    }
    return(
        <>
        { Product.map((item,index)=>(
            
            <li>
            
            < input type="text" onChange={(e)=>update(e.target.value)} /> 
            {item.name}
            {item.qty}
            
            <button onClick={()=>addQty(item.qty,index)}>add</button>
            <button onClick={()=>update()}>update</button>
            
            </li>
            
            
            
            ))}
            
            </>
            )
        }