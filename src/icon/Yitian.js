import React from "react";
import "./index.css";

export default ({fill = "rgba(0,0,0,0.65)", style = {}, className = "icon", viewBox = "0 0 40 40"}) => (
  <svg
    style={style}
    viewBox={viewBox}
    className={className}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g transform="translate(0 -1028.4)">
      <path
        d="m5 1031.4c-1.1046 0-2 0.9-2 2v14c0 1.1 0.8954 2 2 2h13 1c1.105 0 2-0.9 2-2v-13l-3-3h-13z"
        fill="#3498db"
      />
      <path d="m7 1031.4v1 5c0 0.5 0.4477 1 1 1h8c0.552 0 1-0.5 1-1v-5-1h-10z" fill="#2980b9" />
      <path
        d="m7 3v5c0 0.5523 0.4477 1 1 1h8c0.552 0 1-0.4477 1-1v-5h-10z"
        transform="translate(0 1028.4)"
        fill="#ecf0f1"
      />
      <path d="m6 1040.4c-0.5523 0-1 0.4-1 1v3 2 3h4 6 4v-3-2-3c0-0.6-0.448-1-1-1h-4-4-4z" fill="#ecf0f1" />
      <g fill="#bdc3c7">
        <rect height="1" width="14" y="1048.4" x="5" />
        <rect height="1" width="10" y="1042.4" x="7" />
        <rect height="1" width="10" y="1044.4" x="7" />
      </g>
      <rect height="4" width="3" y="1032.4" x="13" fill="#3498db" />
      <rect height=".99998" width="3" y="1032.4" x="13" fill="#2980b9" />
    </g>
  </svg>
);
