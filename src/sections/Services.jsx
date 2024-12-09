import { Link } from "react-scroll";

const Services = () => {
  
  return (
    <section
      id="services"
      className="py-10 lg:p-0 w-full lg:h-screen flex flex-col-reverse lg:flex-row text-black"
    >
      <img
        src="images/service-img.jpg"
        alt="thumbnail"
        className="h-[400px] lg:h-full mt-10 lg:mt-0"
      />
      <div className="p-2 m-auto space-y-5">
        <h1 className="capitalize text-4xl sm:text-5xl text-black font-bold  under">
          join our services
        </h1>
        <ul className="sm:ml-20 space-y-2">
          <li className="font-semibold text-2xl tracking-wide capitalize">
            sunday services:
          </li>
          <ul className="ml-10 list-disc text-lg ">
            <li>Morning Prayer (7:30 AM - 8:00 AM)</li>
            <li>Sunday School (8:00 AM - 9:00 AM)</li>
            <li>Youth Fellowship: Fridays at 6:00 PM</li>
            <li>Sunday School (8:00 AM - 9:00 AM)</li>
          </ul>
          <li className="font-semibold text-2xl tracking-wide capitalize">
            Midweek Services:
          </li>
          <ul className="ml-10 list-disc text-lg">
            <li>Digging Deep (Bible Study) – Tuesdays (6:30 PM - 8:00 PM)</li>
            <li>
              Faith Clinic (Prayer Meeting) – Thursdays (6:30 PM - 8:00 PM)
            </li>
          </ul>
          <li className="font-semibold text-2xl tracking-wide capitalize">
            Special Monthly Programs:
          </li>
          <ul className="ml-10 list-disc text-lg pb-10">
            <li>Holy Ghost Service (First Friday of Every Month)</li>
          </ul>
        </ul>
        <a
          href="https://www.google.com/maps/dir//The+Redeemed+Christian+Church+Of+God,+Lagos+Province+80+Head+Quarters,+1+Dorcas+Oladele+St,+Alimosho,+Lagos+102213,+Lagos/@6.6640912,3.2743893,21z/data=!4m8!4m7!1m0!1m5!1m1!1s0x103b978b418eccab:0xfd586df6d98bd631!2m2!1d3.2744157!2d6.6642024?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
          className="px-7 py-3 font-bold text-xl bg-black text-white rounded-md cursor-pointer transition-all duration-500 hover:bg-orange-300 hover:text-black mt-10 relative"
        >
          Get Directons
        </a>
      </div>
    </section>
  );
};

export default Services;
