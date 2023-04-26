import style from "../styles/Sidebar.module.css";
import React from "react";

export default function Sidebar() {
  const icons = [
    "menu-down",
    "house-door",
    "person",
    "files",
    "alarm",
    "database",
    "calendar",
    "gear",
  ];

  return (
    <>
      <div className={style.main}>
        <div>
          <i className="bi bi-menu-down"></i>
        </div>
        {icons.map((icon) => (
          <MenuItem key={icon} icon={icon} />
        ))}
      </div>
    </>
  );
}

const MenuItem = ({ icon }) => {
  return (
    <div className={style.div}>
      <i className={`bi bi-${icon}`}></i>
    </div>
  );
};
