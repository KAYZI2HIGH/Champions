import React from 'react'

import { Calendar, Clock } from "lucide-react";

const EventContent = ({image, date, time, event, desc}) => {
  return (
    <div className="w-full  space-y-5 text-black pb-10 rounded-2xl overflow-hidden">
      <img
        src={`images/${image}`}
        alt="Event thumbnail"
        className='w-full h-72'
      />
      <div className="p-1 space-y-5">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center space-x-3">
            <Calendar />
            <h1 className="font-bold text-lg tracking-wide">{date}</h1>
          </div>
          <div className="flex justify-center items-center space-x-3">
            <Clock />
            <h1 className="font-bold text-lg tracking-wide">{time}</h1>
          </div>
        </div>
        <h1 className="font-bold text-3xl tracking-wider capitalize">
          {event}
        </h1>
        <p className=" text-xl tracking-wider">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default EventContent