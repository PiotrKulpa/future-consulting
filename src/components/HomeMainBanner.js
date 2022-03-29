import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Pagination, Autoplay } from "swiper/core";

SwiperCore.use([Autoplay, Pagination]);

const HomeMainBanner = ({ bannerData: apiData = {} }) => {
  const { fields: { images = [], headers = [], subheaders = [] } = {} } =
    apiData || {};

  return (
    <div className="main-banner-container">
      <Swiper
        className="mySwiper"
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {images &&
          images.map(({ url }, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="main-banner-content-item">
                  <div className="main-banner-content-wrapper">
                    <p className="wow fadeInUp animated">
                      {headers[index] || ""}
                    </p>
                    <h1
                      dangerouslySetInnerHTML={{
                        __html: subheaders[index] || "",
                      }}
                      className="wow fadeInUp animated"
                      data-wow-delay="0.2s"
                    ></h1>
                    <NavLink
                      to="/kontakt"
                      className="theme-button-one wow fadeInUp animated"
                      data-wow-delay="0.39s"
                    >
                      KONTAKT
                    </NavLink>
                  </div>
                </div>
                <img src={url} alt=""/>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default HomeMainBanner;
