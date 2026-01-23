import { useState } from "react"

const ProductForm = () => {
    const [details,setDetails] =useState({ProductName:"",Price:"",Quantity:""})
        const [storedata,setStoredata]=useState({})
        const [condition,setCondition] = useState("")
    
        const handlechnage =(e)=>{
            const datas =e.target.value
            const store_data =e.target.name
            setDetails({...details,[store_data]:datas})
        }

        // const datasqunt= 10
        const handlesubmit =(e)=>{
            e.preventDefault()
            setStoredata(details)


            if(storedata.Quantity===0){

                setCondition("Out Of stock")

            }else if(storedata.Quantity<5){
                setCondition("Low Of stock")
            }else{
                setCondition("stock in hand")
            }
        }
  return (
    <>
    <div className="min-h-screen flex items-center justify-center p-50 bg-violet-300 text-2xl">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-light text-gray-800 mb-8 text-center">
          Product Form 
        </h1>
        
        <form className="space-y-5" onSubmit={handlesubmit}>
          <div>
            <input onChange={handlechnage} type="text" placeholder="Product name" name ="Name" className="w-full px-3 py-3 border-b border-gray-300 focus:border-black outline-none text-gray-700"/>
          </div>
          <div>
            <input onChange={handlechnage} type="number" placeholder="Price" name="Price"className="w-full px-3 py-3 border-b border-gray-300 focus:border-black outline-none text-gray-700"/>
          </div>
          <div>
            <input onChange={handlechnage} type="number" placeholder="Quantity" name="Quantity" className="w-full px-3 py-3 border-b border-gray-300 focus:border-black outline-none text-gray-700"/>
          </div>
          <input  type="submit" value={"Check"} className="w-full mt-8 py-3 border border-black text-black hover:bg-black hover:text-white transition duration-200" />
        </form>
        <div >
        <div>
        <h1>{storedata.Name}</h1>
        <h1>{storedata.Price}</h1>
        <h1>{storedata.Quantity}</h1>

        <p>{condition}</p>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductForm
