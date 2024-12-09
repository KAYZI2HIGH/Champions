import { Link } from "react-scroll";

const About = () => {
  return (
    <section
      className="w-full  bg-about sm:flex space-y-20 sm:space-y-0 sm:space-x-10 justify-between text-black py-20 pb-40 px-5 sm:px-10"
      id="about"
    >
      <div className="sm:w-1/2 space-y-4 my-auto">
        <h1 className="text-5xl tracking-wider font-bold capitalize text-nowrap  items-end under">
          about us
        </h1>
        <p className="text-lg tracking-wide pb-10">
          Welcome to Champions Cathedral, a community where faith, love, and
          fellowship thrive. Our mission is to glorify God, grow spiritually,
          and serve others. We offer uplifting worship services, Bible studies,
          and outreach programs that bring hope to our community. No matter
          where you are on your faith journey, you are welcome here!
        </p>
        <Link
          to="services"
          spy
          smooth
          offset={-120}
          className="px-7 py-3 font-bold text-xl bg-black text-white rounded-md cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:bg-orange-300 hover:text-black mt-10 "
        >
          Join Us
        </Link>
      </div>
      <div className=" w-full sm:w-1/2 relative sm:h-[600px] h-[300px]">
        <img
          src="images/about-img2.jpg"
          alt="about thumbnail"
          className="w-[70%] absolute top-0 right-0 rounded-3xl"
        />
        <img
          src="images/about-img1.jpg"
          alt="about thumbnail"
          className="w-[70%] absolute bottom-0 left-0 rounded-3xl"
        />
      </div>
    </section>
  );
};

export default About;
