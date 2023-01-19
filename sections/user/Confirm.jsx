'use client';

import React, { useState } from 'react';

const Confirm = () => {
  const [formData, setFormData] = useState({});

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

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="card">
      <h1>Confirmação de Inscrição</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Nome"
        />
        <input
          type="text"
          name="stageName"
          onChange={handleChange}
          value={formData.stageName}
          placeholder="Nome Artístico"
        />
        <input
          type="text"
          name="postGraduation"
          onChange={handleChange}
          value={formData.postGraduation}
          placeholder="Pós-Graduação"
        />
        <input
          type="text"
          name="CPF"
          onChange={handleChange}
          value={formData.CPF}
          placeholder="CPF"
        />
        <input
          type="text"
          name="rgCivil"
          onChange={handleChange}
          value={formData.rgCivil}
          placeholder="RG Civil"
        />
        <input
          type="text"
          name="rgMilitary"
          onChange={handleChange}
          value={formData.rgMilitary}
          placeholder="RG Militar"
        />
        <input
          type="text"
          name="CEP"
          onChange={handleChange}
          value={formData.CEP}
          placeholder="CEP"
        />
        <input
          type="text"
          name="number"
          onChange={handleChange}
          value={formData.number}
          placeholder="Número"
        />
        <input
          type="text"
          name="address"
          onChange={handleChange}
          value={formData.address}
          placeholder="Endereço"
        />
        <input
          type="text"
          name="neighborhood"
          onChange={handleChange}
          value={formData.neighborhood}
          placeholder="Bairro"
        />
        <input
          type="text"
          name="city"
          onChange={handleChange}
          value={formData.city}
          placeholder="Cidade"
        />
        <input
          type="text"
          name="uf"
          onChange={handleChange}
          value={formData.uf}
          placeholder="UF"
        />
        <input
          type="number"
          name="formation"
          onChange={handleChange}
          value={formData.formation}
          placeholder="Ano de Formação"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="E-mail"
        />
        <input
          type="text"
          name="tellphone"
          onChange={handleChange}
          value={formData.tellphone}
          placeholder="Telefone"
        />
        <input
          type="text"
          name="cellphone"
          onChange={handleChange}
          value={formData.cellphone}
          placeholder="Celular"
        />
        <div>
          <p>Almoço Sexta-Feira</p>
          <label>
            <input
              type="radio"
              name="lunchFryday"
              value="com"
              onChange={handleChange}
              checked={formData.lunchFryday === 'com'}
            />
            Com
          </label>
          <label>
            <input
              type="radio"
              name="lunchFryday"
              value="sem"
              onChange={handleChange}
              checked={formData.lunchFryday === 'sem'}
            />
            Sem
          </label>
        </div>
        <div>
          <p>Almoço Sábado</p>
          <label>
            <input
              type="radio"
              name="lunchSaturday"
              value="com"
              onChange={handleChange}
              checked={formData.lunchSaturday === 'com'}
            />
            Com
          </label>
          <label>
            <input
              type="radio"
              name="lunchSaturday"
              value="sem"
              onChange={handleChange}
              checked={formData.lunchSaturday === 'sem'}
            />
            Sem
          </label>
        </div>
        <div>
          <p>Comprou camiseta?</p>
          <label>
            <input
              type="radio"
              name="buyShirt"
              value="true"
              onChange={handleChange}
              checked={formData.buyShirt === true}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="buyShirt"
              value="false"
              onChange={handleChange}
              checked={formData.buyShirt === false}
            />
            Não
          </label>
        </div>
        <h2>Informações do Convidado</h2>
        <input
          type="text"
          name="guestName"
          onChange={handleChange}
          value={formData.guestName}
          placeholder="Nome do Convidado"
        />
        <input
          type="text"
          name="guestRg"
          onChange={handleChange}
          value={formData.guestRg}
          placeholder="RG do Convidado"
        />
        <input
          type="text"
          name="guestKinship"
          onChange={handleChange}
          value={formData.guestKinship}
          placeholder="Parentesco"
        />
        <h2>Almoço</h2>
        <label>
          <input
            type="radio"
            name="lunchFryday"
            value="true"
            onChange={handleChange}
            checked={formData.lunchFryday === true}
          />
          Sexta-Feira
        </label>
        <label>
          <input
            type="radio"
            name="lunchFryday"
            value="false"
            onChange={handleChange}
            checked={formData.lunchFryday === false}
          />
          Não
        </label>
        <label>
          <input
            type="radio"
            name="lunchSaturday"
            value="true"
            onChange={handleChange}
            checked={formData.lunchSaturday === true}
          />
          Sábado
        </label>
        <label>
          <input
            type="radio"
            name="lunchSaturday"
            value="false"
            onChange={handleChange}
            checked={formData.lunchSaturday === false}
          />
          Não
        </label>
        <h2>Camiseta</h2>
        <label>
          <input
            type="radio"
            name="guestBuyShirt"
            value="true"
            onChange={handleChange}
            checked={formData.guestBuyShirt === true}
          />
          Sim
        </label>
        <label>
          <input
            type="radio"
            name="guestBuyShirt"
            value="false"
            onChange={handleChange}
            checked={formData.guestBuyShirt === false}
          />
          Não
          <br />
        </label>
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default Confirm;
