'use client';

import { Navbar, Footer } from '/components';
import { HeroAdmin, FormAdmin } from '../sections/admin';
import { Form, Hero } from '../sections/user';
import { useSession } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css';

function Home() {
  const { data: session } = useSession();
  return (
    <main className="md:px-10 pb-0 bg-gray-200">
      {session?.user ? (
        <>
          <ToastContainer />
          <Navbar />
          <HeroAdmin />
          <FormAdmin />
          <Footer />
        </>
      ) : (
        <>
          <ToastContainer />
          <Navbar />
          <Hero />
          <Form />
          <Footer />
        </>
      )}
    </main>
  );
}

export default Home;
