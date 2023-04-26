import React, { useMemo, useState } from "react";
import style from "../styles/Card.module.css";
export default function Card(props) {
  const [data, setData] = useState(props.value);
  const [colorState, setColorState] = useState(props.color);

  const initials = useMemo(
    () =>
      data.name
        .split(" ")
        .map((name) => name.charAt(0))
        .join(""),
    [data.name]
  );

  return (
    <div className={style.main}>
      <div className={`${style.card} card`}>
        <div className={`${style.cardheader} card-header`}>
          <div className={style.header}>
            <div
              className={`${style.circle} rounded-circle text-white d-flex align-items-center justify-content-center mr-3"`}
              style={{ backgroundColor: colorState }}
            >
              <span className="h4 font-weight-bold m-0">{initials}</span>
            </div>
            <h5 className="card-title mb-0">{data.name}</h5>
          </div>
        </div>
        <div className={`${style.cardbody} card-body`}>
          <Row label="Full Name" value={data.name} />
          <Row label="Email" value={data.email} />
          <Row label="Phone" value={data.phone} />
          <Row label="Company" value={data.company} />
          <Row label="Address" value={data.address} />
        </div>
      </div>
    </div>
  );
}

const Row = ({ label, value }) => {
  return (
    <div className={style.row}>
      <p className={`${style.label} card-text`}>{label}</p>
      <p className={`${style.value} card-text`}>{value}</p>
    </div>
  );
};
