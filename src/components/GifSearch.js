import React, { useState } from "react";

function GifSearch({ handleSubmit }) {
  const [search, setSearch] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    handleSubmit(search);
  }

  return (
    <div
      style={{
        display: "flex",
        marginLeft: "auto",
        marginRight: "20px",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={(e) => onSubmit(e)}
      >
        <label>
          Enter a Search Term:
          <br />
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            onFocus={(e) => (e.target.style.boxShadow = "0 0 5px skyblue")}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />
        </label>
        <button
          type="submit"
          style={{
            alignSelf: "flex-start",
            backgroundColor: "green",
            color: "white",
            border: "none",
          }}
          onMouseEnter={(e) => (e.target.style.boxShadow = "0 0 10px skyblue")}
          onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
        >
          Find Gifs
        </button>
      </form>
    </div>
  );
}

export default GifSearch;
