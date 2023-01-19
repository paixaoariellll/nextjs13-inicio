export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-5 mb-2">
      <p className="text-center text-gray-500 text-xs">
        &copy; {year} A.M.I.G.A. Todos os direitos reservados.
      </p>
    </footer>
  );
};
