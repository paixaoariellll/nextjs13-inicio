'use client';

import React, { useEffect, useState } from 'react';

const RegisterForm = () => {
  const [register, setRegister] = useState('');
  const [name, setName] = useState('');
  const [stageName, setStageName] = useState('');
  const [postGraduation, setPostGraduation] = useState('');
  const [CPF, setCPF] = useState('');
  const [rgCivil, setRgCivil] = useState('');
  const [rgMilitary, setRgMilitary] = useState('');
  const [CEP, setCEP] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [formation, setFormation] = useState('');
  const [email, setEmail] = useState('');
  const [tellphone, setTellphone] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [status, setStatus] = useState('');
  const [lunchFryday, setLunchFryday] = useState('');
  const [lunchFrydayValue, setLunchFrydayValue] = useState('');
  const [lunchSaturday, setLunchSaturday] = useState('');
  const [lunchSaturdayValue, setLunchSaturdayValue] = useState('');
  const [shirtSize, setShirtSize] = useState('');
  const [shirtValue, setShirtValue] = useState('');
  const [guests, setGuests] = useState('');
  const [guestName, setGuestName] = useState('');
  const [guestRg, setGuestRg] = useState('');
  const [guestKinship, setGuestKinship] = useState('');
  const [guestLunchFryday, setGuestLunchFryday] = useState('');
  const [guestLunchFrydayValue, setGuestLunchFrydayValue] = useState('');
  const [guestLunchSaturday, setGuestLunchSaturday] = useState('');
  const [guestLunchSaturdayValue, setGuestLunchSaturdayValue] = useState('');
  const [guestShirtSize, setGuestShirtSize] = useState('');
  const [guestShirtValue, setGuestShirtValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/registers');
      const data = await result.json();
      setRegister(data);
    };
    fetchData();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch(`/api/registers/${e}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        stageName,
        postGraduation,
        CPF,
        rgCivil,
        rgMilitary,
        CEP,
        number,
        address,
        neighborhood,
        city,
        uf,
        formation,
        email,
        tellphone,
        cellphone,
        status,
        lunchFryday,
        lunchFrydayValue,
        lunchSaturday,
        lunchSaturdayValue,
        shirt: {
          size: shirtSize,
          value: shirtValue,
        },
        guests,
        guest: {
          name: guestName,
          rg: guestRg,
          kinship: guestKinship,
          lunchFryday: guestLunchFryday,
          lunchFrydayValue: guestLunchFrydayValue,
          lunchSaturday: guestLunchSaturday,
          lunchSaturdayValue: guestLunchSaturdayValue,
          shirt: {
            size: guestShirtSize,
            value: guestShirtValue,
          },
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    console.log(register);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md grid grid-cols-5"
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Nome:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="stageName"
        >
          Nome de Guerra:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="stageName"
          value={stageName}
          onChange={e => setStageName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="postGraduation"
        >
          Posto/Graduação:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="postGraduation"
          value={postGraduation}
          onChange={e => setPostGraduation(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="CPF">
          CPF:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="CPF"
          value={CPF}
          onChange={e => setCPF(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="rgCivil"
        >
          RG Civil:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="rgCivil"
          value={rgCivil}
          onChange={e => setRgCivil(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="rgMilitary"
        >
          RG Militar:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="rgMilitary"
          value={rgMilitary}
          onChange={e => setRgMilitary(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="CEP">
          CEP:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="CEP"
          value={CEP}
          onChange={e => setCEP(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="number"
        >
          Número:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="address"
        >
          Endereço:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="address"
          value={address}
          onChange={e => setAddress(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="neighborhood"
        >
          Bairro:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="neighborhood"
          value={neighborhood}
          onChange={e => setNeighborhood(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="city">
          Cidade:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="city"
          value={city}
          onChange={e => setCity(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="uf">
          Estado:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="uf"
          value={uf}
          onChange={e => setUf(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="formation"
        >
          Formação:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="formation"
          value={formation}
          onChange={e => setFormation(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          E-mail:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="tellphone"
        >
          Telefone:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="tel"
          id="tellphone"
          value={tellphone}
          onChange={e => setTellphone(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="cellphone"
        >
          Celular:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="tel"
          id="cellphone"
          value={cellphone}
          onChange={e => setCellphone(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="status"
        >
          Status:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="status"
          value={status}
          onChange={e => setStatus(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="lunchFryday"
        >
          Almoço Sexta-feira:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="lunchFryday"
          value={lunchFryday}
          onChange={e => setLunchFryday(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="lunchFrydayValue"
        >
          Valor Almoço Sexta-feira:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="lunchFrydayValue"
          value={lunchFrydayValue}
          onChange={e => setLunchFrydayValue(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="lunchSaturday"
        >
          Almoço Sábado:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="lunchSaturday"
          value={lunchSaturday}
          onChange={e => setLunchSaturday(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="lunchSaturdayValue"
        >
          Valor Almoço Sábado:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="lunchSaturdayValue"
          value={lunchSaturdayValue}
          onChange={e => setLunchSaturdayValue(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="shirtSize"
        >
          Tamanho da camisa:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="shirtSize"
          value={shirtSize}
          onChange={e => setShirtSize(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="shirtValue"
        >
          Preço da camisa:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="shirtValue"
          value={shirtValue}
          onChange={e => setShirtValue(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="guests"
        >
          Acompanhante:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="guests"
          value={guests}
          onChange={e => setGuests(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="guestName"
        >
          Nome Acompanhante:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="guestName"
          value={guestName}
          onChange={e => setGuestName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="guestRg"
        >
          RG Acompanhante:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="guestRg"
          value={guestRg}
          onChange={e => setGuestRg(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="guestKinship"
        >
          Parentesco Acompanhante:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="guestKinship"
          value={guestKinship}
          onChange={e => setGuestKinship(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="guestLunchFryday"
        >
          Almoço Sexta Acompanhante:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="guestLunchFryday"
          value={guestLunchFryday}
          onChange={e => setGuestLunchFryday(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="guestLunchFrydayValue"
        >
          Valor Almoço Sexta Acompanhante:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="guestLunchFrydayValue"
          value={guestLunchFrydayValue}
          onChange={e => setGuestLunchFrydayValue(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="guestLunchSaturday"
        >
          Almoço Sábado Acompanhante:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="guestLunchSaturday"
          value={guestLunchSaturday}
          onChange={e => setGuestLunchSaturday(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="guestLunchSaturdayValue"
        >
          Valor Almoço Sábado Acompanhante:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="guestLunchSaturdayValue"
          value={guestLunchSaturdayValue}
          onChange={e => setGuestLunchSaturdayValue(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="guestShirtSize"
        >
          Camisa Acompanhante:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="guestShirtSize"
          value={guestShirtSize}
          onChange={e => setGuestShirtSize(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="guestShirtValue"
        >
          Valor Camisa Acompanhante:
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          id="guestShirtValue"
          value={guestShirtValue}
          onChange={e => setGuestShirtValue(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
      >
        Enviar
      </button>
    </form>
  );
};

export default RegisterForm;
