import { useEffect, useState } from "react"

const App = () => {
  const [user, setUser] = useState([])
  const [increment, setIncrement] = useState(0)
  const [save, setSave] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
    const datafecth = async () => {
      const data = await fetch("https://dummyjson.com/products")
      const datashow = await data.json()
      setUser(datashow.products)
    }
    datafecth()
  }, [])

  const handleclick = () => {
    setIncrement(increment + 1)
  }
  const handleInput = (e) => {
    setSave(e.target.value)
  }
  const handleSearch = () => {
    setSearch(save)
  }

  const filterData = user.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  )
  const categories = [...new Set(user.map(p => p.category))]

  return (
    <>
      <div className="bg-violet-500 text-white text-xl p-4 text-center shadow-md">
        <h1>Data Fetch and Show</h1>
      </div>

      <div className="bg-white p-4 flex gap-4 justify-center items-center shadow-sm">
        <input
          type="text"
          placeholder="Enter your Product Name"
          className="border px-4 py-2 rounded-md w-64"
          onChange={handleInput}
        />

        <button
          className="bg-black text-white px-4 py-2 rounded-md"
          onClick={handleSearch}
        >
          Show Details
        </button>

        <button className="bg-violet-600 text-white px-4 py-2 rounded-md">
          Cart {increment}
        </button>
      </div>
      <div className='bg-amber-800 text-center p-3'>
    <select required className='bg-amber
    -300'>
      <option  selected disabled >Select Your Product</option>
      {categories.map((e,i)=>(
        <option key={i+1} value={i+1}>
          {e}
        </option>

      ))}
     </select>
    </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-6 justify-center">
          {filterData.map((element) => (
            <div
              key={element.id}
              className="bg-white w-64 p-4 rounded-lg shadow-md"
            >
              <img
                src={element.images[0]}
                alt={element.title}
                className="h-40 w-full object-cover rounded"
              />
              <h1 className="font-semibold">{element.title}</h1>
              <p className="text-sm text-gray-500">{element.category}</p>
              <p className="font-bold">₹ {element.price}</p>
              <button
                className="bg-black text-white w-full mt-2 py-2 rounded"
                onClick={handleclick}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App