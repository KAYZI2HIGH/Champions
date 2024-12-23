import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-image w-full h-[calc(100vh-60px)] flex justify-center items-center"
    >
      <div className="z-0 w-full bg-black absolute top-0 bottom-0 left-0 right-0 opacity-35"></div>
      <img src="images/church-logo.png" alt="RCCG-Logo" className="w-full sm:w-[40%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:-translate-y-[40%] -z-10 opacity-15"/>
      <div className="max-w-[800px] text-center mt-10 z-10 space-y-2">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-wider capitalize">
          welcome to our home.
        </h1>
        <div>
          <h1 className="font-bold hidden sm:block text-2xl tracking-wide">
            The Redeemed Christian Church of God.
          </h1>
          <h1 className="font-bold tracking-wide"></h1>
        </div>
        <p className="text-md sm:text-lg tracking-wider">
          Champions Cathedral • Lagos Province 80, a community dedicated
          to growing in faith and spreading God’s love. Join us for inspiring
          worship services, uplifting fellowship, and meaningful outreach.
        </p>
        <h1 className="font-bold tracking-wide text-lg">
          Address:  2, Dorcas Oladele, Area 1 Estate, Adura, Lagos
        </h1>
        <div className="flex space-x-5  items-center justify-center w-fit mx-auto pt-5">
          <Link
            to="services"
            spy
            smooth
            offset={-120}
            className="px-7 py-3 font-bold text-xl bg-white text-black rounded-md cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:bg-orange-300 hover:text-black "
          >
            Join Us
          </Link>
          <Link
            to="about"
            spy
            smooth
            offset={-120}
            className="px-6 py-2 font-bold text-xl border-2 border-white text-white rounded-md cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:bg-orange-300 hover:text-black hover:border-orange-400"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
