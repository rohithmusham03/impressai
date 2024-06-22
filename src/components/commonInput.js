import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";

const InputHandler = ({ onSubmit, editMode = false, initialData = {} }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editMode) {
      setName(initialData.name);
      setEmail(initialData.email);
    } else {
      setName("");
      setEmail("");
    }
  }, [editMode, initialData]);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !validateEmail(email)) {
      setError("Please enter a valid name and email address.");
      return;
    }
    setError("");
    onSubmit({ name, email });
  };

  return (
    <div className="header-box">
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: '10px', width: '300px' }}
      />
      <Input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: '10px', width: '300px' }}
      />
      <Button type="primary" onClick={handleSubmit} style={{ width: '150px' }}>
        {editMode ? "Edit User" : "Add User"}
      </Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default InputHandler;
