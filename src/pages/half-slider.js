// First, make sure to install the needed packages if you haven't:
// npm install swiper@latest react@latest next@latest

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import AboutComponent from "@components/AboutComponent";
import BlogComponent from "@components/BlogComponent";
import Drops from "@components/Drops";
import ServicesComponent from "@components/ServicesComponent";
import WhyChooseUsComponent from "@components/WhyChooseUsComponent";
import Layout from "../layout/Layout";

// Dynamically import Swiper components with SSR disabled
const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then((mod) => mod.SwiperSlide), { ssr: false });

const HalfSlider = () => {
  // State to ensure Swiper modules are loaded client-side
  const [swiperLoaded, setSwiperLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true; // Track if component is mounted to prevent state update on unmounted component
    // Dynamically import Swiper modules
    import('swiper').then((Swiper) => {
      const { Autoplay, EffectCreative } = Swiper;
      if (Swiper && !swiperLoaded && isMounted) {
        Swiper.default.use([Autoplay, EffectCreative]);
        setSwiperLoaded(true);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [swiperLoaded]);

  return (
    <Layout pageName={"Home Half Slider"}>
      <div className="neoh_fn_hero half">
        <div className="bg_overlay">
          <div className="overlay_slider">
            {swiperLoaded && (
              <Swiper
                loop={true}
                effect="creative"
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: ["-20%", 0, -1],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="main_image" style={{ backgroundImage: "url('/img/drops/1.jpg')" }} />
                </SwiperSlide>
                <SwiperSlide>
                  <div className="main_image" style={{ backgroundImage: "url('/img/drops/2.jpg')" }} />
                </SwiperSlide>
                <SwiperSlide>
                  <div className="main_image" style={{ backgroundImage: "url('/img/drops/3.jpg')" }} />
                </SwiperSlide>
                <SwiperSlide>
                  <div className="main_image" style={{ backgroundImage: "url('/img/drops/4.jpg')" }} />
                </SwiperSlide>
                <SwiperSlide>
                  <div className="main_image" style={{ backgroundImage: "url('/img/drops/5.jpg')" }} />
                </SwiperSlide>
              </Swiper>
            )}
          </div>
        </div>
        <div className="hero_content">
          <div className="container">
            <div className="content">
              <h2 className="fn_title" title="Neoh">
                Neoh
              </h2>
              <p className="fn_desc fn_animated_text">
                The collection built by and run by ‘codeefly’. Together we are strong than ever.
              </p>
            </div>
          </div>
          <a href="#about" className="neoh_fn_down magic-hover magic-hover__square">
            <span className="text">Scroll Down</span>
            <span className="icon">
              <img src="/svg/right-arr.svg" alt="" className="fn__svg" />
            </span>
          </a>
        </div>
      </div>
      <AboutComponent />
      <ServicesComponent />
      <Drops />
      <WhyChooseUsComponent />
      <BlogComponent />
    </Layout>
  );
};

export default HalfSlider;
