const Child = ({onincrement}) => {
  return (
    <div>
        <button className="bg-black text-white p-2 m-2 rounded" onClick={onincrement}>INCREEMTN FOR CHILD</button>
    </div>
  )
}

export default Child