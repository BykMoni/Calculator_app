import React from "react";
import Button from "./Button";

export default function Keypad({ onPress }) {
  const layout = [
    { l: "C", v: "C", c: "op" },
    { l: "⌫", v: "⌫", c: "op" },
    { l: "÷", v: "/", c: "op" },
    { l: "x", v: "*", c: "op" },
    { l: "7", v: "7" },
    { l: "8", v: "8" },
    { l: "9", v: "9" },
    { l: "-", v: "-", c: "op" },
    { l: "4", v: "4" },
    { l: "5", v: "5" },
    { l: "6", v: "6" },
    { l: "+", v: "+", c: "op" },
    { l: "1", v: "1" },
    { l: "2", v: "2" },
    { l: "3", v: "3" },
    { l: "=", v: "=", c: "eq" },
    { l: "0", v: "0" },
    { l: ".", v: "." },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 10,
      }}
    >
      {layout.map((b, i) => (
        <Button key={i} color={b.c} onClick={() => onPress(b.v)}>
          {b.l}
        </Button>
      ))}
    </div>
  );
}
