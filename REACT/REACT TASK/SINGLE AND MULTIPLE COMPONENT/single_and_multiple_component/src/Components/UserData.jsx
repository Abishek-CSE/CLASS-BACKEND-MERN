const UserData = ({ senddata }) => {
  return (
    <div className="bg-black text-white p-10 flex gap-5 flex-wrap justify-center">
      {senddata.map((e) => (
        <div
          className="w-52 p-4 rounded bg-white text-black flex flex-col gap-3"
          key={e.id}
        >
          <img src={e.image} alt={e.firstName} />
          <h1 className="bg-black text-white rounded-full px-3 py-1 w-fit">
            {e.firstName}
          </h1>
          <p>{e.lastName}</p>
          <button className="bg-black text-white p-2 rounded">
            Book Now
          </button>
        </div>
      ))}
    </div>
  )
}

export default UserData
