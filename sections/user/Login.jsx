'use client';

import React, { useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      window.history.back();
    }
  }, [session]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="card min-w-[366px]">
      <div className="flex items-center justify-center">
        <form
          onSubmit={submitHandler}
          className=" p-6 rounded-lg min-w-fit w-1/3 mx-auto"
        >
          <div className="flex flex-row items-center justify-center">
            <p className="text-lg mb-0 mr-4">Entre com:</p>
            <button
              type="button"
              className="rounded-full border-2 border-gray-200 p-2"
            >
              <FcGoogle className="text-3xl" />
            </button>
          </div>
          <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0">Ou</p>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <input
                className="border text-xl border-gray-400 px-5 py-1 rounded-md w-full"
                type="email"
                placeholder="E-mail"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="username"
              />
              <div className="mx-2 z-10 rounded-full p-2 flex">
                <HiOutlineMail className="text-2xl" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <input
                className="border text-xl border-gray-400 px-5 py-1 rounded-md w-full"
                type={showPassword ? 'text' : 'password'}
                placeholder="Senha"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <div
                className="cursor-pointer mx-2 z-10 rounded-full p-2 flex"
                onClick={togglePassword}
              >
                {showPassword ? (
                  <AiOutlineEye className="text-2xl" />
                ) : (
                  <AiOutlineEyeInvisible className="text-2xl" />
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="block justify-center w-fit mx-auto text-xl rounded bg-[#002776] px-12 py-2 font-medium text-white hover:bg-[#009C3B]"
          >
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
