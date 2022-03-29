import { Swiper, SwiperSlide } from "swiper/react";

const HomeTopFeature = ({ featuresData: apiData = {} }) => {
  const { fields: { images = [], headers = [], subheaders = [] } = {} } =
    apiData || {};

  return (
    <div className="top-feature section-spacing">
      <div className="top-features-slide">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
        >
          {images &&
            images.map(({ url }, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="feature-item">
                    <div
                      className="main-content"
                      style={{ background: "#fafafa" }}
                    >
                      <img src={url} alt="top-feature" />
                      <h4>
                        <a href="/">{headers[index] || ""}</a>
                      </h4>
                      <p>{subheaders[index] || ""}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeTopFeature;
