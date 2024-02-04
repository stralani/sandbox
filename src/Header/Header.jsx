import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

function Header() {
  const nav = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    localStorage.getItem("emailKey") ? setIsLogin(true) : setIsLogin(false);
  });

  const handleLogout = () => {
    localStorage.clear();
    nav("/loginpage");
  };
  return (
    <div className="background">
      <ul className="list">
        <li>
          <Link to={"/"}>Home Page</Link>
        </li>
        <li>
          <Link to={"/userpage"}>User Page</Link>
        </li>

        <li>
          <Link to={"/aboutpage"}>About page</Link>
        </li>
      </ul>
      {isLogin ? (
        <button onClick={handleLogout}>logout</button>
      ) : (
        <button onClick={() => nav("/loginpage")}>login</button>
      )}
    </div>
  );
}

export default Header;
