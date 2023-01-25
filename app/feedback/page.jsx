import { Navbar, Footer } from '/components';
import { Login } from '../../sections/user';
import '@/styles/globals.css';

const Page = () => (
  <main className="lg:px-10 pt-10 pb-0 min-h-screen bg-gray-200">
    <Navbar />
    <Login />
    <Footer />
  </main>
);

export default Page;
