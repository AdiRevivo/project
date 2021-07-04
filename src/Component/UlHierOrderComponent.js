
// import React , {Component} from 'react'

// export  const UlHierOrderComponent=ChangeArr(class UlHierOrderComponent  extends React.Component {  
//     constructor(props){
//         super(props)
//         const {arr}=props
//     }
//     ChangeUl=()=>
//     {
//         setArrProduct=arr
//     }
    
//     render()
//     {
//         const  {ArrProduct,setArrProduct}=this.props
        
//         return(
            
//             <>
            
//             <ul >  
//             {ArrProduct.map(value=>
//                 <li>
//                 {value}
//                 </li>
//                 )}  
                
//                 </ul>
//                 <button onClick={()=>this.ChangeUl()} >change</button>
//                 </>
//                 )
//             }
//         })
        
//         export  const TableHierOrderComponent =ChangeArr(class TableHierOrderComponent  extends React.Component {  
            
//             Change=()=>{
                
//             }
//             render()
//             {      
//                 const  {Arrcolor,setArrcolor} =this.props
//                 const {arr}=this.props
//                 return(
//                     <>
//                     <p>{arr}</p> 
//                     <table>                   
//                     <th>colors</th>
//                     {Arrcolor.map(value=>
                        
//                         <tr>
//                         {value}
//                         </tr>
//                         )}
                        
//                         </table>
//                         <button onClick={()=>this.Change()} >change</button>
//                         </>
//                         )  
//                     }
//                 })
                
//                 function ChangeArr(Component) {
//                     return class TableHierOrderComponent extends React.Component {
//                         constructor(props) {
//                             super(props)
//                             this.state={
//                                 arr=['adi revivo']
//                             }    
//                         }
//                         render() {
//                             const { arr } = this.state
//                             return (
//                                 <>
//                                 <Component arr={arr} {...this.props}></Component>                </>
//                                 )
//                             }
//                         }
//                     }