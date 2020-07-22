import React, { useState } from "react";

import "./styles.css";

const Month = ({ dateMonth, dateYear, names }) => {
  let [isRender, setRenderStatus] = useState(false);
  return (
    <div
      className="month"
      onMouseLeave={() => setRenderStatus(!isRender)}
      onMouseEnter={() => setRenderStatus(!isRender)}
    >
      <div
        className="header"
        style={{
          backgroundColor:
            names.length <= 2
              ? "gray"
              : names.length <= 6
              ? "blue"
              : names.length <= 10
              ? "green"
              : "red",
        }}
      >
        {dateYear}:{dateMonth}
      </div>
      {isRender && (
        <div className="body">
          {names.map((name, i) => (
            <div key={`${i}${name}`} className="name">
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Month;
