import React from "react";
import scss from "../scss/Cards.module.scss";

export default function Cards({ click }) {
  console.log(click);
  return (
    <div className={scss.card}>
      <header>{click.title}</header>
      <h2>{click.key}</h2>
    </div>
  );
}
