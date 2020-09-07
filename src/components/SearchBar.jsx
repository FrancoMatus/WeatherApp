import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form 
    class="form-inline my-2 my-lg-0"
    onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <div>
      <input
      className="form-control mr-sm-2"
        type="text"
        placeholder="City..."
        value={city}
        onChange={e => setCity(e.target.value)}
        />
      <input type="submit" className="btn btn-success" value="Search" />
        </div>
    </form>
  );
}
