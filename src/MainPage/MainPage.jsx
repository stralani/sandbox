import React from "react";
import { useNavigate } from "react-router-dom";
import Dammy from "../Dammy/Dammy";

function MainPage() {
  const navigate = useNavigate();
  return (
    <div>
      MainPage
      <button onClick={() => navigate("/aboutpage")}>click me</button>
      <Dammy />
    </div>
  );
}

export default MainPage;
