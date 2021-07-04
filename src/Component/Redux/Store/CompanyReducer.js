import produce from "immer";
const initialState={
    company:{
        name:"",
       phone:"" 
       
    }
};
export default produce((state,action)=>
{
  switch(action.type) 
  {
      case 'SET_COMPANY_NAME':
          state.company.name=state.payload
          break;
          case 'SET_PHONE':
            state.company.phone=state.payload
            break;

  } 
},initialState)
