import { useEffect, useState } from "react";
import "./App.css";

function Card({ title }) {
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`${title}has been liked:${hasLiked}`);
  });
  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>
        {title}
        <br />
        {count}
      </h2>
      <button
        onClick={() => {
          setHasLiked(!hasLiked);
        }}
      >
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="card-container">
      <Card title="Star Wars" />
      <Card title="The Lion king" />
      <Card title="Avatar" />
    </div>
  );
}

export default App;
