const HomeFeatureBanner = ({ featureBannerData: apiData = {} }) => {
  const { fields: { content = "" } = {} } = apiData || {};

  return (
    <div className="feature-banner section-spacing">
      <div className="opacity">
        <div className="container">
          <h2 dangerouslySetInnerHTML={{ __html: content || "" }} />
          <a href="#consultation-form" className="theme-button-one">
            UZYSKAJ WYCENĘ
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatureBanner;
