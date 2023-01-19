import { Navbar, Footer } from '/components';
import Dashboard from './dashboard';
import '@/styles/globals.css';

const PageAdmin = () => (
  <main className="lg:px-10 pt-10 pb-0 min-h-screen bg-gray-200">
    <Navbar />
    <Dashboard />
    <Footer />
  </main>
);

export default PageAdmin;
