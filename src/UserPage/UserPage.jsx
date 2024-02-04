import React, { useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import { ProfileCard } from "../ProfileCard";
import "./UserPage.scss";
import UserForm from "../UserForm/UserForm";
import { ApiUrl } from "../common";

function UserPage() {
  const { data, loading } = useFetch(ApiUrl);

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  return <UserPageContent data={data || []} />;
}

function UserPageContent({ data }) {
  const [selected, setSelected] = useState("");
  return (
    <div className="userPageContainer">
      <div className="leftContainer">
        {data.map((user) => {
          return (
            <div
              key={user.id}
              onClick={() => setSelected(user.id)}
              className={`userCard${user.id === selected ? "-selected" : ""}`}
            >
              <ProfileCard data={user} />
            </div>
          );
        })}
      </div>

      <div className="rightContainer">
        {selected ? (
          <UserForm userId={selected} />
        ) : (
          <h1>"nothing been clicked yet"</h1>
        )}
      </div>
    </div>
  );
}

export default UserPage;
