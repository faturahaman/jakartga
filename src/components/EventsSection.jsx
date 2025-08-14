// src/components/EventsSection.jsx
import React, { useState } from 'react';
import { eventDetails } from '../data/eventDetails';

const EventsSection = () => {
  const eventList = [
    { 
      id: 'event-bogor-flower', 
      name: 'Bogor Flower Festival 2025', 
      date: '10 Jul - 15 Jul', 
      iconText: 'Flower',
      image: '/logo/public/ammar-andiko-R1DpwwnIoIU-unsplash.jpg' 
    },
    { 
      id: 'event-bogor-food', 
      name: 'Festival Kuliner Bogor', 
      date: '20 Jul - 22 Jul', 
      iconText: 'Food',
      image: '/logo/public/bigu.jpg' 
    },
    { 
      id: 'event-bogor-culture', 
      name: 'Pameran Budaya Bogor', 
      date: '01 Aug - 05 Aug', 
      iconText: 'Culture',
      image: '/logo/public/batik.jpg' 
    },
    { 
      id: 'event-bogor-music', 
      name: 'Bogor Music Fest', 
      date: '15 Aug - 17 Aug', 
      iconText: 'Music',
      image: '/logo/public/doh_kyung.jpg' 
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState(eventDetails['event-bogor-flower']);

  return (
    <section className="px-4 lg:px-6 py-8 lg:py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row p-6 gap-4">
        {/* Kolom Kalender & Daftar Acara */}
        <div className="bg-white text-black p-4 rounded-lg w-full md:w-1/3">
          <h2 className="text-center font-bold text-lg mb-4">Juli 2025</h2>

          {/* Header Kalender */}
          <div className="grid grid-cols-7 text-center font-semibold text-sm mb-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          {/* Tanggal Kalender */}
          <div className="grid grid-cols-7 text-center text-sm gap-y-1">
            {[...Array(2)].map((_, i) => (
              <div key={`empty-${i}`}></div>
            ))}
            {[...Array(31)].map((_, i) => {
              const day = i + 1;
              const isHighlighted = [10, 15, 20, 22].includes(day); // tanggal acara
              return (
                <div
                  key={day}
                  className={`${isHighlighted ? 'text-white bg-green-500 rounded-full' : ''}`}
                >
                  {day}
                </div>
              );
            })}
          </div>

          {/* Daftar Acara */}
          <div className="mt-6 space-y-4">
            {eventList.map((event) => (
              <div
                key={event.id}
                className="cursor-pointer flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setSelectedEvent(eventDetails[event.id])}
              >
                <img
                  src={event.image}
                  className="w-12 h-10 object-cover rounded"
                  alt={event.name}
                />
                <div>
                  <p className="font-semibold text-sm">{event.name}</p>
                  <p className="text-green-500 text-xs font-bold">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail Acara */}
        <div className="bg-white text-black p-6 rounded-lg w-full md:w-2/3">
          {selectedEvent && (
            <div>
              <img
                src={selectedEvent.imgSrc}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{selectedEvent.title}</h3>
              <p className="text-sm text-gray-600 mb-1">
                <i className="far fa-calendar-alt mr-2"></i>
                {selectedEvent.date}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <i className="fas fa-map-marker-alt mr-2"></i>
                {selectedEvent.location}
              </p>
              <p className="text-gray-700 leading-relaxed">{selectedEvent.description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
