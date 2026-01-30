import { useRef } from "react";

const ChangeData = () => {
  const titlechange = useRef(null);
  const divchange = useRef(null);
  const buttonchange = useRef(null);
  const inputchnage = useRef(null);
  const inputchange1 = useRef(null);
  const inputchange2 = useRef(null);
  const colourchnage = useRef(null);
  const countRef = useRef(0);
  const displyRef = useRef(null);
  const paraRef = useRef(null);

  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);

  const handleclick = () => {
    titlechange.current.innerText = "Life f**k you in 360 Degree";
    divchange.current.style.backgroundColor = "#38bdf8"; // sky blue
    buttonchange.current.innerText = "Reality";
    inputchnage.current.focus();
  };

  const count = () => {
    countRef.current += 1;
    displyRef.current.innerText = countRef.current;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    colourchnage.current.style.backgroundColor = "#a7f3d0"; // light green
    alert(inputchange1.current.value);
    alert(inputchange2.current.value);
  };

  const Showtext = () => {
    alert(paraRef.current.innerText);
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed top-4 left-4 flex gap-2 z-50">
        <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          onClick={() => scrollToSection(section1)}>Section 1</button>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => scrollToSection(section2)}>Section 2</button>

        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => scrollToSection(section3)}>Section 3</button>

        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          onClick={() => scrollToSection(section4)}>Section 4</button>
      </div>
      <div ref={section1} className="h-screen bg-amber-300 p-10 text-center">
        <h1 ref={titlechange} className="text-3xl font-bold mb-4">
          Welcome to Reality of life
        </h1>

        <input
          ref={inputchnage}
          className="bg-black text-white p-3 rounded w-72"
          placeholder="Just Focus on life"
        />

        <br />

        <button
          ref={buttonchange}
          onClick={handleclick}
          className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Click Me To Change
        </button>
      </div>
      <div ref={section2} className="h-screen bg-blue-200 p-10 text-center">
        <form
          ref={colourchnage}
          onSubmit={handlesubmit}
          className="flex flex-col gap-4 items-center"
        >
          <input ref={inputchange1} className="p-2 rounded w-96"
            placeholder="Are you happy in life?" />

          <input ref={inputchange2} className="p-2 rounded w-96"
            placeholder="What do you miss?" />

          <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">
            Submit
          </button>
        </form>
      </div>
      <div ref={section3} className="h-screen bg-green-200 p-10 text-center">
        <h1 ref={displyRef} className="text-4xl font-bold mb-4">
          Life Count Starts
        </h1>

        <button
          onClick={count}
          className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
        >
          Life Count
        </button>
      </div>
      <div ref={section4} className="h-screen bg-purple-200 p-10 text-center">
        <p ref={paraRef} className="text-xl mb-4">
          Hi Bro... Welcome to Reality of life, do something big.
        </p>

        <button
          onClick={Showtext}
          className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800"
        >
          Show Text
        </button>
      </div>
    </>
  );
};

export default ChangeData;