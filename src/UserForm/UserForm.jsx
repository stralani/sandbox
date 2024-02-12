import React, { useEffect, useState, useRef } from "react";
import "./UserForm.scss";
import { useFetch } from "../Hooks/useFetch";
import { ApiUrl } from "../common";
import { updateUserDetails } from "../Api/updateUserDetails";

const initialData = {
  name: "",
  email: "",
  address: "",
  company: "",
};

function UserForm({ userId }) {
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState(false);
  const [validError, setValidError] = useState({});
  const [hasChanges, setHasChanges] = useState(false);
  const [staleData, setStaleData] = useState(initialData);

  const dataRef = useRef(initialData);

  const { name, phone, email } = dataRef.current;

  const { data, loading } = useFetch(`${ApiUrl}${userId}`);

  useEffect(() => {
    if (data) {
      dataRef.current = data;
      setStaleData(data);
    }
  }, [data]);

  useEffect(() => {
    if (flag) {
      const timer = setTimeout(() => {
        setFlag(false);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [flag]);

  const validateForm = () => {
    const validationErrors = {};
    if (!name) {
      validationErrors.name = "name is required";
    }
    if (!phone) {
      validationErrors.phone = "phone is required";
    }
    if (!email) {
      validationErrors.email = "email is required";
    } else if (!isEmailValid(email)) {
      validationErrors.email = "invalid email";
    }
    setValidError(validationErrors);
    return Object.keys(validationErrors).length > 0;
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    setHasChanges(true);
    setError(false);
    const { name, value } = e.target;
    dataRef.current = {
      ...dataRef.current,
      [name]: value,
    };
    if (validateForm()) {
      setError(true);
    }
  };

  const saveFormData = async () => {
    if (!validateForm()) {
      try {
        await updateUserDetails(userId, dataRef.current);
        setFlag(true);
      } catch (e) {
        setError(true);
        console.log(e);
      }
    }
  };

  const handleCancel = () => {
    setHasChanges(false);
    dataRef.current = staleData;
  };

  if (loading) {
    return <h1>LOADING</h1>;
  }
  const isSaveDisable = !hasChanges || error;
  return (
    <div className="UserFormContainer">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={dataRef.current.name || ""}
        onChange={handleChange}
        required
      />
      {validError.name && <p className="error-message">{validError.name}</p>}

      <label htmlFor="email">Email address:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={dataRef.current.email || ""}
        onChange={handleChange}
        required
      />
      {validError.email && <p className="error-message">{validError.email}</p>}

      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={dataRef.current.phone || ""}
        onChange={handleChange}
      />
      {validError.phone && <p className="error-message">{validError.phone}</p>}

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={dataRef.current.address || ""}
        onChange={handleChange}
      />

      <label htmlFor="company">Company:</label>
      <input
        type="text"
        id="company"
        name="company"
        value={dataRef.current.company || ""}
        onChange={handleChange}
      />
      {hasChanges && <button onClick={handleCancel}>Cancel</button>}
      <button type="button" disabled={isSaveDisable} onClick={saveFormData}>
        Save
      </button>
      {flag && <h4 className="succesful-message">SAVE FINISHED SUCCESSFULL</h4>}

      {error && <h4 className="error-message"> SOMETHING WENT WRONG </h4>}
    </div>
  );
}

export default UserForm;
