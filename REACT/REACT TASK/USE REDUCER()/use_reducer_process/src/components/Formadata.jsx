import { useReducer } from "react"
const initial = {name:"",email:""}
const formfunction=(state,action)=>{
    switch (action.type) {
        case 'Name':
            return {...state,name:action.payload}
        case 'Email':
            return {...state,email:action.payload}
        case 'reset':
            return initial
        default:
            return state
    }

}
const Formadata = () => {
    const [state,dispatch]=useReducer(formfunction,initial)
  return (
    <>
    <div>
        <input onChange={()=>dispatch({type:"Name",payload: e.target.value})} type="text" placeholder="Name" value={state.name} />
        <input onChange={()=>dispatch({type:"Email",payload:e.target.value})} type="email"placeholder="Email" value={state.email} />
        <button onClick={()=>dispatch({type:"reset"})}>Submit</button>
    </div>
    </>
  )
}

export default Formadata