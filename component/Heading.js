import React from "react";
import style from "../styles/Heading.module.css";

export default function Heading() {
  return (
    <>
      <div className={style.main}>
        <div>
          <i className="bi bi-person"></i>
        </div>

        <label className="row form-text text-muted font-weight-bold">
          Contacts
        </label>
      </div>
    </>
  );
}
