import useAirtableData from "../utils/useAirtableData";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const About = () => {
  const airtableData = useSelector(
    ({ airtableReducer }) => airtableReducer.About
  );

  useAirtableData("About", "FETCH_ABOUT", airtableData);

  const [
    {
      fields: {
        content1 = "",
        content2 = "",
        header1 = "",
        header2 = "",
        image: [{ url = "" } = {}] = [],
      } = {},
    } = {},
  ] = airtableData || [];

  return (
    <>
      <div className="theme-inner-banner section-spacing">
        <div className="overlay">
          <div className="container">
            <h2>PORTFOLIO</h2>
          </div>
        </div>
      </div>
      <div className="callout-banner no-bg">
        <div className="container clearfix">
          <h3 className="title">
            <span dangerouslySetInnerHTML={{ __html: header1 || "" }} />
          </h3>
          <p>{content1}</p>
          <NavLink to="/kontakt" className="theme-button-one">
            SKONTAKTUJ SIĘ Z NAMI
          </NavLink>
        </div>
      </div>
      <div className="about-compnay-two no-bg section-spacing">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 text order-lg-last">
                <div className="theme-title-one">
                  <h2>{header2}</h2>
                </div>
                <div dangerouslySetInnerHTML={{ __html: content2 || "" }} />
              </div>
              <div className="col-lg-6 col-12 order-lg-first">
                <img src={url} alt="about" className="left-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
