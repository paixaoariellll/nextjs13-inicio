'use client';

import React, { useEffect, useState } from 'react';

const Confirm = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [register, setRegister] = useState(null);

  useEffect(() => {
    fetch('/api/registers', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => setRegister(data))
      .catch((error) => console.log(error));
  }, []);

  if (!register) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/api/registers', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const email = formData.email;
    setFormData({
      ...formData,
      email: '',
    });

    fetch(`/api/registers?email=${email}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => setRegister(data))
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="card">
      <h1>Confirmação de Inscrição</h1>
      <form onSubmit={handleSearch} className="flex justify-center">
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="E-mail"
        />
        <button type="submit">Search</button>
      </form>
      {register && (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name || register.name}
              placeholder="Nome"
            />
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={formData.email || register.email}
              placeholder="Email"
            />
            <input
              type="text"
              name="CPF"
              onChange={handleChange}
              value={formData.CPF || register.CPF}
              placeholder="CPF"
            />
            <button type="submit">Atualizar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Confirm;
