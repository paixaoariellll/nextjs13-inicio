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
    const optgroup = [];
    for (let i = currentYear - 60; i <= currentYear - 35; i += 1) {
      optgroup.push(
        <option key={i} value={i}>
          {i}
        </option>,
      );
    }
    return optgroup;
  };

  const checkCEP = (e) => {
    const cepValidate = e.target.value.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cepValidate}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setAddress(data.logradouro);
        setNeighborhood(data.bairro);
        setCity(data.localidade);
        setUf(data.uf);
      });
  };
  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        {/* Informações Pessoais */}
        <div className="card">
          <div className="flex flex-col justify-between">
            <h3 className="my-5 text-center w-full">Informações Pessoais</h3>
            <div className="grid sm:grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="mb-4 w-full">
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="text"
                  id="name"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="text"
                  id="stageName"
                  placeholder="Nome de Guerra"
                  value={stageName}
                  onChange={(e) => setStageName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <select
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  id="postGraduation"
                  value={postGraduation}
                  onChange={(e) => setPostGraduation(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Posto ou Graduação
                  </option>
                  <optgroup label="Graduado">
                    <option value="Cabo">Cabo</option>
                    <option value="Terceiro-Sargento">Terceiro-Sargento</option>
                    <option value="Segundo-Sargento">Segundo-Sargento</option>
                    <option value="Primeiro-Sargento">Primeiro-Sargento</option>
                    <option value="Suboficial">Suboficial</option>
                  </optgroup>
                  <optgroup label="Oficial Subalterno">
                    <option value="Aspirante">Aspirante</option>
                    <option value="Segundo-Tenente">Segundo-Tenente</option>
                    <option value="Primeiro-Tenente">Primeiro-Tenente</option>
                  </optgroup>
                  <optgroup label="Oficial Intermediário">
                    <option value="Capitão">Capitão</option>
                  </optgroup>
                  <optgroup label="Oficial Superior">
                    <option value="Major">Major</option>
                    <option value="Tenente-Coronel">Tenente-Coronel</option>
                    <option value="Coronel">Coronel</option>
                  </optgroup>
                  <optgroup label="Oficial General">
                    <option value="Brigadeiro">Brigadeiro</option>
                    <option value="Major-Brigadeiro-do-Ar">
                      Major-Brigadeiro-do-Ar
                    </option>
                    <option value="Tenente-Brigadeiro-do-Ar">
                      Tenente-Brigadeiro-do-Ar
                    </option>
                    <option value="Marechal-do-Ar">Marechal-do-Ar</option>
                  </optgroup>
                </select>
              </div>
              <div className="mb-4 w-full">
                <InputMask
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  mask="999.999.999-99"
                  id="CPF"
                  value={CPF}
                  title="Cadastro de Pessoa Física"
                  placeholder="CPF"
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
              <div className="mb-4 w-full">
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="text"
                  id="rgCivil"
                  title="Regístro Geral Civil Brasileiro"
                  placeholder="RG Civil"
                  value={rgCivil}
                  onChange={(e) => setRgCivil(e.target.value)}
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="text"
                  id="rgMilitary"
                  title="Regístro Geral Militar Brasileiro"
                  placeholder="RG Militar"
                  value={rgMilitary}
                  onChange={(e) => setRgMilitary(e.target.value)}
                />
              </div>
              <div className="mb-4 w-full">
                <select
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  id="formation"
                  value={formation}
                  onChange={(e) => setFormation(e.target.value)}
                >
                  <option value="" disabled>
                    Ano de Formação
                  </option>
                  {generateYears()}
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Informações Complementares */}
        <div className="card">
          <div className="flex flex-col justify-between">
            <h3 className="my-5 text-center w-full">
              Informações Complementares
            </h3>
            <div className="grid sm:grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="mb-4 w-full">
                <InputMask
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="text"
                  mask="99 999 - 999"
                  id="CEP"
                  placeholder="CEP"
                  value={CEP}
                  onBlurCapture={checkCEP}
                  onChange={(e) => setCEP(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="text"
                  id="number"
                  placeholder="Número"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="text"
                  id="address"
                  placeholder="Logradouro"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="text"
                  id="neighborhood"
                  placeholder="Bairro"
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="text"
                  id="city"
                  placeholder="Cidade"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="text"
                  id="uf"
                  placeholder="Estado"
                  value={uf}
                  onChange={(e) => setUf(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4 w-full">
                <InputMask
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="tel"
                  mask="(99) 9 9999 - 9999"
                  id="tellphone"
                  placeholder="Perfuntar formato do Número de Telefone"
                  value={tellphone}
                  onChange={(e) => setTellphone(e.target.value)}
                />
              </div>
              <div className="mb-4 w-full">
                <InputMask
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="tel"
                  mask="(99) 9 9999 - 9999"
                  id="cellphone"
                  placeholder="Celular"
                  value={cellphone}
                  onChange={(e) => setCellphone(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Sobre o Encontro */}
        <div className="card">
          <div className="flex flex-col justify-between">
            <h3 className="my-5 text-center w-full">
              "De Volta Ao Berço Do Especialista"
            </h3>
            <div className="grid sm:grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="mb-4 w-full">
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
                  {lunchFryday === true ? (
                    <div>Incluído</div>
                  ) : (
                    <div>Não incluído</div>
                  )}
                </div>
              </div>
              <div className="mb-4 w-full">
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
              <div className="mb-4 w-full">
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
              <div className="mb-4 w-full">
                <select
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  id="manyGuests"
                  value={manyGuests}
                  onChange={(e) => setManyGuests(e.target.value)}
                >
                  <option value="" disabled>
                    Quantidade de acompanhantes
                  </option>
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
            </div>
          </div>
        </div>
        {/* Acompanhantes */}
        {Array.from({ length: manyGuests }, (_, i) => (
          <div key={i} className="card">
            <div className="flex flex-col justify-between">
              <h3 className="my-5 text-center w-full">
                Informações do Acompanhante {i + 1}
              </h3>
              <div className="grid sm:grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div className="mb-4 w-full">
                  <input
                    className="w-full border border-gray-400 p-2 rounded-lg"
                    type="text"
                    id={`guestName${i}`}
                    placeholder={`Nome Acompanhante ${i + 1}`}
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                  />
                </div>
                <div className="mb-4 w-full">
                  <input
                    className="w-full border border-gray-400 p-2 rounded-lg"
                    type="text"
                    id={`guestRg${i}`}
                    placeholder={`RG Acompanhante ${i + 1}`}
                    value={guestRg}
                    onChange={(e) => setGuestRg(e.target.value)}
                  />
                </div>
                <div className="mb-4 w-full">
                  <input
                    className="w-full border border-gray-400 p-2 rounded-lg"
                    type="text"
                    id={`guestKinship${i}`}
                    placeholder={`Parentesco do Acompanhante ${i + 1}`}
                    value={guestKinship}
                    onChange={(e) => setGuestKinship(e.target.value)}
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor={`guestShirt${i}`}
                  >
                    Deseja camisa do evento?
                  </label>
                  <div className="flex text-center gap-x-2">
                    <input
                      className="border-2 rounded-full"
                      type="checkbox"
                      id={`guestShirt${i}`}
                      checked={guestBuyShirt}
                      onChange={(e) => setGuestBuyShirt(e.target.checked)}
                    />
                    {guestBuyShirt === true ? (
                      <div className="mb-4 w-full">
                        <select
                          className="w-full border border-gray-400 p-2 rounded-lg"
                          id={`guestShirtSize${i}`}
                          value={guestShirtSize}
                          onChange={(e) => setGuestShirtSize(e.target.value)}
                        >
                          <option value="" disabled>
                            Tamanho da camisa
                          </option>
                          <option value="P">P</option>
                          <option value="M">M</option>
                          <option value="G">G</option>
                          <option value="GG">GG</option>
                        </select>
                      </div>
                    ) : (
                      <div>Não deseja</div>
                    )}
                  </div>
                </div>
                <div className="mb-4 w-full">
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor={`guestLunchFryday${i}`}
                  >
                    Incluir almoço sexta-feira:
                  </label>
                  <div className="flex text-center gap-x-2">
                    <input
                      className="border-2 rounded-full"
                      type="checkbox"
                      id={`guestLunchFryday${i}`}
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
                <div className="mb-4 w-full">
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor={`guestLunchSaturday${i}`}
                  >
                    Incluir almoço de Sábado:
                  </label>
                  <div className="flex text-center gap-x-2">
                    <input
                      className="border-2 rounded-full"
                      type="checkbox"
                      id={`guestLunchSaturday${i}`}
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
              </div>
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;
