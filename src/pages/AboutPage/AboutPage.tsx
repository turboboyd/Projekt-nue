import React, { useState, useEffect } from "react";

const AboutPage = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("AboutPage mounted");
  }, []);

  return (
    <main className="page AboutPage">
      <h1>AboutPage Page</h1>
      <div className="content">
        <p>Value: {value}</p>
        <button onClick={() => setValue(v => v + 1)}>Increment</button>
        
      </div>
    </main>
  );
};

export default AboutPage;