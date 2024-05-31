import React from "react";

export default function Button({ children, className }) {
  return <button className={`font-semibold ${className}`}>{children}</button>;
}
