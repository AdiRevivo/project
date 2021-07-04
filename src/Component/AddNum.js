
import React,{useState,useEffect} from 'react'



export  function AddNum (props)
{
    const ticks=UseTimer()
    return(
        <>   
        {ticks}
        </>
        )
    }
    export  function ShowColor (props)
    {
        const {items}=props
        const ticks=UseTimer()
        
        return(
            <div>
            <p></p>
            {items [ticks % 4]}
            </div>
            )
        }
        function UseTimer(ms=1000)
        {
            const [ticks,setTicks]=useState(0)
            
            function tick(){
                setTicks(val=>val+1)
            }
            useEffect(function(){
                
                const  timer=setInterval(tick,ms)
                return function cancel(){
                    clearInterval(timer)
                }
            },[])
            return ticks;
        }
        