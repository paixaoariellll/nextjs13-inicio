'use client';

import { Navbar, Footer } from '/components';
import { HeroAdmin, FormAdmin } from '../sections/admin';
import { Form, Hero } from '../sections/user';
import { useSession } from 'next-auth/react';
import '../styles/globals.css';

function Home() {
  const { data: session } = useSession();
  return (
    <main className="lg:px-10 pt-10 pb-0 bg-gray-200">
      {session?.user ? (
        <>
          <Navbar />
          <HeroAdmin />
          <FormAdmin />
          <Footer />
        </>
      ) : (
        <>
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
