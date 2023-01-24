'use client';

import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';

const RegisterForm = () => {
  const [register, setRegister] = useState('');
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
  const [manyBuyShirt, setManyBuyShirt] = useState(0);
  const [shirtSizes, setShirtSizes] = useState({
    size1: 'M',
    size2: 'M',
    size3: 'M',
    size4: 'M',
    size5: 'M',
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
    /*  if (response.ok) {
      window.location.href = '/confirm';
    } else {
      console.error();
    } */
    const result = await response.json();
    console.log(result);
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

  function calculateTotalPrice() {
    let total = 0;
    for (let i = 0; i < manyGuests; i++) {
      total += priceGuest[`guest${i + 1}`] || 0;
    }
    return total;
  }

  function handlePriceUpdate() {
    setTotalPrice(calculateTotalPrice() + priceVeteran);
  }

  return (
    <section id="Form" className="md:pt-10 px-10 pb-0">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Informações Pessoais */}
        <div className="card">
          <div className="text-center gap-10">
            <h1> Volta ao Berço do Especialista</h1>
            <h2>19° Encontro </h2>
          </div>
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
                  type="tell"
                  mask="(99) 9 9999 - 9999"
                  id="tellphone"
                  placeholder="Telefone ou Celular"
                  value={tellphone}
                  onChange={(e) => setTellphone(e.target.value)}
                />
              </div>
              <div className="mb-4 w-full">
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="cell"
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
              De Volta Ao Berço Do Especialista
            </h3>
            <div className="grid sm:grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="mb-4 w-full">
                <p className="text-gray-400 text-sm">
                  Será realizado dia xx/xx/2023
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
                      className="text-center text-md text-[#002776]"
                    ></optgroup>
                    <option value="" disabled className="text-md">
                      Almoço na Sexta-feira?
                    </option>
                    <option value={false}>Não</option>
                    <option value={true}>Sim</option>
                  </select>
                </div>
              </div>
              <div className="mb-4 w-full">
                <p className="text-gray-400 text-sm">
                  Será realizado dia xx/xx/2023
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
                      className="text-center text-md text-[#002776]"
                    ></optgroup>
                    <option value="" disabled className="text-md">
                      Churrasco no Sábado?
                    </option>
                    <option value={false}>Não</option>
                    <option value={true}>Sim</option>
                  </select>
                </div>
              </div>
              <div className="mb-4 w-full">
                <p className="text-gray-400 text-sm">
                  Será entrege dia xx/xx/2023
                </p>
                <select
                  className="border border-gray-400 p-2 rounded-lg w-full"
                  id="buyShirt"
                  value={buyShirt}
                  onChange={(e) => {
                    setBuyShirt(e.target.value);
                    if (e.target.value === 'true') {
                      setPriceVeteran(priceVeteran + 40);
                    } else if (
                      e.target.value === 'false' &&
                      priceVeteran >= 40 &&
                      e.target.value === 'false' &&
                      priceVeteran != 50 &&
                      e.target.value === 'false' &&
                      priceVeteran != 70 &&
                      e.target.value === 'false' &&
                      priceVeteran != 120
                    ) {
                      setPriceVeteran(priceVeteran - 40);
                    }
                  }}
                >
                  <optgroup
                    label={`Valor: 40 R$`}
                    className="text-center text-md text-[#002776]"
                  ></optgroup>
                  <option value="" disabled className="text-md">
                    Camisa Oficial do 19° Encontro?
                  </option>
                  <option value={false}>Não</option>
                  <option value={true}>Sim</option>
                </select>
              </div>
              {buyShirt === 'true' && (
                <div className="mb-4">
                  <p className="text-gray-400 text-sm">
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
              <p className="sm:col-span-1 text-center md:col-span-2 lg:col-span-3 xl:col-span-4">
                Total:{' '}
                <span className="text-[#002776] font-extrabold">
                  {priceVeteran}
                </span>{' '}
                R$
              </p>
            </div>
          </div>
        </div>
        {/* Camisas adcionais */}
        <div className="card">
          <div className="flex flex-col justify-between">
            <div className="mb-4 w-full">
              <p className="text-gray-400 text-sm">
                Quantidade de camisas adicionais
              </p>
              <select
                className="border border-gray-400 p-2 rounded-lg w-full"
                value={manyBuyShirt}
                onChange={(e) => setManyBuyShirt(e.target.value)}
              >
                <option value="" disabled>
                  Selecione a quantidade
                </option>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
            <div className="grid sm:grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: manyBuyShirt }, (_, i) => (
                <div key={i} className="mb-4">
                  <p className="text-gray-400 text-sm">
                    Selecione o tamanho da camisa adicional {i + 1}
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
        </div>
        {/* Acompanhantes */}
        <div className="card">
          <div className="mb-4 w-full">
            <p className="text-gray-400 text-sm">Deseja levar convidados?</p>
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
                          className="text-center text-md text-[#002776]"
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
                            className="text-center text-md text-[#002776]"
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
          {calculateTotalPrice > 0 && (
            <p className="sm:col-span-1 text-center md:col-span-2 lg:col-span-3 xl:col-span-4">
              Valor para todos os convidados:{' '}
              <span className="text-[#002776] font-extrabold">
                {calculateTotalPrice()}
              </span>{' '}
              R$
            </p>
          )}
          <div>
            {totalPrice > 0 && (
              <p className="sm:col-span-1 text-center md:col-span-2 lg:col-span-3 xl:col-span-4">
                Valor Total:{' '}
                <span className="text-[#002776] font-extrabold">
                  {totalPrice}
                </span>{' '}
                R$
              </p>
            )}
            <div>
              <button
                type="button"
                className="block text-md w-full justify-center rounded bg-[#002776] px-12 py-3 mx-auto my-2 font-medium text-white hover:bg-[#009C3B] sm:w-auto"
                onClick={handlePriceUpdate}
              >
                Atualizar valor total
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            type="submit"
            className="block text-xl w-full rounded bg-[#002776] px-12 py-3 font-medium text-white hover:bg-[#009C3B] sm:w-auto"
          >
            Enviar inscrição
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
