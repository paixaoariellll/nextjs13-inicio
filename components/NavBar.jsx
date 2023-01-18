'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/amiga.jpg';
import { AiOutlineLogin } from 'react-icons/ai';

const Navbar = () => (
  <nav className="bg-white">
    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
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
      <Link
        href="/login"
        className="block text-xl w-full rounded bg-[#002776] p-2 font-medium text-white hover:bg-[#009C3B] sm:w-auto"
      >
        <AiOutlineLogin />
      </Link>
    </div>
  </nav>
);

export default Navbar;
