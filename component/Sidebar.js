import style from "../styles/Sidebar.module.css";
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from "cdbreact";
import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className={style.main}>
//       <CDBSidebar
//         // textColor="#fff"
//         // backgroundColor="#F89880"
//         className={style.sidebar}
//         // style={{
//         //   display: "flex",
//         //   justifyContent: "center",
//         //   alignItems: "center",
//         // }}
//       >
//         <CDBSidebarHeader className={style.header}>
//           {/* <i className="fa fa-bars fa-large"></i> */}
//         </CDBSidebarHeader>
//         <CDBSidebarContent className="sidebar-content">
//           <CDBSidebarMenu>
//             <NavLink exact to="/" activeClassName="activeClicked">
//               <CDBSidebarMenuItem>
//                 {/* <i class="bi bi-house-door"></i> */}
//               </CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/" activeClassName="activeClicked">
//               <CDBSidebarMenuItem>
//                 {/* <i class="bi bi-person"></i> */}
//               </CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/" activeClassName="activeClicked">
//               <CDBSidebarMenuItem>
//                 {/* <i class="bi bi-file-earmark-ruled"></i> */}
//               </CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/" activeClassName="activeClicked">
//               <CDBSidebarMenuItem>
//                 {/* <i class="bi bi-alarm"></i> */}
//               </CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/" activeClassName="activeClicked">
//               <CDBSidebarMenuItem>
//                 {/* <i class="fas fa-database"></i> */}
//               </CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/" activeClassName="activeClicked">
//               <CDBSidebarMenuItem>
//                 {/* <i class="bi bi-calendar"></i> */}
//               </CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/" activeClassName="activeClicked">
//               <CDBSidebarMenuItem>
//                 {/* <i class="bi bi-gear"></i> */}
//               </CDBSidebarMenuItem>
//             50px</NavLink>
//           </CDBSidebarMenu>
//         </CDBSidebarContent>sidebar
//       </CDBSidebar>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
export default function Sidebar() {
  return (
    <>
      <div className={style.main}>
        <div>
          <i className="bi bi-menu-down"></i>
        </div>
        <div className={style.div}>
          <i className="bi bi-house-door"></i>
        </div>

        <div className={style.div}>
          <i className="bi bi-person"></i>
        </div>

        <div className={style.div}>
          <i className="bi bi-files"></i>
        </div>

        <div className={style.div}>
          <i className="bi bi-alarm"></i>
        </div>

        <div className={style.div}>
          <i className="bi bi-database"></i>
        </div>

        <div className={style.div}>
          <i className="bi bi-calendar"></i>
        </div>

        <div className={style.div}>
          <i className="bi bi-gear"></i>
        </div>
      </div>
    </>
  );
}
