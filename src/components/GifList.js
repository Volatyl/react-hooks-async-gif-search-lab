import React from "react";

function GifList({ data }) {
  return (
    <div>
      <ul>
        {data.map((gif) => {
          return (
            <li key={gif.id}>
              <img
                src={gif.images.original.url}
                alt="gif"
                style={{
                  width: "70%",
                  paddingBottom: "10px",
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GifList;
