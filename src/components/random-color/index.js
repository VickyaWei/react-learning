import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function handleRandom(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[handleRandom(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRgbColor() {
    const r = handleRandom(256);
    const g = handleRandom(256);
    const b = handleRandom(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: color }}>
      <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create rgb Color</button>
      <button
        onClick={
          typeOfColor === "hex" ? handleCreateHexColor : handleCreateRgbColor
        }
      >
        Generate random Color
      </button>
      <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "60px",
            marginTop: "50px",
            flexDirection  :'column',
            gap :'20px'
        }}
      >
        <h3>{typeOfColor === "hex" ? "Hex Color" : "Rgb Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

// 1. set up button and basic background color
// 2. different types of color
// 3. random function
