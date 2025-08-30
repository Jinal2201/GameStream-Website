import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";

const testimonials = [
  {
    id: 1,
    name: "MAREK S.",
    position: "Poland",
    quote: "OUTSTANDIG GAME DEVELOPMENT PARTNER",
    feedback:
      "Working with GameStream has been an incredible experience. Their ability to turn ideas into reality is unparalled. we are proud of the game they developed for us-it's visually stuning and engaging.",
    image: "https://i0.wp.com/games.webinent.com/wp-content/uploads/2024/09/3d-Character.png?zoom=3&resize=150%2C150&ssl=1",
  },
  {
    id: 2,
    name: "AGNIESZKA P.",
    position: "Poland",
    quote: "HIGHLY SKILLED AND RELIABLE",
    feedback:
      "GameStream consistently delivered high-quality work, on time and within budget. thier technical experties and creative input made the entire process seamless.",
    image: "https://i0.wp.com/games.webinent.com/wp-content/uploads/2024/09/3d-Character.png?zoom=3&resize=150%2C150&ssl=1",
  },
  {
    id: 3,
    name: "TOMASZ Z.",
    position: "Poland",
    quote: "EXCEPTIONAL TEAMWORK AND VISION",
    feedback:
    "The GameStream demostrated exceptional teamwork and vision throughout our project. their commitment to innovation and quailty is clear in every details of the game they created for us.",
    image: "https://i0.wp.com/games.webinent.com/wp-content/uploads/2024/09/3d-Character.png?zoom=3&resize=150%2C150&ssl=1",
  },
  {
    id: 4,
    name: "HENS L.",
    position: "Berlin Interactive",
    quote: "IMPRESSIVE INNOVATION AND QUALITY",
    feedback:
    "GameStream pushed the boundaries of creativity and technology to deliver a game beyond our excpectations. The visuals and gameplay are top-notch.",
    image: "https://i0.wp.com/games.webinent.com/wp-content/uploads/2024/09/3d-Character.png?zoom=3&resize=150%2C150&ssl=1",
  },
  {
    id: 5,
    name: "JASON M.",
    position: "USA",
    quote: "COLLABRATIVE AND CREATIVE GAME DEVELOPMENT",
    feedback:
    "From the first concept to the final product, GameStream worked closely with us. Their passion and commitment made our game a success! ",
    image: "https://i0.wp.com/games.webinent.com/wp-content/uploads/2024/09/3d-Character.png?zoom=3&resize=150%2C150&ssl=1",
  },
  {
    id: 6,
    name: "RAJESH K.",
    position: "New Delhi",
    quote: "TOP-NOTCH GAME DESIGN EXPERTISE",
    feedback:
    "The GameStream team demonstrated exceptional expertise in game design,bringing our vision to life in ways we never imagined.",
    image: "https://i0.wp.com/games.webinent.com/wp-content/uploads/2024/09/3d-Character.png?zoom=3&resize=150%2C150&ssl=1",
  },
  {
    id: 7,
    name: "MEERA P.",
    position: "New Delhi",
    quote: "RELIABLE AND CREATIVE TEAM",
    feedback:
    "GameStream is not only reliable but also incredibly creative. Thier undarstanding of the market helped us crate a game that truly resonates with players.",
    image: "https://i0.wp.com/games.webinent.com/wp-content/uploads/2024/09/3d-Character.png?zoom=3&resize=150%2C150&ssl=1",
  },
];

const Slider = () => {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">HEAR FROM OUR CLIENTS</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-card">
              <h3 className="testimonial-quote">"{testimonial.quote}"</h3>
              <p className="testimonial-feedback">{testimonial.feedback}</p>
              <div className="testimonial-author">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="author-image"
                />
                <div>
                  <p className="author-name">— {testimonial.name}</p>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
