import { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [todolist, setTodolist] = useState([]);
  console.log(input, "==> input");
  console.log(quantity, "==> quantity");

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
        <button className='btn' onClick={()=> addItemHandler()}>Add</button>
      </div>
      <div className="mainBody">
        {
          todolist.map((item, index)=> (
            <div key={index}>
              <input type="checkbox" />
              <span>{item.item}</span>
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
          <button className='btn'>Clear list</button>
        </div>
        <div className="footerBottom">
          <h3>You have 0 items on your list, and you already Packed 0 (0%)</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
