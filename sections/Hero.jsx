'use client';

import Image from 'next/image';
import React from 'react';
import logo from '../public/Logo.svg';

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
        <div class="px-4 py-20 lg:flex">
          <div class="text-center">
            <Image
              src={logo}
              alt="Logo da amiga"
              width={800}
              height={400}
              unoptmized
              className="relative sm:top-0 sm:lev sm:w-full sm:flex z-0"
            />
            <h1 class="bg-gradient-to-r from-[#009C3B] via-[#002776] to-[#FFDF00] bg-clip-text font-extrabold text-transparent">
              A.M.I.G.A.
              <h2 class="sm:block">Unidos Somos Fortes</h2>
            </h1>
            <h3 class="mx-auto mt-4">
              Associação dos Militares Inativos de Guaratinguetá e Adjacências
            </h3>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block text-xl w-full rounded bg-[#002776] px-12 py-3 font-medium text-white hover:bg-[#009C3B] sm:w-auto"
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
