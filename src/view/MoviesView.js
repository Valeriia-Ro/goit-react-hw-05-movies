import { useState } from "react";

export default function Movies({ onSubmit }) {
  const [searchWord, setSearchWord] = useState("");

  const handleChange = (e) => {
    setSearchWord(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(searchWord);
    setSearchWord("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movies"
        value={searchWord}
        onChange={handleChange}
      />

      <button type="submit">Search</button>
    </form>
  );
}
