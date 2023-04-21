import { FormEvent, useRef } from "react";
import "./styles.scss";

const Form = () => {
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    console.log("button form clicked");
    console.log(emailElement.current?.value);
    console.log(passwordElement.current?.value);
  };

  return (
    <div className="App">
      <h1>Demo formulaire</h1>
      {/*<form onSubmit={(e) =>{handleSubmitForm(e)}}>*/}
      <form className="w-50 m-auto" onSubmit={handleSubmitForm}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="emailUser"
            placeholder="name@example.com"
            ref={emailElement}
          />
          <label htmlFor="emailUser">Email</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="passwordUser"
            placeholder="Password"
            ref={passwordElement}
          />
          <label htmlFor="passwordUser">Mot de passe</label>
        </div>
        <button className="mt-3 btn btn-primary" type="submit">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Form;