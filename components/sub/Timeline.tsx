"use client"
import React, { Fragment, useEffect, useRef } from 'react'
import { motion } from "framer-motion";

type TimelineProps = {
  events: Event[];
};

type EventCardProps = {
  heading: string;
  subHeading: string;
  direction: 'left' | 'right';
};

type Event = {
  heading: string;
  subHeading: string;
  direction: 'left' | 'right';
};

const Timeline = ({events}: TimelineProps) => {

  useEffect(() => {
    const cardsElement = document.getElementById("cards");
    if (cardsElement) {
      cardsElement.onmousemove = e => {
        for(const card of document.getElementsByClassName("event-card")) {
          const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
                console.log(x, y);

          (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
          (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
        };
      }
    }
  }, []);

  const Circle = () => {
    return (
      <motion.div 
        className='bg-gradient-to-r from-purple-900 to-violet-700 rounded-full w-4 h-4 mx-auto'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    )
  }
  
  const EventCard = ({heading, subHeading, direction}: EventCardProps) => {

    return (
      <motion.div className='event-card flex flex-col gap-y-2 shadow-white rounded-lx p-4 z-[30] '
      initial={{ opacity: 0, x: direction === 'left' ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}>
          <div className="card-content">
        <div className='text-white font-bold text-lg border-b p-2'>{heading}</div>
        <div className='text-sm text-white p-3'>{subHeading}</div></div>
      </motion.div>
    )
  }
  
  const Pillar = () => {
    return (
      <motion.div 
        className='bg-gradient-to-b from-purple-950 to-violet-700 rounded-t-full rounded-b-full w-2 h-full mx-auto'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    )
  }

  return (
    <div className='cards flex flex-col gap-y-3 w-full my-4' id="cards">
      <Circle />
      {events.map((event, index) => {
        return (
          <Fragment key={index}>
            <div className=' grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto'>
              {event.direction === 'left' ? (
                <EventCard heading={event.heading} subHeading={event.subHeading} direction='left'/>
              ) :
              (
                <div></div>
              )}
              <Pillar />
              {event.direction === 'right' ? (
                <EventCard heading={event.heading} subHeading={event.subHeading} direction='right'/>
              ) :
              (
                <div></div>
              )}
            </div>
            {index < (events.length - 1) && <Circle />}
          </Fragment>
        )
      })}
      <Circle />
    </div>
  )
}


export default Timeline