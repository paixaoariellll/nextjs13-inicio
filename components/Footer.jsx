export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-5 mb-2">
      <h4 className="text-center text-blue-700 underline-offset-2 underline">
        Associação dos Militares Veteranos e Pensionistas de Militares de
        Guaratinguetá
      </h4>
      <h5 className="text-center text-blue-700">
        Rua Mórmons, 51, Pedregulho - Guaratinguetá /SP CEP 12515-100
      </h5>
      <h5 className="text-center text-blue-700">
        E-mail: encontrao@amigafa.com
      </h5>
      <h5 className="text-center text-blue-700">CNPJ: 00.980.710/0001-25</h5>
      <h6 className="text-center text-gray-500 mt-5">
        &copy; {year} A.M.I.G.A. Todos os direitos reservados.
      </h6>
    </footer>
  );
};
