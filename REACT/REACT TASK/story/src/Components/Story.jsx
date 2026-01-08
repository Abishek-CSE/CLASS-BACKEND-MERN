import { useNavigate } from "react-router-dom";

const Family = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
          LEO Family Story
        </h1>

        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <p className="mb-4">
            Parthiban is a café owner in Kashmir living peacefully with his
            family. When hyenas attack his café, he fights back and becomes a
            local hero.
          </p>
          <p>
            This draws the attention of a crime syndicate who believes he
            is actually Leo Das, the long-lost son of a powerful drug lord. Main
            Plot Points: Dual Identity Mystery: Is Parthiban really Leo Das, the
            notorious gangster who was thought to be dead? Family in Danger: As
            the criminal world closes in, Parthiban must protect his family
            while confronting a violent past he may have forgotten. Villains:
            Antony Das (Parthiban/Leo's father, a drug kingpin) and Harold Das
            (jealous brother) The Hyena Attack: The bizarre animal attack that
            triggers the entire plot Key Characters: Vijay as Parthiban/Leo Das
            Trisha as Sathya (wife) Sanjay Dutt as Antony Das (father) Arjun as
            Harold Das (brother) Gautham Vasudev Menon as a police officer Why
            It's Popular: Directed by Lokesh Kanagaraj (director of "Kaithi",
            "Vikram") Part of the Lokesh Cinematic Universe (LCU) Massive action
            sequences and emotional family drama References to "A History of
            Violence" (2005 film with similar plot) Stunning Kashmir
            cinematography Iconic Scenes: The hyena attack in the café The "Naa
            Ready" song sequence The chocolate factory fight The emotional
            father-son confrontation Box Office: Became one of the
            highest-grossing Tamil films of all time, earning over ₹600 crore
            worldwide. Rating: 7.2/10 IMDb | 76% Rotten Tomatoes
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
          >
            Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-orange-600 rounded hover:bg-orange-700"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Family;
