import React from "react";
import "./ProfileCard.scss";

export function ProfileCard({ data }) {
  return (
    <div className="container">
      <img src={data.photo} className="photo" />
      <div className="userDetails">
        {" "}
        <h4 className="name">{data.name}</h4>
        <p className="email">{data.email}</p>
      </div>
    </div>
  );
}
