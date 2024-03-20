//import React from "react"  //react 17有對JSX優化不一定要寫沒差
import { useState,useEffect } from "react";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

// const app = {
//     color:'red'
// } div + style={app}

//寫組件，宣告function，然後把function export出去
const Home = () => {
  const [text, setText] = useState("hello");
  const [data, setData] = useState([]); //Edit List共用這個 useState Edit觸發新渲染然後傳送新的data給子組件

  useEffect(() => {
    window.alert("新增成功")
  },[data])


  return (
    <div className="app">
      {text}
      <Edit add={setData} setText={setText} />{" "}
      {/* Edit.js觸發onClick事件，return [1,2,3] setData =[1,2,3] */}
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
//1:20:01
