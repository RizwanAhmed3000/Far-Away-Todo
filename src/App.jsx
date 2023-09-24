import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [todolist, setTodolist] = useState([]);
  const [itemsPacked, setItemsPacked] = useState([])
  console.log(input, "==> input");
  console.log(quantity, "==> quantity");

  useEffect(() => {
    if (todolist.length > 0) {
      const packed = todolist.filter((item) => item.isPacked)
      setItemsPacked(packed)
    } else {
      setItemsPacked([])
    }
  }, [todolist])

  function clearListHandler() {
    const confirm = window.confirm("Do you want to delete all the itmes in the list?")
    if (confirm) {
      setTodolist([])
    }
  }

  function addItemHandler() {
    if (!input) {
      return alert("Value is required")
    } else {
      const newItem = {
        item: `${quantity} ${input}`,
        isPacked: false
      };
      console.log(newItem, "==> new item");
      setTodolist([...todolist, newItem]);
      setInput("");
    }
  }
  // console.log(todolist, "==< todolist after");
  function packItemsHandler(index) {
    const updatedList = [...todolist];
    updatedList[index].isPacked = !updatedList[index].isPacked;
    setTodolist(updatedList)
  }

  return (
    <div className="farAwayTodo">
      <div className="header">
        <h1>FAR AWAY TODO APP</h1>
      </div>
      <div className="inputArea">
        <h3>What do you need for your 😍 trip?</h3>
        <select name="quantity" id="" className='options' value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}>
          {
            Array.from(Array(20).keys(), (x) => (
              <option value={x + 1} key={x}>{x + 1}</option>
            ))
          }
        </select>
        <input type="text" placeholder='Add items...' className='input' value={input} onChange={(e) => setInput(e.target.value)} />
        <button className='btn' onClick={() => addItemHandler()}>Add</button>
      </div>
      <div className="mainBody">
        {
          todolist.map((item, index) => (
            <div key={index}>
              <input type="checkbox" onChange={() => {
                packItemsHandler(index)
              }} checked={item.isPacked} />
              <span style={{ textDecoration: item.isPacked ? "line-through" : "none" }}>{item.item}</span>
            </div>
          ))
        }
      </div>
      <div className="footer">
        <div className="footerTop">
          <select name="sortBy" id="" className='options'>
            <option value="">Sort by order</option>
            <option value="">Sort by description</option>
            <option value="">Sort by completed</option>
          </select>
          <button className='btn' onClick={clearListHandler}>Clear list</button>
        </div>
        <div className="footerBottom">
          <h3>You have {todolist.length} items on your list, and you already Packed {itemsPacked.length} {`(${(itemsPacked.length / todolist.length) * 100}%)` || `0%`}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
