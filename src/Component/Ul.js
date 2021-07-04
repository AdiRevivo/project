import React,{useState,useEffect} from 'react'

export  function Ul (props)
{
    
    const  {ArrProduct,setArrProduct}=props
    
    const  ChangeUl=()=>
    {
        const arr = ChangeName(setArrProduct)
        setArrProduct(arr)
    }
    return(
        <>
        
        <ul >  
        
        {ArrProduct.map(value=>
            <li>
            {value}
            </li>
            )}  
            
            </ul>
            <button onClick={()=>ChangeUl()} >change</button>
            
            
            </>
            )            
        }
        
        export  function Table (props)
        {
            const  {Arrcolor,setArrcolor} =props
            
            const  Change=()=>
            {
                const arr=ChangeName(Arrcolor)
                setArrcolor(arr) 
            }
            
            return(
                <>
                <table>                   
                <th>colors</th>
                {Arrcolor.map(value=>
                    
                    <tr>
                    {value}
                    </tr>
                    )}
                    
                    </table>
                    <button onClick={()=>Change()} >change</button>
                    </>
                    
                    )
                }
                
                function ChangeName(arr) {
                    arr=['adi']
                    return arr
                }
                