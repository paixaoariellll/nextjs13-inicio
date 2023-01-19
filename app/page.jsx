import { Navbar, Footer } from '/components';
import { Hero, Form } from '../sections/user';
import '../styles/globals.css';

const Page = () => (
  <main className="lg:px-10 pt-10 pb-0 bg-gray-200">
    <Navbar />
    <Hero />
    <Form />
    <Footer />
  </main>
);

export default Page;
