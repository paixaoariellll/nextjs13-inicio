'use client';

import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';

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
  const [lunchSaturday, setLunchSaturday] = useState('');
  const [buyShirt, setBuyShirt] = useState('');
  const [shirtSize, setShirtSize] = useState('');
  const [manyGuests, setManyGuests] = useState('');
  const [guestName, setGuestName] = useState('');
  const [guestRg, setGuestRg] = useState('');
  const [guestKinship, setGuestKinship] = useState('');
  const [guestLunchFryday, setGuestLunchFryday] = useState('');
  const [guestLunchSaturday, setGuestLunchSaturday] = useState('');
  const [guestBuyShirt, setGuestBuyShirt] = useState('');
  const [guestShirtSize, setGuestShirtSize] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/registers');
      const data = await result.json();
      setRegister(data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
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
        lunchSaturday,
        buyShirt,
        shirt: {
          size: shirtSize,
        },
        manyGuests,
        guest: {
          name: guestName,
          rg: guestRg,
          kinship: guestKinship,
          lunchFryday: guestLunchFryday,
          lunchSaturday: guestLunchSaturday,
          guestBuyShirt,
          shirt: {
            size: guestShirtSize,
          },
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    console.log(register);
  };
  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const options = [];
    for (let i = currentYear - 60; i <= currentYear - 35; i += 1) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>,
      );
    }
    return options;
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
          onChange={(e) => setName(e.target.value)}
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
          onChange={(e) => setStageName(e.target.value)}
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
        <select
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="postGraduation"
          value={postGraduation}
          onChange={(e) => setPostGraduation(e.target.value)}
          required
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          <optgroup label="Postos">
            <option value="Tenente-Coronel">Tenente-Coronel</option>
            <option value="Major">Major</option>
            <option value="Capitão">Capitão</option>
            <option value="1º Tenente">1º Tenente</option>
            <option value="2º Tenente">2º Tenente</option>
            <option value="Aspirante-a-Oficial">Aspirante-a-Oficial</option>
          </optgroup>
          <optgroup label="Graduações">
            <option value="General de Divisão">General de Divisão</option>
            <option value="General de Brigada">General de Brigada</option>
            <option value="Brigadeiro">Brigadeiro</option>
            <option value="Coronel">Coronel</option>
            <option value="Tenente-Coronel">Tenente-Coronel</option>
            <option value="Major">Major</option>
            <option value="Capitão">Capitão</option>
            <option value="Aspirante-a-Oficial">Aspirante-a-Oficial</option>
          </optgroup>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="CPF">
          CPF:
        </label>
        <InputMask
          className="w-full border border-gray-400 p-2 rounded-lg"
          mask="999.999.999-99"
          id="CPF"
          value={CPF}
          onChange={(e) => {
            const cpf = e.target.value.toString().replace(/\D/g, '');
            if (cpf.length <= 11) {
              setCPF(e.target.value);
            } else {
              alert('O CPF deve conter 11 dígitos');
            }
          }}
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
          onChange={(e) => setRgCivil(e.target.value)}
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
          onChange={(e) => setRgMilitary(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="CEP">
          CEP:
        </label>
        <InputMask
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="text"
          mask="99 999 - 999"
          id="CEP"
          value={CEP}
          onChange={(e) => {
            const cep = e.target.value.toString().replace(/\D/g, '');
            if (cep.length <= 8) {
              setCEP(e.target.value);
            } else {
              alert('O CEP deve conter 8 dígitos');
            }
          }}
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
          onChange={(e) => setNumber(e.target.value)}
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
          onChange={(e) => setAddress(e.target.value)}
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
          onChange={(e) => setNeighborhood(e.target.value)}
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
          onChange={(e) => setCity(e.target.value)}
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
          onChange={(e) => setUf(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="formation"
        >
          Ano de Formação:
        </label>
        <select
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="formation"
          value={formation}
          onChange={(e) => setFormation(e.target.value)}
        >
          {generateYears()}
        </select>
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
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="tellphone"
        >
          Telefone:
        </label>
        <InputMask
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="tel"
          mask="(99) 9 9999 - 9999"
          id="tellphone"
          value={tellphone}
          onChange={(e) => setTellphone(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="cellphone"
        >
          Celular:
        </label>
        <InputMask
          className="w-full border border-gray-400 p-2 rounded-lg"
          type="tel"
          mask="(99) 9 9999 - 9999"
          id="cellphone"
          value={cellphone}
          onChange={(e) => setCellphone(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="status"
        >
          Status do militar:
        </label>
        <select
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="inativo">Inativo</option>
          <option value="ativo">Ativo</option>
          <option value="reformado">Reformado</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="lunchFryday"
        >
          Incluir almoço sexta-feira:
        </label>
        <div className="flex text-center gap-x-2">
          <input
            className="border-2 rounded-full"
            type="checkbox"
            id="lunchFryday"
            checked={lunchFryday}
            onChange={(e) => setLunchFryday(e.target.checked)}
          />
          {lunchFryday === true ? <div>Incluído</div> : <div>Não incluído</div>}
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="lunchSaturday"
        >
          Incluir almoço sexta-feira:
        </label>
        <div className="flex text-center gap-x-2">
          <input
            className="border-2 rounded-full"
            type="checkbox"
            id="lunchSaturday"
            checked={lunchSaturday}
            onChange={(e) => setLunchSaturday(e.target.checked)}
          />
          {lunchSaturday === true ? (
            <div>Incluído</div>
          ) : (
            <div>Não incluído</div>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="buyShirt"
        >
          Incluir camisa:
        </label>
        <div className="flex text-center gap-x-2">
          <input
            className="border-2 rounded-full"
            type="checkbox"
            id="buyShirt"
            checked={buyShirt}
            onChange={(e) => setBuyShirt(e.target.checked)}
          />
          {buyShirt === true ? (
            <>
              <div>Incluído</div>{' '}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="shirtSize"
                >
                  Tamanho da camisa:
                </label>
                <select
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  id="shirtSize"
                  value={shirtSize}
                  onChange={(e) => setShirtSize(e.target.value)}
                >
                  <option value="P">P</option>
                  <option value="M">M</option>
                  <option value="G">G</option>
                  <option value="GG">GG</option>
                  <option value="XG">XG</option>
                  <option value="XGG">XGG</option>
                </select>
              </div>
            </>
          ) : (
            <div>Não incluído</div>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="manyGuests"
        >
          Quantidade de acompanhantes
        </label>
        <select
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="manyGuests"
          value={manyGuests}
          onChange={(e) => setManyGuests(e.target.value)}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
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
          onChange={(e) => setGuestName(e.target.value)}
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
          onChange={(e) => setGuestRg(e.target.value)}
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
          onChange={(e) => setGuestKinship(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="guestLunchFryday"
        >
          Incluir almoço sexta-feira:
        </label>
        <div className="flex text-center gap-x-2">
          <input
            className="border-2 rounded-full"
            type="checkbox"
            id="guestLunchFryday"
            checked={guestLunchFryday}
            onChange={(e) => setGuestLunchFryday(e.target.checked)}
          />
          {guestLunchFryday === true ? (
            <div>Incluído</div>
          ) : (
            <div>Não incluído</div>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="guestLunchSaturday"
        >
          Incluir almoço de Sábado:
        </label>
        <div className="flex text-center gap-x-2">
          <input
            className="border-2 rounded-full"
            type="checkbox"
            id="guestLunchSaturday"
            checked={guestLunchSaturday}
            onChange={(e) => setGuestLunchSaturday(e.target.checked)}
          />
          {guestLunchSaturday === true ? (
            <div>Incluído</div>
          ) : (
            <div>Não incluído</div>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="guestBuyShirt"
        >
          Incluir camisa:
        </label>
        <div className="flex text-center gap-x-2">
          <input
            className="border-2 rounded-full"
            type="checkbox"
            id="guestBuyShirt"
            checked={guestBuyShirt}
            onChange={(e) => setGuestBuyShirt(e.target.checked)}
          />
          {guestBuyShirt === true ? (
            <>
              <div>Incluído</div>{' '}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="guestShirtSize"
                >
                  Tamanho da camisa:
                </label>
                <select
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  id="guestShirtSize"
                  value={guestShirtSize}
                  onChange={(e) => setGuestShirtSize(e.target.value)}
                >
                  <option value="P">P</option>
                  <option value="M">M</option>
                  <option value="G">G</option>
                  <option value="GG">GG</option>
                  <option value="XG">XG</option>
                  <option value="XGG">XGG</option>
                </select>
              </div>
            </>
          ) : (
            <div>Não incluído</div>
          )}
        </div>
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
