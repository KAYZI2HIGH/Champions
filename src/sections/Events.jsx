import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import EventContent from "./components/EventContent";


import { ChevronLeft, ChevronRight } from "lucide-react";

const Events = () => {
  const swiperRef = useRef(null);
  const [eventDetails, setEventDetails] = useState([
    {
      image: "christmass-celebrations.jpg",
      date: "Dec. 25",
      time: "9:00 AM",
      event: "Christmas Celebrations",
      desc: "Special worship services, Christmas carols, and outreach programs.",
    },
    {
      image: "cross-over.jpg",
      date: "Dec. 31",
      time: "9:00 PM",
      event: "Crossover Night Service",
      desc: "Prayers, thanksgiving, and prophetic declarations for the new year.",
    },
    {
      image: "fasting-and-praying-program.jpg",
      date: "Jan. 2025",
      time: "Whole Month",
      event: "RCCG Annual Fasting and Prayer Program",
      desc: "A period of spiritual renewal and intercession.",
    },
    {
      image: "easter-celebrations.jpg",
      date: "Mar, 2025",
      time: "6:00 PM",
      event: "RCCG Special Holy Ghost Service",
      desc: "Healing, deliverance, and blessings with focused themes.",
    },
    {
      image: "easter-celebration.jpg",
      date: "Mar. 29–31",
      time: "9:00 AM",
      event: "Easter Retreat",
      desc: "Celebrating Christ’s resurrection through worship and teachings.",
    },
    {
      image: "annual-congregation.webp",
      date: "Aug. 2025",
      time: "Multiple days",
      event: "RCCG Annual Convention",
      desc: "A gathering at Redemption Camp, Nigeria, with themes to be announced.",
    },
    {
      image: "lets-go-and-fishing.jpg",
      date: "Dec. 2025",
      time: "TBD",
      event: "Let’s Go A-Fishing Evangelical Outreach",
      desc: "Evangelical missions during the Christmas season.",
    },
    {
      image: "chior.jpg",
      date: "Feb. 2025",
      time: "24 hours",
      event: "RCCG 24-Hour Marathon Praise",
      desc: "Continuous worship to honor God’s faithfulness.",
    },
  ]);

  return (
    <section
      className="w-full py-36"
      id="events"
    >
      <div className="w-full max-w-[1000px] mx-auto space-y-20">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-4xl sm:text-5xl text-black font-bold tracking-wider under max-w-[450px]">
            Get involved with our Events
          </h1>

          <div className="space-x-5 flex items-center relative">
            <div
              className="size-16 rounded-full bg-gray-200 shadow-lg flex items-center justify-center text-black hover:bg-black transition-all hover:text-white duration-500 cursor-pointer"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft size={54} />
            </div>
            <div
              className="size-16 rounded-full bg-gray-200 shadow-lg flex items-center justify-center hover:bg-black transition-all duration-500 text-black hover:text-white cursor-pointer"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRight size={54} />
            </div>
          </div>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          breakpoints={{
            640: {
              slidesPerView: 2
            }
          }
          }
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {eventDetails.map((event) => (
            <SwiperSlide>
              <EventContent
                image={event.image}
                date={event.date}
                time={event.time}
                event={event.event}
                desc={event.desc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Events;
