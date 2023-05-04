import React, { useState } from "react";
import "./sidebar.css";
import avtar from "../imgs/avater/avatar_1.png";
import { Link } from "react-router-dom";
import { MdNoteAlt } from "react-icons/md";
import { IoLogoModelS } from "react-icons/io";
import { BsCardChecklist } from "react-icons/bs";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { SiMicrosoftteams } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { ImStatsBars2 } from "react-icons/im";

function Sidebar({ dataListLength }) {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  return (
    <div className={sidebarToggle ? "sidebar close" : "sidebar"}>
      <div className="logo" onClick={toggleSidebar}>
        <i>
          <IoLogoModelS />
        </i>
        <span className="title">اوتو فيكس</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/stats">
            <i>
              <ImStatsBars2 />
            </i>
            <span className="link-name">الاحصائيات</span>
          </Link>
        </li>

        <li>
          <Link to="/booking">
            <i>
              <MdNoteAlt />
            </i>
            <span className="link-name">حجز صيانة</span>
          </Link>
        </li>

        <li>
          <Link to="/bookingList">
            <i>
              <BsCardChecklist />
            </i>
            <span className="link-name">قائمة الحجوزات</span>
          </Link>
        </li>
        <li>
          <Link to="/ProblemBox">
            <i>
              <TfiCommentsSmiley />
            </i>
            <span className="link-name">صندوق الشكاوي</span>
          </Link>
        </li>
        <li>
          <Link to="/teamWork">
            <i>
              <SiMicrosoftteams />
            </i>
            <span className="link-name">فريق العمل</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <i>
              <FaHome />
            </i>
            <span className="link-name">الصفحة الرئيسية</span>
          </Link>
        </li>

        <li>
          <div className="profile-details">
            <div className="name-job">
              <div className="profile-name">حسام يحيي</div>
              <div className="job">المشرف</div>
            </div>
            <div className="content">
              <img src={avtar} alt="" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
