import produce from "immer";
import createReducer from "../ReducerUntil"

const initialState={
    users:{
        name:"Adi",
        lastName:"Revivo",
        age:"22"
    }
};
// export default produce((state,action)=>
// {
//   switch(action.type) 
//   {
//       case 'SET_NAME':
//           state.users.name=action.payload
//           break;
//           case 'SET_LAST_NAME':
//             state.users.lastName=action.payload
//             break;

//             case 'SET_AGE':
//                 state.users.age=action.payload
//                 break;
//   } 


const user={
    setNameUser(state,action)
    {
        state.users.name=action.payload
    },
    setLastNameUser(state,action)
    {
        state.users.lastName=action.payload
    },
    setAge(state,action)
    {
        state.users.age=action.payload
    },
}
export default produce((state,action)=>createReducer(state,action,user),initialState)







