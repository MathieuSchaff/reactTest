import React from "react";

const Form = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [textarea, setTextarea] = React.useState("");
  const [checkboxChecked, setcheckboxChecked] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState(true);
  const [errorName, setErrorName] = React.useState(true);
  const [errorTextArea, seterrorTextArea] = React.useState(true);
  const [errorChecked, seterrorChecked] = React.useState(true);
  let checkBoxErr = document.querySelector(".checkboxErr");
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  function validateName(value) {
    value = value.trim();
    return /^[a-z ,.'-]+$/i.test(value);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    console.log(value);
    console.log(name);
    switch (name) {
      case "email":
        if (validateEmail(value)) {
          e.target.closest(".form-group").removeAttribute("data-error-visible");
          e.target.closest(".form-group").removeAttribute("data-error");
          setErrorEmail(false);
        } else {
          e.target
            .closest(".form-group")
            .setAttribute("data-error", `Email invalide`);
          e.target
            .closest(".form-group")
            .setAttribute("data-error-visible", true);
          setErrorEmail("Email invalide");
        }
        setEmail(value);

        break;
      case "name":
        if (validateName(value)) {
          e.target.closest(".form-group").removeAttribute("data-error-visible");
          e.target.closest(".form-group").removeAttribute("data-error");
          setErrorName(false);
        } else {
          e.target
            .closest(".form-group")
            .setAttribute("data-error", `Nom invalide`);
          e.target
            .closest(".form-group")
            .setAttribute("data-error-visible", true);
          setErrorName("Email invalide");
        }
        setName(value);
        break;
      case "textarea":
        if (value.length >= 5) {
          e.target.closest(".form-group").removeAttribute("data-error-visible");
          e.target.closest(".form-group").removeAttribute("data-error");
          seterrorTextArea(false);
        } else {
          e.target
            .closest(".form-group")
            .setAttribute("data-error", `Message incomplet`);
          e.target
            .closest(".form-group")
            .setAttribute("data-error-visible", true);
          seterrorTextArea("Email invalide");
        }
        setTextarea(value);
        break;
      case "genre":
        if (checkBoxErr.hasAttribute("data-error-visible")) {
          checkBoxErr.removeAttribute("data-error-visible");
          checkBoxErr.removeAttribute("data-error");
        }
        seterrorChecked(false);
        setcheckboxChecked(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    if (errorChecked) {
      checkBoxErr.setAttribute("data-error", `Veuillez choisir un genre`);
      checkBoxErr.setAttribute("data-error-visible", true);
    }
    if (errorEmail || errorName || errorTextArea || errorChecked) {
      event.preventDefault();
      alert("Veuillez remplir tous les champs");
    } else {
      alert("Formulaire remplie");
    }
  };

  return (
    <div className="modal-wrapper">
      <h2>Contact us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">Message</label>
          <textarea
            className="form-control"
            id="textarea"
            name="textarea"
            rows="10"
            value={textarea}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group checkboxErr">
          <p> Genre </p>
          <div className="form-check">
            <input
              type="radio"
              id="Male"
              name="genre"
              value="Male"
              onChange={handleChange}
            />
            <label htmlFor="Male">Male</label>
            <input
              type="radio"
              id="Female"
              name="genre"
              value="Female"
              onChange={handleChange}
            />
            <label htmlFor="Female">Female</label>

            <input
              type="radio"
              id="nonBinary"
              name="genre"
              value="nonBinary"
              onChange={handleChange}
            />
            <label htmlFor="nonBinary">Non Binary</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
