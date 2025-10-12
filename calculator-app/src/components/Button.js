import React from "react";

export default function Button({ children, onClick, color }) {
  const baseStyle = {
    border: "none",
    borderRadius: 10,
    padding: "16px 0",
    fontSize: 18,
    cursor: "pointer",
    fontWeight: 600,
    color: "#fff",
    transition: "all 0.15s ease",
  };

  const colors = {
    op: {
      background: "linear-gradient(135deg,#F59E0B,#EF4444)",
    },
    eq: {
      background: "linear-gradient(135deg,#10B981,#3B82F6)",
    },
    num: {
      background: "linear-gradient(135deg,#4F46E5,#7C3AED)",
    },
  };

  const hover = { transform: "scale(1.05)" };

  return (
    <button
      onClick={onClick}
      style={{ ...baseStyle, ...colors[color || "num"] }}
      onMouseOver={(e) => (e.target.style.transform = hover.transform)}
      onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
    >
      {children}
    </button>
  );
}
