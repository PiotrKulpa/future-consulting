import useAirtableData from "../utils/useAirtableData";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const airtableData = useSelector(
    ({ airtableReducer }) => airtableReducer.Footer
  );

  useAirtableData("Footer", "FETCH_FOOTER", airtableData);

  const [
    {
      fields: {
        content1 = "",
        content2 = "",
        content3 = "",
        header1 = "",
        header2 = "",
        header3 = "",
        phone1 = "",
      } = {},
    } = {},
  ] = airtableData || [];

  return (
    <div>
      {/*
      =====================================================
      Footer
      =====================================================
      */}
      <footer className="theme-footer-one">
        <div className="top-footer">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-sm-6 about-widget">
                <h6 className="title">{header1}</h6>
                <p>{content1}</p>
                <div className="queries">
                  <i className="flaticon-phone-call" />
                  {phone1}
                </div>
              </div>{" "}
              {/* /.about-widget */}
              <div className="col-xl-4 col-lg-4 col-sm-6 footer-recent-post">
                <h6 className="title">{header2}</h6>
                <div dangerouslySetInnerHTML={{ __html: content2 }} />
              </div>{" "}
              {/* /.footer-recent-post */}
              <div className="col-xl-4 col-lg-4 col-sm-6 footer-list">
                <h6 className="title">{header3}</h6>
                <div dangerouslySetInnerHTML={{ __html: content3 }} />
              </div>{" "}
              {/* /.footer-list */}
            </div>{" "}
            {/* /.row */}
          </div>{" "}
          {/* /.container */}
        </div>{" "}
        {/* /.top-footer */}
        <div className="bottom-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <p>
                  © Copyrights {new Date().getFullYear()}. All Rights Reserved.
                </p>
              </div>
              <div className="col-md-6 col-12">
                <ul>
                  <li>
                    <NavLink to="/">O nas</NavLink>
                  </li>
                  <li>
                    <NavLink to="/uslugi">Usługi</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cennik">Cennik</NavLink>
                  </li>
                  <li>
                    <NavLink to="/kontakt">Kontakt</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* /.bottom-footer */}
      </footer>{" "}
      {/* /.theme-footer */}
      {/* Scroll Top Button */}
      <button className="scroll-top tran3s">
        <i className="fa fa-angle-up" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Footer;
