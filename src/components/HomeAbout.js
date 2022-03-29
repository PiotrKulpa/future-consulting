const HomeAbout = ({ aboutData: apiData = {} }) => {
  const { fields: { header = "", content = "" } = {} } = apiData || {};

  return (
    <div className="about-compnay section-spacing">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <img src="images/home/1.jpg" alt="about" />
          </div>
          <div className="col-lg-6 col-12">
            <div className="text">
              <div className="theme-title-one">
                <h2>{header}</h2>
                <div dangerouslySetInnerHTML={{ __html: content || "" }}></div>
              </div>
              <ul className="mission-goal clearfix">
                <li>
                  <i className="icon fa fa-star-o" aria-hidden="true"></i>
                  <h4>Wizja</h4>
                </li>
                <li>
                  <i className="icon fa fa-trophy" aria-hidden="true"></i>
                  <h4>Misja</h4>
                </li>
                <li>
                  <i className="icon fa fa-bullseye" aria-hidden="true"></i>
                  <h4>Cele</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
