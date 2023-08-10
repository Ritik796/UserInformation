import React, { useState, useEffect,useCallback } from "react";
const ChildComponent = ({ onClick }) => {
  console.log("ChildComponent rendering");
  return <button onClick={onClick}>Click Me</button>;
};

export default function DId() {
  const [theme, setTheme] = useState("light"); // Default theme is light
  const [count, setCount] = useState(0);
  const handleClickWithoutCallback = () => {
    console.log("Button clicked");
    setCount(count + 1);
  };

  // With useCallback
  const handleClickWithCallback = useCallback(() => {
    console.log("Button clicked");
    setCount(count - 1);
  }, [count]); // Include count in the dependency array

  console.log("ParentComponent rendering");

  useEffect(() => {
    // Load theme preference from Local Storage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    // Toggle between light and dark themes
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Store the updated theme preference in Local Storage
    localStorage.setItem("theme", newTheme);
  };
  return (
    <div>
      <h1>User Profile</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <hr />
      <h1>Counter: {count}</h1>
      {/* ChildComponent with onClick passed */}
      <ChildComponent onClick={handleClickWithoutCallback} />
      {/* ChildComponent with useCallback */}
      <ChildComponent onClick={handleClickWithCallback} />
    </div>
  );
}
