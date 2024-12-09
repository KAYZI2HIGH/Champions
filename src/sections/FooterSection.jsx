const Footer = () => {
  return (
    <section className="w-full sm:flex justify-between items-center p-5 pt-10 border-t border-gray-300 bg-white">
      <h1 className="sm:text-lg tracking-wider text-gray-600">
        &copy; 2024 champions. All rights reserved.
      </h1>
      <h1 className="sm:text-lg tracking-wider text-gray-600">
        Contact developer, click{" "}
        <a
          href="https://porfolio-beta-virid.vercel.app/"
          className="text-blue-500 underline"
        >
          here
        </a>
      </h1>
    </section>
  );
};

export default Footer;
