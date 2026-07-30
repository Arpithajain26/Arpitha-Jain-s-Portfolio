import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaExpand, FaTimes } from 'react-icons/fa';

const events = [
  {
    id: 1,
    title: "Amadeus Industry Visit",
    description: "Visited the Amadeus office to gain insights into enterprise software, travel technology, and modern engineering practices. Interacted with industry professionals and explored how technology powers global travel solutions.",
    image: "/events/amadeus.png"
  },
  {
    id: 2,
    title: "Future Ready AI Summit 2026",
    description: "Participated in the Future Ready AI Summit hosted by CGI, exploring the latest advancements in Artificial Intelligence and Generative AI. Networked with industry experts and learned about real-world AI applications and career opportunities.",
    image: "/events/cgi.png"
  },
  {
    id: 3,
    title: "Hackathon Team Collaboration",
    description: "Collaborated with a multidisciplinary team to brainstorm, design, and build innovative technology solutions. Strengthened teamwork, communication, and problem-solving skills in a fast-paced environment.",
    image: "/events/bahubali.png"
  },
  {
    id: 4,
    title: "Build with AI – Google Developer Groups",
    description: "Attended Google's Build with AI event to explore Generative AI, Gemini APIs, and modern AI development tools. Gained practical insights into building intelligent applications using Google's AI ecosystem.",
    image: "/events/google.png"
  },
  {
    id: 5,
    title: "CODE-CRAFT 2026",
    description: "Participated in CODE-CRAFT 2026, engaging in technical sessions and collaborative learning with fellow developers. Enhanced programming knowledge through hands-on activities and peer interaction.",
    image: "/events/codecraft.jpg"
  },
  {
    id: 6,
    title: "RUDSETI Entrepreneurship Development Program",
    description: "Completed a one-week Entrepreneurship Development Program focused on innovation, business planning, and leadership skills. Developed an entrepreneurial mindset through practical workshops and interactive sessions.",
    image: "/events/rudseti-edp-training.jpg"
  }
];

const Gallery = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

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
            <button
              type="button"
              key={event.id}
              data-aos="fade-up"
              data-aos-delay={index * 130}
              onClick={() => setSelectedEvent(event)}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 text-left backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-[0_18px_50px_rgba(168,85,247,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              aria-label={`View ${event.title}`}
            >
              <div className="h-64 w-full overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <div className="mb-auto flex items-center gap-2 self-end rounded-full border border-white/25 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white transform -translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <FaExpand /> View Event
                </div>
                <h3 className="text-xl font-bold text-white mb-2 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {event.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-title"
          onClick={() => setSelectedEvent(null)}
        >
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 bg-[#101010] shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedEvent(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/70 p-3 text-white transition-colors hover:bg-purple-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close event preview"
            >
              <FaTimes />
            </button>
            <img src={selectedEvent.image} alt={selectedEvent.title} className="max-h-[70vh] w-full object-contain bg-black" />
            <div className="p-5">
              <h3 id="event-title" className="text-2xl font-bold text-white">{selectedEvent.title}</h3>
              <p className="mt-2 leading-relaxed text-gray-300">{selectedEvent.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
