import { useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import axios from "axios";
import useAirtableData from "../utils/useAirtableData";
import { useSelector } from "react-redux";

const ContactForm = () => {
  const { register } = useFormContext();

  return (
    <div className="row">
      <div className="col-sm-6 col-12">
        <input
          pattern="^[\s\p{L}]+$"
          type="text"
          placeholder="Imię *"
          name="name"
          {...register("name")}
          required
        />
      </div>
      <div className="col-sm-6 col-12">
        <input
          pattern="^[0-9]{0,10}$"
          type="text"
          placeholder="Telefon *"
          name="phone"
          {...register("phone")}
          required
        />
      </div>
      <div className="col-sm-6 col-12">
        <input
          type="email"
          placeholder="Email *"
          name="email"
          {...register("email")}
          required
        />
      </div>
      <div className="col-sm-6 col-12">
        <input
          pattern="^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$"
          type="text"
          placeholder="Strona"
          name="web"
          {...register("web")}
        />
      </div>
      <div className="col-12">
        <textarea
          maxLength="500"
          placeholder="Wiadomość"
          name="message"
          defaultValue={""}
          {...register("message")}
          required
        />
      </div>
    </div>
  );
};

const Contact = () => {
  const airtableData = useSelector(
    ({ airtableReducer }) => airtableReducer.Contact
  );
  useAirtableData("Contact", "FETCH_CONTACT", airtableData);
  const [formResponse, setFormResponse] = useState({});
  const [{ fields: { header = "", content = "" } = {} } = {}] =
    airtableData || [];

  const methods = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const config = {
      method: "post",
      url: `http://api.future-consulting.pl`,
      data,
    };

    try {
      const response = await axios(config);
      const { data } = response || {};
      setFormResponse(data);
    } catch (err) {
      setFormResponse({
        error: true,
        message: "Coś poszło nie tak. Spróbuj ponownie za jakiś czas.",
      });
      console.log(err);
    }
  };

  return (
    <>
      <div id="map">
        <iframe
          title="mapa"
          width="100%"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Agatowa%2020/54,%20Lublin&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
      <div className="contact-us-section section-spacing">
        <div className="container">
          <div className="theme-title-one">
            <h2>{header}</h2>
            <p>{content}</p>
          </div>
          <div className="clearfix main-content no-gutters row">
            <div className="col-lg-12 col-12">
              <div className="form-wrapper">
                <FormProvider {...methods}>
                  <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className="theme-form-one form-validation"
                    autoComplete="on"
                  >
                    <ContactForm />
                    <button type="submit" className="theme-button-one">
                      WYŚLIJ WIADOMOŚĆ
                    </button>
                  </form>
                </FormProvider>
                <p className={formResponse?.error ? "error" : "success"}>
                  {formResponse?.message}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="alert-wrapper" id="alert-success">
          <div id="success">
            <button className="closeAlert">
              <i className="fa fa-times" aria-hidden="true" />
            </button>
            <div className="wrapper">
              <p>Your message was sent successfully.</p>
            </div>
          </div>
        </div>
        <div className="alert-wrapper" id="alert-error">
          <div id="error">
            <button className="closeAlert">
              <i className="fa fa-times" aria-hidden="true" />
            </button>
            <div className="wrapper">
              <p>Sorry!Something Went Wrong.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
