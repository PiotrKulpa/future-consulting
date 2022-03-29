import CountUp from "react-countup";

const HomeCounter = () => {
  return (
    <div className="theme-counter section-spacing">
      <div className="container">
        <div className="bg">
          <h6>Company Success</h6>
          <h2>Some fun facts about our consulting</h2>
          <div className="cunter-wrapper">
            <div className="row">
              <div className="col-md-3 col-6">
                <div className="single-counter-box">
                  <div className="number">
                    <span
                      className="timer"
                      data-from={0}
                      data-to={30}
                      data-speed={1200}
                      data-refresh-interval={5}
                    >
                      <CountUp end={30} />
                    </span>
                    +
                  </div>
                  <p>Years of Excellence</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="single-counter-box">
                  <div className="number">
                    <span
                      className="timer"
                      data-from={0}
                      data-to={100}
                      data-speed={1200}
                      data-refresh-interval={5}
                    >
                      <CountUp end={100} />
                    </span>
                    %
                  </div>
                  <p>Client Satisfaction</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="single-counter-box">
                  <div className="number">
                    <span
                      className="timer"
                      data-from={0}
                      data-to={53}
                      data-speed={1200}
                      data-refresh-interval={5}
                    >
                      <CountUp end={53} />
                    </span>
                    k
                  </div>
                  <p>Cases Completed</p>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="single-counter-box">
                  <div className="number">
                    <span
                      className="timer"
                      data-from={0}
                      data-to={24}
                      data-speed={1200}
                      data-refresh-interval={5}
                    >
                      <CountUp end={24} />
                    </span>
                  </div>
                  <p>Consultants</p>
                </div>
              </div>
            </div>
          </div>
          <a href="/" className="theme-button-one">
            ZOBACZ
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeCounter;
