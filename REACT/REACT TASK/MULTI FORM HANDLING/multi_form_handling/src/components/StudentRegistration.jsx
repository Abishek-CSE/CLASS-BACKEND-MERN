import { useState } from "react"
const StudentRegistration = () => {
    const [details,setDetails] =useState({Name:"",Email:"",Course:"",age:""})
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
          Student Registration
        </h1>
        
        <form className="space-y-5" onSubmit={handlesubmit}>
          <div>
            <input onChange={handlechnage} type="text" placeholder="Full name" name ="Name" className="w-full px-3 py-3 border-b border-gray-300 focus:border-black outline-none text-gray-700"/>
          </div>
          <div>
            <input onChange={handlechnage} type="email" placeholder="Email" name ="Email" className="w-full px-3 py-3 border-b border-gray-300 focus:border-black outline-none text-gray-700"/>
          </div>
          <div>
            <input onChange={handlechnage} type="text" placeholder="Course" name="Course"className="w-full px-3 py-3 border-b border-gray-300 focus:border-black outline-none text-gray-700"/>
          </div>
          <div>
            <input onChange={handlechnage} type="number" placeholder="Age" name="age" className="w-full px-3 py-3 border-b border-gray-300 focus:border-black outline-none text-gray-700"/>
          </div>
          <input  type="submit" value={"Register"} className="w-full mt-8 py-3 border border-black text-black hover:bg-black hover:text-white transition duration-200" />
        </form>
        <div >
            <div>
                <h1>{storedata.Name}</h1>
        <h1>{storedata.Email}</h1>
        <h1>{storedata.Course}</h1>
        <h1>{storedata.age}</h1>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default StudentRegistration