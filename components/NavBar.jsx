'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/amiga.jpg';
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { RiLoginCircleFill } from 'react-icons/ri';
import { useSession, signOut } from 'next-auth/react';

export const Navbar = () => {
  const { data } = useSession();

  return (
    <nav className="bg-white rounded-t-xl">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-x-5">
        <Link href="/" className="text-white font-medium text-xl">
          <Image
            src={Logo}
            alt="Logo"
            width={100}
            height="auto"
            unoptimized="true"
          />
        </Link>
        <div className="flex gap-x-5">
          <a
            href="https://www.facebook.com/amigafa"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook className="text-3xl text-blue-600" />
          </a>
          <a
            href="http://www.instagram.com/amigaveteranosoficial"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram className="text-3xl text-pink-600" />
          </a>
          <a
            href="https://www.youtube.com/@associacaodosmilitaresinat8997"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillYoutube className="text-3xl text-red-600" />
          </a>
        </div>
        {data?.user ? (
          <>
            <div>Seja bem-vindo {data?.user.name}</div>
            <div
              onClick={() => signOut()}
              className="cursor-pointer block text-xl bg-red-600 p-2 rounded text-white hover:text-white sm:w-auto outline-color"
            >
              Sair
            </div>
          </>
        ) : (
          <Link
            href="/login"
            className="block text-xl rounded-full border-2 border-[#002776] text-[#002776] p-2 hover:bg-[#002776] hover:text-white sm:w-auto outline-color"
          >
            <RiLoginCircleFill />
          </Link>
        )}
      </div>
    </nav>
  );
};
