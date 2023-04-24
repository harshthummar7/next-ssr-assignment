import React, { useEffect, useState } from "react";
import style from "../styles/Card.module.css";
export default function Card(props) {
  const [data, setData] = useState(props.value);
  const [clr, setClr] = useState(props.color);
  useEffect(() => {
    setData(props.value);
  }, [props.value]);

  useEffect(() => {
    setClr(props.color);
  }, [props.color]);

  return (
    <div className={style.main}>
      <div className={`${style.card} card`}>
        <div className={`${style.cardheader} card-header`}>
          <div className={style.header}>
            <div
              className={`${style.circle} rounded-circle text-white d-flex align-items-center justify-content-center mr-3"`}
              style={{ backgroundColor: clr }}
            >
              <span className="h4 font-weight-bold m-0">
                {data.name
                  .split(" ")
                  .map((name) => name.charAt(0))
                  .join("")}
              </span>
            </div>
            <h5 className="card-title mb-0">{data.name}</h5>
          </div>
        </div>
        <div className={`${style.cardbody} card-body`}>
          <div className={style.row}>
            <p className={`${style.label} card-text`}>Full Name</p>
            <p className={`${style.value} card-text`}>{data.name}</p>
          </div>
          <div className={style.row}>
            <p className={`${style.label} card-text`}>Email</p>
            <p className={`${style.value} card-text`}>{data.email}</p>
          </div>
          <div className={style.row}>
            <p className={`${style.label} card-text`}>Phone</p>
            <p className={`${style.value} card-text`}>{data.phone}</p>
          </div>
          <div className={style.row}>
            <p className={`${style.label} card-text`}>Company</p>
            <p className={`${style.value} card-text`}>{data.company}</p>
          </div>
          <div className={style.row}>
            <p className={`${style.label} card-text`}>Address</p>
            <p className={`${style.value} card-text`}>{data.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
