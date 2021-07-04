

import React from 'react'
import {setNameUser,setLastNameUser,SetAge, actions} from '../Redux/Store/Action'
import {connect} from 'react-redux'

function mapStateToProps(state)
{
   
   return{
      
      nameUser:state.userReducer.users.name,
      lastNameUser:state.userReducer.users.lastName,
      Age:state.userReducer.users.age
      
   };
}

const  mapDispatchToProps = (dispstch)=> ({
   add$ToName:(First_Name)=> dispstch(actions.add$ToName(First_Name)),
   
   setFirstName:(First_Name)=> dispstch(actions.setNameUser(First_Name)),
   setLastName:(Last_Name)=>dispstch (actions. setLastNameUser(Last_Name)),
   setAge:(Age)=>dispstch (actions.setAge(Age))
});


export default connect(mapStateToProps,mapDispatchToProps)(function User(props){
   const {nameUser,lastNameUser,Age,setFirstName,add$ToName,setLastName,setAge} =props;
   
   return(
      
      <>
      <h1> user {nameUser}</h1>
      <div>
      enter name:
      <input type="text" value={nameUser} onChange={(e)=>add$ToName(e.target.value)}></input>
      </div>
      <div>
      enter last name:
      <input type="text"  value={lastNameUser} onChange={(e)=>setLastName(e.target.value)}></input>
      </div>
      <div>
      enter age:
      <input type="text" value={Age} onChange={(e)=>setAge(e.target.value)}></input>
      </div> 
      
      </>
      )
   })
   
   