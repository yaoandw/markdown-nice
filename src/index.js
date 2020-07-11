import React from "react";
import ReactDOM from "react-dom";

import Lib from "./Lib";
import * as serviceWorker from "./serviceWorker";
import {YITIAN_API} from "./utils/constant";

ReactDOM.render(
  <Lib
    useImageHosting={{
      url: YITIAN_API,
      name: "颐天2",
      isSmmsOpen: false,
      isQiniuyunOpen: false,
      isAliyunOpen: false,
    }}
    defaultTitle="Markdown Nice"
  />,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
