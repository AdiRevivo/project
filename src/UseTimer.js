
import React,{useState,useEffect} from 'react'

// export default function AddNumber (props)

// {
//     ticks= UseTimer()
//     return(
//         <>
//         {ticks}
//         </>
//         )
//     }
    
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