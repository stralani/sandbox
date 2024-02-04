import React, { useEffect, useState } from "react";
import "./UserForm.scss";
import { useFetch } from "../Hooks/useFetch";
import { ApiUrl } from "../common";
import { updateUserDetails } from "../Api/updateUserDetails";

function UserForm({ userId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    company: "",
  });

  const { data, loading } = useFetch(`${ApiUrl}${userId}`);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const saveFormData = async () => {
    await updateUserDetails(userId, formData);
  };

  if (loading) {
    return <h1>LOADING</h1>;
  }

  return (
    <div className="UserFormContainer">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={data.name || ""}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email address:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={data.email || ""}
        onChange={handleChange}
        required
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={data.phone || ""}
        onChange={handleChange}
      />

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={data.address || ""}
        onChange={handleChange}
      />

      <label htmlFor="company">Company:</label>
      <input
        type="text"
        id="company"
        name="company"
        value={data.company || ""}
        onChange={handleChange}
      />

      <button type="button" onClick={saveFormData}>
        Save
      </button>
    </div>
  );
}

export default UserForm;
