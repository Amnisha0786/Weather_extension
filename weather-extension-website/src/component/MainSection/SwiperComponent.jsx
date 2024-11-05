// SwiperComponent.js
"use client";
import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

// SwiperCore.use([Navigation, Pagination, Autoplay]);

const data = [
  {
    title: "Real-time Weather Data",
    description:
      "Weather APIs provide real-time or forecasted weather data, allowing your extension to display up-to-date information to users. This can include current temperature, humidity, wind speed, and forecasts.",
  },
  {
    title: "Improved User Experience",
    description:
      "Integrating weather information enhances the user experience by providing relevant and personalized content. Users can quickly access weather details without leaving your extension, making it more convenient.",
  },
  {
    title: "Customization",
    description:
      "Weather APIs often allow you to retrieve weather information based on geographic coordinates. This enables your extension to customize content based on the user's location, offering a more personalized experience.",
  },
  {
    title: "Increased Engagement",
    description:
      "Weather updates are often sought after by users, and providing this information can increase user engagement with your extension. Users are more likely to interact with content that is timely and relevant to their needs.",
  },
  {
    title: "Enhanced Functionality",
    description:
      "Weather data can be used to enhance the functionality of your extension. For example, you can incorporate features such as weather-based reminders, alerts, or recommendations tailored to specific weather conditions.",
  },
  {
    title: "Global Coverage",
    description:
      "Weather APIs typically offer global coverage, allowing your extension to provide weather information for users around the world. This can be particularly useful for applications with a diverse user base.",
  },
];

const SwiperComponent = () => {
  return (
    <div className={`service-carousel pb-4 `}>
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true, type: "bullets" }}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          500: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        init={false}
      >
        {/* Slides */}
        {data?.map((slide, index) => (
          <div className="bg-white ">
            <SwiperSlide key={index}>
              <div className="mt-12 min-h-[350px] shadow-lg shadow-black max-w-[20rem] p-6 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200">
                <h5 className=" text-center mb-4 text-xl font-bold tracking-tight text-gray-900">
                  {slide.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
                  {slide.description}
                </p>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
