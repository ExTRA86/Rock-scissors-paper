import React from "react";
import cl from "../styles/App.module.css"

export default function MyButton({ children, ...props }) {
  return (
    <button {...props} className={cl.myBtn}>
      {children}
    </button>
  );
}