import { useState } from "react";
import axios from "axios";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

const HomeConsultationForm = () => {
  const { register } = useFormContext();

  return (
    <div className="row">
      <input
        id="prodId"
        name="consultation"
        type="hidden"
        value="true"
        {...register("consultation")}
      />
      <div className="col-md-6">
        <input
          pattern="^[\s\p{L}]+$"
          type="text"
          placeholder="Imię *"
          required
          {...register("name")}
        />
      </div>
      <div className="col-md-6">
        <input
          pattern="^[0-9]{0,10}$"
          type="text"
          placeholder="Telefon *"
          required
          {...register("phone")}
        />
      </div>
      <div className="col-md-6">
        <input
          type="email"
          placeholder="Email *"
          required
          {...register("email")}
        />
      </div>
      <div className="col-md-6">
        <select
          className="form-control"
          id="exampleSelect1"
          {...register("service")}
        >
          <option>Usługa, której szukasz?</option>
          <option>Business</option>
          <option>Produkty</option>
        </select>
      </div>
      <div className="col-12">
        <textarea
          maxLength="500"
          placeholder="Wiadomość *"
          defaultValue={""}
          required
          {...register("message")}
        />
      </div>
    </div>
  );
};

const HomeConsultation = ({ consultationData: apiData = {} }) => {
  const { fields: { header = "", content = "" } = {} } = apiData || {};

  const methods = useForm();

  const [formResponse, setFormResponse] = useState({});

  const onSubmit = async (data) => {
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
    <div id="consultation-form" className="consultation-form section-spacing">
      <div className="container">
        <div className="theme-title-one">
          <h2>{header}</h2>
          <p>{content}</p>
        </div>
        <div className="clearfix main-content no-gutters row">
          <div className="col-xl-12 col-lg-12 col-12">
            <div className="form-wrapper">
              <FormProvider {...methods}>
                <form
                  onSubmit={methods.handleSubmit(onSubmit)}
                  className="theme-form-one"
                >
                  <HomeConsultationForm />
                  <button className="theme-button-one">
                    PRZEŚLIJ ZAPYTANIE
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
    </div>
  );
};

export default HomeConsultation;
