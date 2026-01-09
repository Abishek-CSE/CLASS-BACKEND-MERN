const RenderingPlayground = () => {
  const MovieName = "JANA NAYAGAN";
  const releaseYear = 2026;
  const characters = [
    "Thalapathy Vijay",
    "Pooja Hedge",
    "Mamitha Bajiu",
    "Bobby Deol",
  ];
  const Director = { id: 1, Name: "H.Vinoth", age: 44 };
  const Songs = [
    { id: 1, Song: "Raavana Mavandaa" },
    { id: 2, Song: "Oru Peru varalaaru" },
    { id: 3, Song: "Chella Magale" }
  ];

  return (
    <div className="rendering-playground">
      <div className="title">
        <h1>{MovieName}</h1>
        <h1>{releaseYear}</h1>
      </div>
      <div className="cast">
        <h1>CAST OF THE JANA NAYAGAN</h1>
        <ul>
          {characters.map((character, index) => (
            <li key={index}>{character}</li>
          ))}
        </ul>
      </div>
      <div className="director">
        <h1>DIRECTOR</h1>
        <ul>
          <li>Director: {Director.Name}</li>
          <li>Age: {Director.age}</li>
        </ul>
      </div>
      <div className="songs">
        <h1>SONGS OF JANA NAYAGAN</h1>
        <ul>
          {Songs.map((song) => (
            <li key={song.id}>{song.Song}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RenderingPlayground;
