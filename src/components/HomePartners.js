import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

const HomePartners = ({ partnersData: apiData = {} }) => {
  const { fields: { images = [] } = {} } = apiData || {};

  return (
    <div className="partner-section bg-color">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-4 col-12">
            <h6>
              NASI <br />
              PARTNERZY
            </h6>
          </div>
          <div className="col-md-9 col-sm-8 col-12">
            <div>
              <Swiper
                loop={true}
                slidesPerView={4}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
              >
                {images &&
                  images.map(({ url = "" }, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="partner-slider-item">
                          <img src={url} alt="partners" />
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePartners;
