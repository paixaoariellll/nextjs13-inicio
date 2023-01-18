'use client';

import Image from 'next/image';
import React from 'react';
import logo from '../public/amiga.jpg';

const RegisterForm = () => {
  return (
    <div className="card ">
      <nav className="flex mx-auto pt-5 px-10 gap-5 justify-center">
        <a
          href="https://www.facebook.com/amigafa"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/facebook.svg"
            alt="icone_"
            width={32}
            height={32}
          />
        </a>
        <a
          href="http://www.instagram.com/amigaveteranosoficial"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg"
            alt="icone_"
            width={32}
            height={32}
          />
        </a>
        <a
          href="https://www.youtube.com/@associacaodosmilitaresinat8997"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/youtube.svg"
            alt="icone_"
            width={32}
            height={32}
          />
        </a>
      </nav>
      <section id="Hero" className="sm:p-10">
        <div className="px-4 py-20 ">
          <div className="flex flex-col items-center text-center justify-center">
            <Image
              src={logo}
              alt="Logo da amiga"
              width={600}
              height={500}
              unoptmized
              className="relative object-contain sm:top-0 sm:w-full sm:flex z-0"
            />
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
      </section>
    </div>
  );
};

export default RegisterForm;
