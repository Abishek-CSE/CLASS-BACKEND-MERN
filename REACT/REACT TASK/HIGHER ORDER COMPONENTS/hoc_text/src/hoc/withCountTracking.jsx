const withCountTracking =(Wrapped)=>( props)=>{
    return <Wrapped {...props}/>
}
export default withCountTracking