import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="bros-container">
        <img src="./bros logo.png" className="broslogo logo" alt="Bros Logo" />
      </div>
      <div className="button-container">
        <button
          className="counter-button"
          onClick={() => setCount((count) => count + 1)}
        >
          You clicked me {count} {count === 1 ? 'time' : 'times'}!
        </button>
      </div>
        <button className="disabled-button" disabled>
          You can't click me!
        </button>
    </div>
  );
}

export default App;