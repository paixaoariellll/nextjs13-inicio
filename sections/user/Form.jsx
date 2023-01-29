'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';

const RegisterFormUser = () => {
  const [register, setRegister] = useState('');
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [name, setName] = useState('');
  const [priceVeteran, setPriceVeteran] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
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
  const [manyBuyShirt, setManyBuyShirt] = useState('');
  const [shirtSizes, setShirtSizes] = useState({
    size1: '',
    size2: '',
    size3: '',
    size4: '',
    size5: '',
  });
  const [shirt, setShirt] = useState({
    size: '',
  });
  const [manyGuests, setManyGuests] = useState('');
  const [priceGuest, setPriceGuest] = useState(
    Array.from({ length: manyGuests }, () => 0),
  );
  const [guest, setGuest] = useState({
    guest1: {
      name: '',
      rg: '',
      kinship: '',
      lunchFryday: '',
      lunchSaturday: '',
      guestBuyShirt: '',
    },
    guest2: {
      name: '',
      rg: '',
      kinship: '',
      lunchFryday: '',
      lunchSaturday: '',
      guestBuyShirt: '',
    },
    guest3: {
      name: '',
      rg: '',
      kinship: '',
      lunchFryday: '',
      lunchSaturday: '',
      guestBuyShirt: '',
    },
    guest4: {
      name: '',
      rg: '',
      kinship: '',
      lunchFryday: '',
      lunchSaturday: '',
      guestBuyShirt: '',
    },
    guest5: {
      name: '',
      rg: '',
      kinship: '',
      lunchFryday: '',
      lunchSaturday: '',
      guestBuyShirt: '',
    },
  });

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
        manyBuyShirt,
        shirtSizes,
        shirt,
        priceVeteran,
        manyGuests,
        guest,
        priceVeteran,
        priceGuest,
        totalPrice,
      }),
    });
    if (response.ok) {
      const result = await response.json();
      console.log(result);
      window.location.href = '#Hero';
    } else {
      console.error();
    }
  };

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const optgroup = [];
    for (let i = currentYear - 60; i <= currentYear - 1; i += 1) {
      optgroup.push(
        <option key={i} value={i}>
          {i}
        </option>,
      );
    }
    return optgroup;
  };

  const handleCEP = (event) => {
    const cepValidate = event.target.value.replace(/\D/g, '');
    setCEP(cepValidate);
    if (cepValidate.length == 8) {
      fetch(`https://brasilapi.com.br/api/cep/v2/${cepValidate}`)
        .then((res) => res.json())
        .then((data) => {
          setAddress(data.street);
          setNeighborhood(data.neighborhood);
          setCity(data.city);
          setUf(data.state);
        });
    }
  };

  function handlePriceUpdate() {
    setTotalPrice(calculateTotalPrice() + priceVeteran + 50 * manyBuyShirt);
  }

  function calculateTotalPrice() {
    let total = 0;
    for (let i = 0; i < manyGuests; i++) {
      total += priceGuest[`guest${i + 1}`] || 0;
    }
    return total;
  }

  const dimensions = {
    P: { height: 67, width: 49 },
    M: { height: 73, width: 53 },
    G: { height: 76, width: 57 },
    GG: { height: 79, width: 60 },
    XGG: { height: 82, width: 63 },
    XXGG: { height: 82, width: 69 },
    XXXGG: { height: 82, width: 72 },
    XXXXGG: { height: 82, width: 75 },
  };

  return (
    <section id="Form" className="pt-10 px-10 pb-0">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="title">
          <h1>Volta Ao Berço Do Especialista</h1>
          <h3>19° Encontro </h3>
        </div>
        {/* Informações Pessoais */}
        <div className="card">
          <h3 className="title">Formulário de inscrição</h3>
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
                  <optgroup label="Oficial General">
                    <option value="Marechal-do-Ar">Marechal-do-Ar</option>
                    <option value="Tenente-Brigadeiro-do-Ar">
                      Tenente-Brigadeiro-do-Ar
                    </option>
                    <option value="Major-Brigadeiro-do-Ar">
                      Major-Brigadeiro-do-Ar
                    </option>
                    <option value="Brigadeiro">Brigadeiro</option>
                  </optgroup>
                  <optgroup label="Oficial Superior">
                    <option value="Coronel">Coronel</option>
                    <option value="Tenente-Coronel">Tenente-Coronel</option>
                    <option value="Major">Major</option>
                  </optgroup>
                  <optgroup label="Oficial Intermediário">
                    <option value="Capitão">Capitão</option>
                  </optgroup>
                  <optgroup label="Oficial Subalterno">
                    <option value="Primeiro-Tenente">Primeiro-Tenente</option>
                    <option value="Segundo-Tenente">Segundo-Tenente</option>
                    <option value="Aspirante">Aspirante</option>
                  </optgroup>
                  <optgroup label="Graduado">
                    <option value="Suboficial">Suboficial</option>
                    <option value="Primeiro-Sargento">Primeiro-Sargento</option>
                    <option value="Segundo-Sargento">Segundo-Sargento</option>
                    <option value="Terceiro-Sargento">Terceiro-Sargento</option>
                    <option value="Cabo">Cabo</option>
                  </optgroup>
                  <optgroup label="Outros">
                    <option value="Outros">Outros</option>
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
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="text"
                  id="CEP"
                  placeholder="CEP"
                  value={CEP}
                  onChange={handleCEP}
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
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="tell"
                  id="tellphone"
                  placeholder="Telefone ou Celular"
                  value={tellphone}
                  onChange={(e) => setTellphone(e.target.value)}
                />
              </div>
              <div className="mb-4 w-full">
                <InputMask
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="cell"
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
        <div className="title">
          <h2 className="my-5 text-center w-full">
            Volta Ao Berço Do Especialista
          </h2>
        </div>
        {/* Veteranos */}
        <div className="card">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-5">
            <div className="mb-4">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-5">
                <h3 className="my-5 text-center col-span-2 w-full">Veterano</h3>
                <div className="col-span-2 mb-4 max-w-xs w-full flex flex-col mx-auto">
                  <p className="text-gray-400 text-sm text-center">
                    Dia 23/06/2023
                  </p>
                  <div className="flex text-center gap-x-2">
                    <select
                      className="border border-gray-400 p-2 rounded-lg w-full"
                      id="lunchFryday"
                      value={lunchFryday}
                      onChange={(e) => {
                        setLunchFryday(e.target.value);
                        if (e.target.value === 'true') {
                          setPriceVeteran(priceVeteran + 50);
                        } else if (
                          e.target.value === 'false' &&
                          priceVeteran >= 50
                        ) {
                          setPriceVeteran(priceVeteran - 50);
                        }
                      }}
                    >
                      <optgroup
                        label={`Valor: 50 R$`}
                        className="text-center text-base text-[#002776]"
                      ></optgroup>
                      <option value="" disabled className="text-base">
                        Almoço na Sexta-feira?
                      </option>
                      <option value={false}>Não</option>
                      <option value={true}>Sim</option>
                    </select>
                  </div>
                </div>
              </div>

              {lunchFryday && (
                <div className="col-span-2 mb-4 max-w-xs w-full flex flex-col mx-auto">
                  <p className="text-gray-400 text-sm text-center">
                    Dia 24/06/2023
                  </p>
                  <div className="flex text-center gap-x-2">
                    <select
                      className="border border-gray-400 p-2 rounded-lg w-full"
                      id="lunchSaturday"
                      value={lunchSaturday}
                      onChange={(e) => {
                        setLunchSaturday(e.target.value);
                        if (e.target.value === 'true') {
                          setPriceVeteran(priceVeteran + 70);
                        } else if (
                          e.target.value === 'false' &&
                          priceVeteran >= 70
                        ) {
                          setPriceVeteran(priceVeteran - 70);
                        }
                      }}
                    >
                      <optgroup
                        label={`Valor: 70 R$`}
                        className="text-center text-base text-[#002776]"
                      ></optgroup>
                      <option value="" disabled className="text-base">
                        Churrasco no Sábado?
                      </option>
                      <option value={false}>Não</option>
                      <option value={true}>Sim</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
            <p className="col-span-2 text-center">
              Total:{' '}
              <span className="text-[#002776] font-extrabold">
                {priceVeteran}
              </span>{' '}
              R$
            </p>
          </div>
        </div>
        {/* Camisas */}
        <div className="card">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-5">
            {lunchSaturday && (
              <div className="mb-4">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-5">
                  <h3 className="my-5 text-center col-span-2 w-full">
                    Camisa do Encontro
                  </h3>
                  <div className="col-span-2 mb-4 max-w-xs w-full flex flex-col mx-auto">
                    <p className="text-gray-400 text-sm text-center">
                      Camisa oficial do Encontro
                    </p>
                    <select
                      className="border border-gray-400 p-2 rounded-lg w-full"
                      id="buyShirt"
                      value={buyShirt}
                      onChange={(e) => {
                        setBuyShirt(e.target.value);
                        if (e.target.value === 'true') {
                          setPriceVeteran(priceVeteran + 50);
                        } else if (
                          e.target.value === 'false' &&
                          priceVeteran > 50 &&
                          priceVeteran != 70
                        ) {
                          setPriceVeteran(priceVeteran - 50);
                        }
                      }}
                    >
                      <optgroup
                        label={`Valor: 50 R$`}
                        className="text-center text-base text-[#002776]"
                      ></optgroup>
                      <option value="" disabled className="text-base">
                        Deseja a camisa oficial do encontro?
                      </option>
                      <option value={false}>Não</option>
                      <option value={true}>Sim</option>
                    </select>
                  </div>
                  {buyShirt && (
                    <div className="col-span-2 mb-4 max-w-xs w-full flex flex-col mx-auto">
                      <p className="text-gray-400 text-sm text-center">
                        Selecione o tamanho da sua camisa
                      </p>
                      <select
                        className="border border-gray-400 p-2 rounded-lg w-full"
                        value={shirt.size}
                        placeholder="Tamanho da camisa"
                        onChange={(e) =>
                          setShirt({ ...shirt, size: e.target.value })
                        }
                      >
                        <option value="" disabled>
                          Tamanho da camisa
                        </option>
                        <option value="P">P</option>
                        <option value="M">M</option>
                        <option value="G">G</option>
                        <option value="GG">GG</option>
                        <option value="XG">XG</option>
                        <option value="XXG">XXG</option>
                        <option value="XXG">XXXG</option>
                        <option value="XXG">XXXXG</option>
                      </select>
                    </div>
                  )}
                  <div className="col-span-2 mb-4 max-w-xs w-full flex flex-col mx-auto">
                    <p className="text-gray-400 text-sm text-center">
                      Quantidade de camisas adicionais
                    </p>
                    <select
                      className="mb-4 border w-full border-gray-400 p-2 rounded-lg"
                      value={manyBuyShirt}
                      onChange={(e) => {
                        setManyBuyShirt(e.target.value);
                      }}
                    >
                      <option value="" disabled>
                        Deseja camisas adicionais?
                      </option>
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-1 gap-x-5 md:grid-cols-2">
                  {Array.from({ length: manyBuyShirt }, (_, i) => (
                    <div key={i} className="mb-4 w-full">
                      <p className="text-gray-400 text-sm text-center">
                        Tamanho da camisa {i + 1}
                      </p>
                      <select
                        className="border border-gray-400 p-2 rounded-lg w-full"
                        value={shirtSizes[`size${i + 1}`]}
                        placeholder="Tamanho da camisa"
                        onChange={(e) => {
                          setShirtSizes({
                            ...shirtSizes,
                            [`size${i + 1}`]: e.target.value,
                          });
                        }}
                      >
                        <option value="" disabled>
                          Tamanho da camisa
                        </option>
                        <option value="P">P</option>
                        <option value="M">M</option>
                        <option value="G">G</option>
                        <option value="GG">GG</option>
                        <option value="XG">XG</option>
                        <option value="XXG">XXG</option>
                        <option value="XXG">XXXG</option>
                        <option value="XXG">XXXXG</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="mb-4">
              <table className="table-auto w-full text-center">
                <thead>
                  <tr className="bg-gray-400 text-white">
                    <th className="px-4 py-2">Tamanho</th>
                    <th className="px-4 py-2">Altura (cm)</th>
                    <th className="px-4 py-2">Largura (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(dimensions).map(
                    ([size, { height, width }]) => (
                      <tr
                        key={size}
                        className="rounded-2xl border-r border-t-0 border-b border-b-gray-400 border-r-gray-400"
                      >
                        <td className="px-4 border-x border-x-gray-400 py-2">
                          {size}
                        </td>
                        <td className="px-4 py-2">{height}</td>
                        <td className="px-4 py-2">{width}</td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Acompanhantes */}
        <div className="card">
          <h3 className="my-5 text-center w-full">Acompanhantes</h3>
          <div className="mb-4 max-w-xs w-full flex flex-col mx-auto">
            <p className="text-gray-400 text-sm text-center">
              Deseja levar convidados?
            </p>
            <select
              className="border border-gray-400 p-2 rounded-lg w-full"
              id="manyGuests"
              value={manyGuests}
              onChange={(e) => setManyGuests(e.target.value)}
            >
              <option value="" disabled>
                Quantidade de convidados
              </option>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          {manyGuests > 0 && (
            <div className="flex flex-col justify-between">
              <h3 className="my-5 text-center w-full">
                Informações Dos Acompanhantes
              </h3>
              <div className="grid sm:grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: manyGuests }, (_, i) => (
                  <div key={i}>
                    <p className="sm:col-span-1 text-center md:col-span-2 lg:col-span-3 xl:col-span-4">
                      Convidado {i + 1}:{' '}
                      <span className="text-[#002776] font-extrabold">
                        {priceGuest[`guest${i + 1}`]}
                      </span>{' '}
                      R$
                    </p>
                    <div className="mb-4 w-full">
                      <input
                        type="text"
                        className="w-full border border-gray-400 p-2 rounded-lg"
                        id={`guestName${i}`}
                        placeholder={`Nome Acompanhante ${i + 1}`}
                        value={guest[`guest${i + 1}`].name}
                        onChange={(e) => {
                          setGuest({
                            ...guest,
                            [`guest${i + 1}`]: {
                              ...guest[`guest${i + 1}`],
                              name: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="mb-4 w-full">
                      <input
                        type="text"
                        className="border border-gray-400 p-2 rounded-lg w-full"
                        value={guest[`guest${i + 1}`].rg}
                        placeholder={`RG do convidado ${i + 1}`}
                        onChange={(e) =>
                          setGuest({
                            ...guest,
                            [`guest${i + 1}`]: {
                              ...guest[`guest${i + 1}`],
                              rg: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="mb-4 w-full">
                      <input
                        type="text"
                        className="border border-gray-400 p-2 rounded-lg w-full"
                        value={guest[`guest${i + 1}`].kinship}
                        placeholder={`Grau de parentesco do convidado ${i + 1}`}
                        onChange={(e) =>
                          setGuest({
                            ...guest,
                            [`guest${i + 1}`]: {
                              ...guest[`guest${i + 1}`],
                              kinship: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="mb-4 w-full">
                      <select
                        className="border border-gray-400 p-2 rounded-lg w-full"
                        id={`guestLunchFryday${i + 1}`}
                        value={guest[`guest${i + 1}`].lunchFryday}
                        onChange={(e) => {
                          setGuest({
                            ...guest,
                            [`guest${i + 1}`]: {
                              ...guest[`guest${i + 1}`],
                              lunchFryday: e.target.value,
                            },
                          });
                          if (e.target.value === 'true') {
                            setPriceGuest((prevPrice) => {
                              return {
                                ...prevPrice,
                                [`guest${i + 1}`]:
                                  (prevPrice[`guest${i + 1}`] || 0) + 50,
                              };
                            });
                          } else if (
                            e.target.value === 'false' &&
                            (priceGuest[`guest${i + 1}`] || 0) >= 50
                          ) {
                            setPriceGuest((prevPrice) => {
                              return {
                                ...prevPrice,
                                [`guest${i + 1}`]:
                                  (prevPrice[`guest${i + 1}`] || 0) - 50,
                              };
                            });
                          }
                        }}
                      >
                        <optgroup
                          label={`Valor: 50 R$`}
                          className="text-center text-base text-[#002776]"
                        ></optgroup>
                        <option value="" disabled>
                          Almoço na Sexta-feira?
                        </option>
                        <option value={false}>Não</option>
                        <option value={true}>Sim</option>
                      </select>
                    </div>
                    {guest[`guest${i + 1}`].lunchFryday != '' && (
                      <div className="mb-4 w-full">
                        <select
                          className="border border-gray-400 p-2 rounded-lg w-full"
                          id={`guestLunchSaturday${i + 1}`}
                          value={guest[`guest${i + 1}`].lunchSaturday}
                          onChange={(e) => {
                            setGuest({
                              ...guest,
                              [`guest${i + 1}`]: {
                                ...guest[`guest${i + 1}`],
                                lunchSaturday: e.target.value,
                              },
                            });
                            if (e.target.value === 'true') {
                              setPriceGuest((prevPrice) => {
                                return {
                                  ...prevPrice,
                                  [`guest${i + 1}`]:
                                    (prevPrice[`guest${i + 1}`] || 0) + 70,
                                };
                              });
                            } else if (
                              e.target.value === 'false' &&
                              (priceGuest[`guest${i + 1}`] || 0) >= 70
                            ) {
                              setPriceGuest((prevPrice) => {
                                return {
                                  ...prevPrice,
                                  [`guest${i + 1}`]:
                                    (prevPrice[`guest${i + 1}`] || 0) - 70,
                                };
                              });
                            }
                          }}
                        >
                          <optgroup
                            label={`Valor: 70 R$`}
                            className="text-center text-base text-[#002776]"
                          ></optgroup>
                          <option value="" disabled>
                            Almoço no Sábado?
                          </option>
                          <option value={false}>Não</option>
                          <option value={true}>Sim</option>
                        </select>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          {totalPrice
            ? calculateTotalPrice() + priceVeteran + 50 * manyBuyShirt && (
                <p className="sm:col-span-1 text-center md:col-span-2 lg:col-span-3 xl:col-span-4">
                  Valor Total:{' '}
                  <span className="text-[#002776] font-extrabold">
                    {totalPrice}
                  </span>{' '}
                  R$
                </p>
              )
            : ''}
          <div>
            <button
              type="button"
              className="block text-base w-full justify-center rounded bg-[#002776] px-12 py-3 mx-auto my-2 font-medium text-white hover:bg-[#009C3B] sm:w-auto"
              onClick={() => {
                calculateTotalPrice();
                handlePriceUpdate();
                if (totalPrice > 0) {
                  setShowSubmitButton(true);
                } else {
                  setShowSubmitButton(false);
                }
              }}
            >
              Atualizar valor total
            </button>
          </div>
        </div>
        {/* Enviar inscrição */}
        {totalPrice == 0 ? (
          <p className="text-red-500 text-sm text-center">
            É necessário contratar pelo menos um dos serviços para a efetuação
            de inscrição
          </p>
        ) : (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {showSubmitButton && (
              <div className="flex flex-col">
                <div className="flex w-full justify-center mb-4">
                  <button
                    type="submit"
                    onClick={() => {
                      calculateTotalPrice();
                      handlePriceUpdate();
                    }}
                    className="block text-xl w-full rounded bg-[#002776] px-12 py-3 font-medium text-white hover:bg-[#009C3B] sm:w-auto"
                  >
                    Enviar inscrição
                  </button>
                </div>
                <p className="text-sm">Não conseguiu realizar a inscrição?</p>
                <Link href="./feedback">
                  <p className="text-center text-sm hover:text-lg hover:font-extrabold">
                    Clique aqui
                  </p>
                </Link>
              </div>
            )}
          </div>
        )}
      </form>
    </section>
  );
};

export default RegisterFormUser;
