import { useState, useRef, useEffect } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    firstname: "",
    email: "",
    message: ""
  })

  const handleInputs = (e: { target: { name: any; value: any; }; }) => {

    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })

  }

  // const inputs = useRef([])

  // const addCheck = el => {
  //   if(el && !inputs.current.includes(el)){
  //     inputs.current.push(el);
  //   }
  // }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    setFormState({
      name: "",
      firstname: "",
      email: "",
      message:""
    })
    // Trigger auth
    // console.log(inputs.current, inputs.current[0].value, inputs.current[1].value);

    //  inputs.current.forEach(inp => {
    //    inp.value = "";
    //  })
  }


  return (

      <div className="container rounded ">
        <div className="w-50 m-auto">
          <div className="col-12 text-center text-info py-4 my-4">
            <h1> Avez-vous des questions? </h1>
        </div>
        <div className="row mb-3">
          <div className="col-md 5 d-flex justify-content-center">
          </div>
          <div className="row mb-3">
            <form >
              <div className="mb-3">
                <label htmlFor="exampleForm" className="form-label"></label>
                <input type="text" className="form-control" id="exampleForm" placeholder="Nom" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleForm" className="form-label"></label>
                <input type="text" className="form-control" id="exampleForm" placeholder="Prénom" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label text-info " > Votre message </label>
                <textarea className="form-control" id="exampleFormControlTextarea1 row-5"></textarea>
              </div>
              <button type="submit" className="btn btn-outline-info">Envoyer le message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}



