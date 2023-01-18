'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/amiga.jpg';
import { AiOutlineLogin } from 'react-icons/ai';

const Navbar = () => (
  <nav className="bg-white rounded-t-xl">
    <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-x-5">
      <Link href="/" className="text-white font-medium text-xl">
        <Image
          src={Logo}
          alt="Logo"
          width={100}
          height={100}
          unoptimized
          className="object-contain"
        />
      </Link>
      <div className="flex gap-x-5">
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
      </div>
      <Link
        href="/login"
        className="block text-xl rounded bg-[#002776] p-2 font-medium text-white hover:bg-[#009C3B] sm:w-auto"
      >
        <AiOutlineLogin />
      </Link>
    </div>
  </nav>
);

export default Navbar;
