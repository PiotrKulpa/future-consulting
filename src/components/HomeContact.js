const HomeContact = ({ contactData: apiData = {} }) => {
  const { fields: { header = "", content = "" } = {} } = apiData || {};

  return (
    <div className="contact-text">
      <h4>{header}</h4>
      <h5 dangerouslySetInnerHTML={{ __html: content || "" }} />
    </div>
  );
};

export default HomeContact;
