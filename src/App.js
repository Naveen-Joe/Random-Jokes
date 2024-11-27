import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJoke } from "./jokeSlice";

function App() {
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const joke = useSelector((state) => state.joke.joke);
  const dispatch = useDispatch();

  const validCategories = [
    "animal", "career", "celebrity", "dev", "explicit", "fashion", "food", 
    "history", "money", "movie", "music", "political", "religion", 
    "science", "sport", "travel"
  ];

  function handleChangeCategory(e) {
    setCategory(e.target.value);
    setError("");
  }

  function handleFetch() {
    if (!validCategories.includes(category)) {
      setError(`Invalid category. Available categories are: ${validCategories.join(", ")}`);
    } else {
      dispatch(fetchJoke(category));
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="text-3xl font-bold text-gray-800 mb-6"> Random Joke </h1>
      <input className="p-3 w-3/4 max-w-md border rounded-md text-black" placeholder="Enter Random Word" onChange={handleChangeCategory}/>
      <button className="p-2 mt-3 bg-gradient-to-bl from-green-600 to-cyan-600 hover:bg-gradient-to-br from-green-500 to-cyan-400  text-xl text-white rounded-md hover:-translate-x-1 " onClick={handleFetch}disabled={!category}>Get Joke {category } </button>
      {error && <p className="mt-4 text-red-600 text-xl text-center px-4">{error}</p>}
      <h1 className="mt-6 text-2xl text-black  text-center px-4 italic">{joke}</h1>
    </div>
  );
}

export default App;