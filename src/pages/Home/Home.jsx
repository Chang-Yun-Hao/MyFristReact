//import React from "react"  //react 17有對JSX優化不一定要寫沒差
import { useState, useEffect ,useRef } from "react";
import { API_GET_DATA } from '../../global/constants'

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

// const app = {
//     color:'red'
// } div + style={app}


//2:00:00
//async await 其實就是個pramise的包裝，從上到下每段程式碼做什麼事都很清楚
//不用fetch那邊要寫很多callback
async function fetchData(setData){
  const res = await fetch(API_GET_DATA)
  const { data } = await res.json()
  //console.log(data);
  setData(data)
  //return data
}

async function fetchSetData(data){
  await fetch(API_GET_DATA,{
    method:"PUT",
    headers:{
      'Content-type':'applacation/json'
    },
    body:JSON.stringify( {data} )
  })
}


//寫組件，宣告function，然後把function export出去
const Home = () => {
  const [text, setText] = useState("hello");
  const [data, setData] = useState([]); //Edit List共用這個 useState Edit觸發新渲染然後傳送新的data給子組件
  //const [data1, setData1] = useState([]);
  const submittingStatus = useRef(false);

  useEffect(() =>{
    if (!submittingStatus.current){
      return
    }
    fetchSetData(data)
      .then(data => submittingStatus.current = false)
  },[data])

  useEffect(() => {    
    // //外面放綁定的事情  //window.alert("新增成功")
    // return()=>{
    //   //裡面放取消綁定
    // }
    //TODO del
    //console.log("data",data);

    // fetch(API_GET_DATA) //拿id為1的東西 
    // .then(res =>res.json())  //res return json
    // .then(data => { //拿出data
    //   console.log(data);
    // })

    fetchData(setData)
  },[])


  return (
    <div className="app">
      {text}
      <Edit add={setData} setText={setText} submittingStatus={submittingStatus}/>
      {/* Edit.js觸發onClick事件，return [1,2,3] setData =[1,2,3] */}
      <List listData={data} deleteData={setData} submittingStatus={submittingStatus}/>
    </div>
  );
};

export default Home;
