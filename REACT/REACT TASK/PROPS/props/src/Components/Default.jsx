const Default =(defaultpropsname)=>{
    return(
        <>
        <div>
            <h1>Hi My name is {defaultpropsname.name} My city is {defaultpropsname.city}</h1>
        </div>
        </>
    )
}
Default.defaultprops={
    city:'Unknown',
}
export default Default