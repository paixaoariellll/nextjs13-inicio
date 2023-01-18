'use client';

import Image from 'next/image';
import React from 'react';
import logo from '../public/amiga.jpg';

const RegisterForm = () => {
  return (
    <div className="card ">
      <section id="Hero" className="sm:p-10">
        <div className="px-4 py-20 ">
          <div className="grid text-center grid-cols-2">
            <div className="col-span-2 lg:col-span-1">
              <Image
                src={logo}
                alt="Logo da amiga"
                width={700}
                height={600}
                unoptmized
                className="relative object-contain sm:mx-auto sm:top-0 sm:w-full sm:flex z-0"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h1 className="text-[#002776] font-extrabold">A.M.I.G.A.</h1>
              <h2 className="sm:block text-[#FFDF00]">Unidos Somos Fortes</h2>
              <h3 className="mx-auto mt-4">
                Associação dos Militares Veteranos e Pensionista de Militares de
                Guaratinguetá
              </h3>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block text-xl w-full rounded bg-[#002776] px-12 py-3 font-medium text-white hover:bg-[#009C3B] sm:w-auto"
                  href="#Form"
                >
                  Fazer inscrição
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterForm;
