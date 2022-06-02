import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import ToodoList from "../../img/ToodoList.png";
import Ecommerce from "../../img/E-commrce.png";
import HOC from "../../img/hoc.png";
import Chat from "../../img/chat.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Deployed Projects </span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://takslistapp.netlify.app" >
          <img src={ToodoList} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="https://mobi-app.netlify.app">
            <img src={Ecommerce} alt="" />
            </a>          
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://chat-app-react18.netlify.app">
          <img src={Chat} alt="" />
          </a>          
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
