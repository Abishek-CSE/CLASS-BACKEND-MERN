import { useState } from "react"

const EditUser = () => {
    const [details,setDetails] =useState({Name:"AK",Email:"abishek@gmail.com",City:"city"})
            const [storedata,setStoredata]=useState({})
            const handlechnage =(e)=>{
                const datas =e.target.value
                const store_data =e.target.name
                setDetails({...details,[store_data]:datas})
            }
            const handlesubmit =(e)=>{
                e.preventDefault()
                setStoredata(details)
            }
  return (
    <>
        <div className="min-h-screen flex items-center justify-center p-50 bg-violet-300 text-2xl">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-light text-gray-800 mb-8 text-center">
          Edit User
        </h1>
        
        <form className="space-y-5" onSubmit={handlesubmit}>
          <div>
            <input onChange={handlechnage} value={details.Name} type="text" placeholder=" name" name ="Name" className="w-full px-3 py-3 border-b border-gray-300 focus:border-black outline-none text-gray-700"/>
          </div>
          <div>
            <input onChange={handlechnage} value={details.Email} type="emai" placeholder="email" name="email"className="w-full px-3 py-3 border-b border-gray-300 focus:border-black outline-none text-gray-700"/>
          </div>
          <div>
            <input onChange={handlechnage} value={details.City} type="text" placeholder="city" name="city" className="w-full px-3 py-3 border-b border-gray-300 focus:border-black outline-none text-gray-700"/>
          </div>
          <input  type="submit" value={"Check"} className="w-full mt-8 py-3 border border-black text-black hover:bg-black hover:text-white transition duration-200" />
        </form>
        <div >
        <div>
        <h1>{storedata.Name}</h1>
        <h1>{storedata.Email}</h1>
        <h1>{storedata.City}</h1>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default EditUser