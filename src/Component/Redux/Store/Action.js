// export function setNameUser(first_name)
// {
//     return {type:"SET_NAME",payload:first_name }
// } 
// export function setLastNameUser(Last_Name)
// {
//     return {type:"SET_LAST_NAME",payload:Last_Name }
// } 
// export function SetAge(age)
// {
//     return {type:"SET_AGE",payload:age }
// } 
// export function SetCompanyName(nameCompany)
// {
//     return {type:"SET_COMPANY_NAME",payload:nameCompany }
// } 
// export function SetPhone(phone)
// {
//     return {type:"SET_PHONE",payload:phone }
// } function convertActionNameToType(actionName) {
function convertActionNameToType(actionName) {
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase()
}
export const actions = new Proxy(
    {},//target
    
    {
        get: function (target, prop) {
            
            if (target[prop] === undefined) {
                return function (args) {
                    return {
                        type: convertActionNameToType(prop),
                        payload: args
                    };
                }
            }
            else return target[prop];
        }
        
    }
    )
    
    
    
    