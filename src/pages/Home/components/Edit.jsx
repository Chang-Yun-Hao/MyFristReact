import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add }) => {
  //初次渲染不會有add 待onClick事件後觸發addItem function的add ->Edit 加上add([1,2,3])

  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  // TODO del
  console.log(note, date, time);

  function addItem() {
    //下面onClick 呼叫 function
    add(function (prevData) {
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },...prevData,
      ];
    });
  }
  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事：</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>日期：</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間：</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit; //沒按button跟按下button是不一樣的傳出
