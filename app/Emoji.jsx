import React from "react";

export default function Emoji({ children }) {
  return (
    <span className="text-4xl md:text-7xl block text-center py-4">
      {children}
    </span>
  );
}
