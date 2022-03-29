import useAirtableData from "../utils/useAirtableData";
import { useSelector } from "react-redux";

const Service = () => {
  const airtableData = useSelector(
    ({ airtableReducer }) => airtableReducer.Services
  );
  useAirtableData("Services", "FETCH_SERVICES", airtableData);

  const [
    {
      fields: { content = "", headers = "", mainHeader = "", images = [] } = {},
    } = {},
  ] = airtableData || [];

  return (
    <>
      <div className="theme-inner-banner section-spacing">
        <div className="overlay">
          <div className="container">
            <h2>USŁUGI</h2>
          </div>
        </div>
      </div>
      <div className="our-solution section-spacing">
        <div className="container">
          <div className="theme-title-one">
            <h2>{mainHeader}</h2>
          </div>
          <div className="wrapper">
            <div className="row">
              {images &&
                images.map(({ url = "" }, i) => {
                  return (
                    <div key={i} className="col-lg-4 col-sm-6 col-12">
                      <div className="single-solution-block">
                        <img src={url} alt="service" className="icon" />
                        <h5>
                          <a href="service-details.html">{headers[i] || ""}</a>
                        </h5>
                        <p>{content[i] || ""}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
