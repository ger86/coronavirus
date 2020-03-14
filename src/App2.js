import React, {useState} from 'react';

const App2 = () => {
  const [count, setCount] = useState(0);

  function handleChange(event) {
    setCount(event.target.value);
  }

  return (
    <>
      <div>Valor del contador: {count}</div>
      <input onChange={handleChange} value={count} />
    </>
  );
};

export default App2;
