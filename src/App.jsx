import './App.css';

function App() {
  return (
    <div className="farAwayTodo">
      <div className="header">
        <h1>FAR AWAY TODO APP</h1>
      </div>
      <div className="inputArea">
        <h3>What do you need for your 😍 trip?</h3>
        <select name="quantity" id="" className='options'>
          {
            Array.from(Array(20).keys(), (x)=> (
              <option value="" key={x}>{x + 1}</option>
            ))
          }
        </select>
        <input type="text" placeholder='Add items...' className='input'/>
        <button className='btn'>Add</button>
      </div>
      <div className="mainBody">
        <div>
          <input type="checkbox" />
          <span>abc</span>
        </div>
        <div>
          <input type="checkbox" />
          <span>abc</span>
        </div>
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
