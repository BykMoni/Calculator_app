import React, { useState } from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";

const initial = { expression: "", result: null };

function App() {
  const [state, setState] = useState(initial);

  const isOperator = (ch) => ["+", "-", "*", "/"].includes(ch);

  const handleInput = (value) => {
    if (value === "C") return setState(initial);
    if (value === "⌫")
      return setState((s) => ({
        expression: s.expression.slice(0, -1),
        result: null,
      }));

    if (value === "=") {
      try {
        let expr = state.expression.trim();
        while (expr && isOperator(expr.at(-1))) expr = expr.slice(0, -1);
        if (!expr) return;
        if (!/^[0-9+\-*/().\s]+$/.test(expr))
          return setState((s) => ({ ...s, result: "Error" }));
        // eslint-disable-next-line no-new-func
        const out = Function(`"use strict";return(${expr})`)();
        setState({ expression: String(out), result: out });
      } catch {
        setState((s) => ({ ...s, result: "Error" }));
      }
      return;
    }

    setState((s) => {
      const prev = s.expression;
      if (isOperator(value)) {
        if (!prev && value !== "-") return s;
        if (isOperator(prev.at(-1)))
          return { expression: prev.slice(0, -1) + value, result: null };
      }
      if (value === ".") {
        const parts = prev.split(/[+\-*/]/);
        if (parts.at(-1).includes(".")) return s;
      }
      return { expression: prev + value, result: null };
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: 20,
          boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
          padding: 20,
          width: 320,
          color: "#fff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginTop: 0,
            fontWeight: 700,
            background:
              "linear-gradient(90deg,#6EE7B7,#3B82F6,#9333EA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Mini Calculator
        </h2>

        <Display expression={state.expression} result={state.result} />
        <Keypad onPress={handleInput} />
        <p
          style={{
            textAlign: "center",
            fontSize: 12,
            marginTop: 12,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Daniel • Codveda Internship
        </p>
      </div>
    </div>
  );
}

export default App;
