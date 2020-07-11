import React from "react";
import MarkdownNice from "../lib/Lib";
import {YITIAN_API} from "../src/utils/constant";

// 编辑器默认的内容
const defaultText = `编辑器默认的内容`;
// 标题，是一个字符串
const defaultTitle = "Markdown Nice";

// 自定义图床参数
const useImageHosting = {
  // url: "https://imgkr.com/api/files/upload",
  url: YITIAN_API,
  name: "颐天1",
  isSmmsOpen: true,
  isQiniuyunOpen: true,
  isAliyunOpen: true,
};

function App() {
  return (
    <MarkdownNice
      defaultTitle={defaultTitle}
      defaultText={defaultText}
      onTextChange={t => console.log("text => ", t)}
      useImageHosting={useImageHosting}
    />
  );
}

export default App;
