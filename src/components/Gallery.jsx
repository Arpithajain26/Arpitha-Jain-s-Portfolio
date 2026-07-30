import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-[0_18px_50px_rgba(168,85,247,0.22)]"
            >
              <div className="h-64 w-full overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-100">
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
