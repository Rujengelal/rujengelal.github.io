import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import PortFolio from "../../img/portfolio.png";
import BeatMaker from "../../img/beatmaker.png";
import Zainoo from "../../img/zainoo.png";
import URLShortner from "../../img/url_shortner.png";
import ContactUs from "../../img/contact_us.png";
import "swiper/css";
import { themeContext } from "../../Context";

function Portfolio() {
  const theme = useContext(themeContext);
  const projectData = [
    {
      title: "My Portfolio",
      image: PortFolio,
      url: "#",
    },
    {
      title: "Beat Maker",
      image: BeatMaker,
      url: "https://amazing-colden-f88300.netlify.app/",
    },
    {
      title: "Zainoo",
      image: Zainoo,
      url: "https://sparkling-cuchufli-d5b701.netlify.app/",
    },
    {
      title: "URL Shortner",
      image: URLShortner,
      url: "https://github.com/Rujengelal/URL-SHORTNER",
    },
    {
      title: "Contact Us",
      image: ContactUs,
      url: "https://github.com/Rujengelal/demo-contact-us",
    },
  ];

  return (
    <div className="portfolio">
      <span
        style={{
          color: theme.state.darkMode ? "white" : "",
        }}
      >
        Recent Projects
      </span>
      <Swiper
        spaceBetween={60}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {projectData.map((d) => (
          <SwiperSlide>
            <a target="_blank" href={d.url}>
              <img src={d.image} alt="" />
              <div
                className="text"
                style={{
                  color: theme.state.darkMode ? "white" : "",
                }}
              >
                {d.title}
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Portfolio;
