import HomeContact from "./HomeContact";

const HomeServices = ({ servicesData: apiData = {}, contactData = {} }) => {
  const {
    fields: {
      images = [],
      headers = [],
      subheaders = [],
      header = "",
      content = "",
    } = {},
  } = apiData || {};

  return (
    <div className="service-style-one section-spacing">
      <div className="container">
        <div className="theme-title-one">
          <h2>{header}</h2>
          <p>{content}</p>
        </div>
        <div className="wrapper">
          <div className="row">
            {images &&
              images.map(({ url = "" }, index) => {
                return (
                  <div key={index} className="col-xl-4 col-md-6 col-12">
                    <div className="single-service">
                      <div className="img-box">
                        <img src={url} alt="service" />
                      </div>
                      <div className="text">
                        <h5>
                          <a href="service-details.html">
                            {headers[index] || ""}
                          </a>
                        </h5>
                        <p>{subheaders[index] || ""}</p>
                        <a href="service-details.html" className="read-more">
                          READ MORE{" "}
                          <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <HomeContact {...{ contactData }} />
      </div>
    </div>
  );
};

export default HomeServices;
