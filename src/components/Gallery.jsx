import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const events = [
  {
    id: 1,
    title: "Amadeus Event",
    description: "Attended event at Amadeus.",
    image: "/events/amadeus.png"
  },
  {
    id: 2,
    title: "CGI: AI Future Summit 2026",
    description: "First event in CGI: AI Future Summit 2026.",
    image: "/events/cgi.png"
  },
  {
    id: 3,
    title: "Bahubali College Hackathon",
    description: "First external hackathon at Bahubali College of Engineering.",
    image: "/events/bahubali.png"
  },
  {
    id: 4,
    title: "Google Developer Program",
    description: "First Google Developer Program event.",
    image: "/events/google.png"
  },
  {
    id: 5,
    title: "CodeCraft Coordinator",
    description: "Coordinator for the CodeCraft event.",
    image: "/events/codecraft.jpg"
  }
];

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="gallery" className="py-20 px-6 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-bold text-white mb-4 text-center tracking-tight"
        >
          Events <span className="text-transparent [-webkit-text-stroke:1px_white]">Gallery</span>
        </h2>
        <p 
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          A glimpse into the various tech events, summits, and hackathons I've participated in and coordinated.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:border-white/30"
            >
              <div className="h-64 w-full overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
