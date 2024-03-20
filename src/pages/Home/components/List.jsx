import Item from "./Item";

//用陣列產生item
// const arr = ["我我我","好好好","帥帥帥"] //陣列存資料 就可以把下面的item做到重複利用

const List = ({ listData, deleteData,submittingStatus }) => {
  //TODO del
  // console.log('listData',listData); //listData就是一個陣列 const [data, setData] = useState([])
  return (
    <div className="list">
      {listData.map((item) => {
        //listData=[1,2,3,4] 秀出4個<Item/> 不懂key可以先跳過
        const { note = "預設值", date, time,id } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
