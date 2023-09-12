import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const adding = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const reduce = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counting: {count}</h2>
      <button onClick={reduce}>Decrease count</button>
      <button onClick={adding}>Increase count</button>
    </div>
  );
}
