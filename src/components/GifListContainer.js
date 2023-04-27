import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=9B6IuFXNf0nKvI76l28492FfTDYuFOQp&limit=3`
    )
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error(error));
  }, []);

  function handleSubmit(search) {
    console.log(search);
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=9B6IuFXNf0nKvI76l28492FfTDYuFOQp&limit=3`
    )
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error(error));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <GifList data={data} />
      <GifSearch handleSubmit={handleSubmit} />
    </div>
  );
}

export default GifListContainer;
