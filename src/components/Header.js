import React, { useContext } from "react";
import { useSelector } from "react-redux";
import "./header.css";

export default function Header(props) {
  const counter = useSelector((state) => {
    return state;
  });

  return (
    <div className="header">
      <h3>Contador</h3>
      <div>{counter}</div>
    </div>
  );
}
