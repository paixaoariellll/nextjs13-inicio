import Link from 'next/link';
import React from 'react';

const Dashboard = () => {
  return (
    <section id="Dashboard" className="flex justify-between m-10 ">
      <div className="card">
        <Link
          href="/admin#"
          className="cursor-pointer hover:underline hover:underline-offset-4 hover:text-blue-600"
        >
          Registros
        </Link>
      </div>
      <div className="card">
        <Link
          href="/admin#"
          className="cursor-pointer hover:underline hover:underline-offset-4 hover:text-blue-600"
        >
          Usuários
        </Link>
      </div>
      <div className="card">
        <Link
          href="/admin#"
          className="cursor-pointer hover:underline hover:underline-offset-4 hover:text-blue-600"
        >
          Dúvidas
        </Link>
      </div>
      <div className="card">
        <Link
          href="/admin#"
          className="cursor-pointer hover:underline hover:underline-offset-4 hover:text-blue-600"
        >
          Total
        </Link>
      </div>
    </section>
  );
};

export default Dashboard;
