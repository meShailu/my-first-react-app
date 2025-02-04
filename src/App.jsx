import { useState } from "react";
import "./App.css";

function Card({ title }) {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className="card">
      <h2>{title}</h2>
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
