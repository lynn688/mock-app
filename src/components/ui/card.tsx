import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-lg border border-gray-200 p-4 shadow-sm bg-white ${className}`}
    >
      {children}
    </div>
  );
}
