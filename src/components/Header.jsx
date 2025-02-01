import "./Header.css";
import { useState } from "react";
import Sidebar from "../pages/MainPage/Sidebar";

import menu from "../assets/menu.png";
import logoSimple from "../assets/logo-simple.png";
import logo from "../assets/logo.png";
import logout from "../assets/logout.png";
import calendarAdd from "../assets/Calendar-add.png";

const Header = ({ userName, showMenu }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const user = {
    isLogin: true,
  };
  return (
    <>
      <header className="header-component">
        <div className="header-component__left">
          {showMenu && ( //MainPage에서만 Menu-icon 보이도록록
            <div onClick={toggleSidebar} className="menu-container">
              {<img src={menu} className="menu-icon" alt="메뉴 아이콘"></img>}
            </div>
          )}
          <div>
            {
              <img
                src={logoSimple}
                className="logoSimple-icon"
                alt="로고"
              ></img>
            }
          </div>
        </div>
        <div className="header-component__right">
          <div className="user">
            <div className="user-name logout">{userName}</div>
            {user.isLogin ? (
              <button className="logout">
                로그아웃
                {
                  <img
                    src={logout}
                    className="logout-icon"
                    alt="로그아웃"
                  ></img>
                }
              </button>
            ) : (
              <button className="logout">로그인</button>
            )}
          </div>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}></Sidebar>
    </>
  );
};

export default Header;
